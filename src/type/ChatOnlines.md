---
title: "ChatOnlines"
original: "https://core.telegram.org/type/ChatOnlines"
section: ref
description: "Number of online users in a chat"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"ChatOnlines","url":"/type/ChatOnlines/"}]
layout: layout.njk
---

# ChatOnlines

Number of online users in a chat

```
chatOnlines#f041e250 onlines:int = ChatOnlines;

---functions---

messages.getOnlines#6e2be050 peer:InputPeer = ChatOnlines;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/chatOnlines">chatOnlines</a></td><td>Number of online users in a chat</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getOnlines">messages.getOnlines</a></td><td>Get count of online users in a chat</td></tr></tbody></table>
