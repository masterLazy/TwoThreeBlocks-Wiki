---
sidebar_position: 2
---

# 有哪些游戏行为被改变了？

通过修改游戏规则（`/gamerule ...`）、使用指令、安装额外的 mod 等方法，TTB 内的一些游戏行为被改变了。在游玩时，你可能需要留意这些改变。

关于服务器安装的 mod，参见[这里](/docs/servermod)。

## 常规机制

1. **死亡不掉落**。这使得你在死亡时不会丢失物品栏中的东西。

   ```
   /gamerule keepInventory true
   ```

2. **单人睡觉跳过夜晚**。这使得服务器内一人睡觉就可以跳过夜晚。

   ````
   /gamerule playersSleepingPercentage 0
   ````

3. **op 玩家不许作弊**。禁用部分指令以避免 op 玩家意外地作弊。

   ```
   /carpet opPlayerNoCheat true
   ```

4. **经验球吸收无冷却**。玩家吸收经验球时不会有冷却时间。

   ```
   /carpet xpNoCooldown
   ```

## 交易机制

服务器安装了 Visible Traders。如果你没有安装 Visible Traders 在你的客户端，你会看到村民的所有交易（即使是未解锁的）。尽管如此，你不能进行那些未解锁的交易。这会使得你无法分辨那些是已解锁的交易。

参见：[服务器 Mod 列表](/docs/servermod#服务器端客户端-mod)

