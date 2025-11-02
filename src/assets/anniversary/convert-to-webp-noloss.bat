@echo off
setlocal enabledelayedexpansion

for %%a in (*.jpg *.jpeg *.png *.tif *.tiff *.bmp) do (
    set "filename=%%~na"
    cwebp "%%a" -o "!filename!.webp" -z 9
)

endlocal