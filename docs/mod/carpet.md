# Carpet 地毯
https://www.mcmod.cn/class/2361.html

> Carpet mod 一款为原版Minecraft玩法带来的革新性模组，提升了玩家对游戏的控制力和理解度。通过精心设计的改动，消除了游戏中一些烦人的问题。在不影响游戏正常运行与体验的情况下，地毯端提供了一些可选的游戏特性或者原版特性缺少的内容，填补了原版游戏功能的空白。
>
> Carpet 一般多用于需要对游戏环境进行精细控制的服务器管理者与深入探索游戏机制，通过模组实现高级自动化和优化的玩家，通过以下几大类功能的修改和增强，为玩家提供了更深层次的控制：
>
> 1. 性能优化：通过加速测试和调整机制，帮助玩家快速迭代自动化设计，减少资源占用；
> 2. 游戏机制改进：提供了一系列原版游戏中不具备的特性，如更灵活的方块放置、实体操作等；
> 3. 调试与监控：增强了游戏内的数据监控功能，使玩家能够实时了解服务器状态、性能指标等关键信息。

服务器端安装了这个 mod，因此如果你在你的客户端中也安装了这个 mod，你就可以正常使用它的功能。

:::info

此 mod 会与 optifabric 冲突。

:::

## 常用的命令

### /log

- `/log tps` 开启后，按下 `Tab` 键就能显示服务器的 TPS (Tick Per Second) 和 MSPT (MilliSecond Per Tick)。

### /player

“假人”命令，可以用于挂机。下面只列出比较常用的指令

- `/player <username> spawn` 召唤假人
- `/player <username> kill` 使假人退出游戏

### /tick

可以调整游戏的 TPS。

- `/tick rate <tps>` 调整 TPS。

### /carpet

服务器还开启了以下命令，它们会改变游戏特性。

- `/carpet xpNoCooldown true` 吸收经验球无冷却
- `/carpet onePlayerSleeping true` 允许一名玩家睡觉就跳过夜晚

## Carpet TIS Addition

https://www.mcmod.cn/class/5664.html

服务器还安装了 Carpet TIS Addition，并开启了以下命令，它们会改变游戏特性。

- `/carpet opPlayerNoCheat true` 禁止拥有 `op` 权限的玩家使用以下命令：

  `/gamemode`；`/give`；`/tp`；`/teleport`；`/setblock`；`/summon`
### 另请参阅

[规则 | Carpet TIS Addition](https://carpet.tis.world/zh-Hans/docs/rules)
