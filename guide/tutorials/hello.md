---
title: Simple Hello World in Onset
sidebar: auto
---

# Tutorial

### Introduction

In this tutorial, we are goint to create a simple command that add "Hello Word" in the player's chat.

### Package Setup

First, we need to create a new folder in the server's package folder. Name it as you want.

In this folder, we need to add a `package.json`. In this file, we are going to list all files that are needed by the package, and some other informations.

```json
{
  "author": "Your name",
  "version": "1.0",
  "server_scripts": ["server.lua"],
  "client_scripts": [],
  "files": []
}
```

### Lua file

After, add a lua file named `server.lua`.Then, open it with your favorite code editor.
