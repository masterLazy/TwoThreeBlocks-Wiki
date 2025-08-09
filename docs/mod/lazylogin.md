# LazyLogin
https://www.mcmod.cn/class/16519.html

服务器使用的登录兼白名单修复 mod。

你**不需**在客户端安装它就可以正常使用功能。

## 功能简介

- 玩家必须先注册、登录才能进行游戏。登录前，玩家不能与世界交互且处于无敌状态。
- 服务器通过识别玩家的**用户名**来实现白名单和玩家数据管理（而不是 UUID）。

此外：

- 增加 `/whitelist safe-add` 指令，进一步保护服务器安全。
- 服务器根据玩家的用户名，把密码的哈希值记录在服务器中。（`registered-players.json`）

:::info

我们不会直接记录你的密码，而是记录密码的哈希值。所以即使是服务器管理员也无法获取你的密码。

:::

- 可以通过修改 `.jar` 内 `/assets/lazylogin/lang.json` 自定义文本，或者翻译成其他语言 。

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
/whitelist safe-add <玩家>
例如:
/whitelist safe-add Dream
```

:::tip

请服务器管理员优先考虑使用 `/whitelist safa-add` 添加白名单，以提供更好的服务器安全保障。

:::
