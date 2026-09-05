---
sidebar_position: 5
---

# 登录 / 注册系统

:::note
此文档 work in place.
:::

Satellite 是服务器使用的登录兼白名单修复 mod。

## 功能简介

- 玩家必须先注册、登录才能进行游戏。登录前，玩家不能与世界交互且处于无敌状态。
- 服务器通过识别玩家的**用户名**来实现白名单和玩家数据管理（而不是 UUID）。

此外：

- 服务器根据玩家的用户名，把密码的哈希值记录在服务器中。

:::info

我们不会直接记录你的密码，而是记录密码的哈希值。所以即使是服务器管理员也无法获取你的密码。

:::

功能细节见下节介绍。

## 命令指南

```text title="注册用户名"
// highlight-next-line
/register <密码> <确认密码>
例如:
/register q8EE92s q8EE92s
```

```text title="登录用户名"
// highlight-next-line
/login <密码>
例如:
/login q8EE92s
```

```text title="更改密码"
// highlight-next-line
/password change <旧密码> <新密码> <确认密码>
例如:
/password change q8EE92s 4D849fh 4D849fh
```

---

### 管理员命令

```text title="重置玩家的密码为随机密码"
// highlight-next-line
/password reset <玩家>
例如:
/password reset Dream
```


```text title="重新加载密码配置文件，通常在手动修改该文件后使用"
/password reload
```

```text title="列出所有已注册的玩家，也列出在白名单（及 op 列表）却未注册的玩家"
/password list
```

```text title="注册并加入白名单"
// highlight-next-line
/whitelist add <玩家>
例如:
/whitelist add Dream
```
