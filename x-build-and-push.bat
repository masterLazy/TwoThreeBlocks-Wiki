@echo off

set mainPath=%~dp0
set buildPath=%~dp0../TwoThreeBlocks-Wiki-build

set /p message=Enter update message: 


echo.
echo * Task: Push branch 'main'
for /f %%i in ('git rev-parse HEAD') do set "mainLastCommit=%%i"
call git add . || goto :error
call git commit -m "%message%" || goto :error
call git push --force-with-lease || goto :rollbackMain
echo Pushed branch 'main'.

echo.
echo * Task: Build Docusaurus
call yarn build || goto :rollbackMain
echo Built Docusaurus.

echo.
echo * Task: Copy build result to branch 'build'
call robocopy "build" "%buildPath%/docs" /MIR /NFL /NDL /NJH
if %errorlevel% geq 4 (
    goto :rollbackMain
)
echo Copied build result.

cd "%buildPath%"

echo.
echo * Task: Copy CNAME
copy "CNAME" "docs/"

echo.
echo * Task: Push branch 'github-pages'
for /f %%i in ('git rev-parse HEAD') do set "buildLastCommit=%%i"
call git add . || goto :rollbackMain
call git commit -m "%message%" || goto :rollbackMain
call git push --force-with-lease || goto :rollbackBoth
echo Pushed branch 'github-pages'.

goto :success

:rollbackBoth
echo.
echo * Compensate: Reset commit on branch 'github-pages'
cd "%buildPath%"
call git reset --soft %buildLastCommit% || goto :rollbackMain
echo Reset github-pages to %buildLastCommit%.

:rollbackMain
echo.
echo * Compensate: Reset commit on branch 'main'
cd "%mainPath%"
call git reset --soft %mainLastCommit% || goto :error
echo Reset main to %mainLastCommit%
goto :error

:success
echo.
echo Done.
cd "%mainPath%"
pause
exit /b

:error
echo.
echo Error: Task finished with exception.
cd "%mainPath%"
pause
exit /b