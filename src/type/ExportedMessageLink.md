---
title: "ExportedMessageLink"
original: "https://core.telegram.org/type/ExportedMessageLink"
section: ref
description: "HTTP link and embed info of channel message"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"ExportedMessageLink","url":"/type/ExportedMessageLink/"}]
layout: layout.njk
---

# ExportedMessageLink

HTTP link and embed info of channel message

```
exportedMessageLink#5dab1af4 link:string html:string = ExportedMessageLink;

---functions---

channels.exportMessageLink#e63fadeb flags:# grouped:flags.0?true thread:flags.1?true channel:InputChannel id:int = ExportedMessageLink;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/exportedMessageLink">exportedMessageLink</a></td><td>Link to a message in a supergroup/channel</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/channels.exportMessageLink">channels.exportMessageLink</a></td><td>Get link and embed info of a message in a <a href="/api/channel">channel/supergroup</a></td></tr></tbody></table>
