---
title: "messages.HistoryImport"
original: "https://core.telegram.org/type/messages.HistoryImport"
section: ref
description: "Identifier of a history import session, click here for more info »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.HistoryImport","url":"/type/messages.HistoryImport/"}]
layout: layout.njk
---

# messages.HistoryImport

Identifier of a [history import session, click here for more info »](/api/import/).

```
messages.historyImport#1662af0b id:long = messages.HistoryImport;

---functions---

messages.initHistoryImport#34090c3b peer:InputPeer file:InputFile media_count:int = messages.HistoryImport;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.historyImport">messages.historyImport</a></td><td>ID of a specific <a href="/api/import">chat import session, click here for more info »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.initHistoryImport">messages.initHistoryImport</a></td><td>Import chat history from a foreign chat app into a specific Telegram chat, <a href="/api/import">click here for more info about imported chats »</a>.</td></tr></tbody></table>

### Related pages

#### [Imported messages](/api/import/)

Telegram allows importing messages and media from foreign chat apps.
