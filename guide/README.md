---
title: Simple Hello World in Onset
sidebarDepth: 2
---

## Tutorial

### Introduction

In this tutorial, we are going to create a simple command that add "Hello Word" in the player's chat.

### Package Setup

First, you need to create a new folder in the server's package folder. Name it as you want.

In this folder, you need to add a `package.json`. In this file, you are going to list all files that are needed by the package, and some other informations.

> Author : Your name if you want to publish your script <br>
> Version: The version of your script<br>
> Server_scripts: An array of all your server's script<br>
> Client_scripts: An array of all your client's script<br>
> Files: An array of all files needed by your packages.<br>

::: warning
All the files in client_scripts and files will be downloaded by the client.
Be careful, do not publish login in these files !
:::

```json
{
  "author": "Your name",
  "version": "1.0",
  "server_scripts": ["server.lua"],
  "client_scripts": [],
  "files": []
}
```

### Add Command

After, add a lua file named `server.lua`.Then, open it with your favorite code editor. To create a command, you need to say to the server that you want add a command.
In this example, the command will be named "hello". After this command must called a function. The function will be named "hello" (change it as you want).

```lua
AddCommand("hello", hello)
```

Then, add the hello function.

::: tip
When a script creates a command, the first argument is automaticaly the player. The other arguments are the arguments after the command called by the player.
:::

In this function, you need call the lua function `AddPlayerChat`

```lua
function hello(player)
  AddPlayerChat(player, "hello")
end
```

As you can see, the argument "player" comes from `AddCommand`

The final code looks like this :

```lua
AddCommand("hello", hello)
function hello(player)
  AddPlayerChat(player, "hello")
end
```

GG, you just create an Onset's script !
