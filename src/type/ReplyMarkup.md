---
title: "ReplyMarkup"
original: "https://core.telegram.org/type/ReplyMarkup"
section: ref
description: "Reply markup for bot and inline keyboards"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"ReplyMarkup","url":"/type/ReplyMarkup/"}]
layout: layout.njk
---

# ReplyMarkup

Reply markup for bot and inline keyboards

```
replyKeyboardHide#a03e5b85 flags:# selective:flags.2?true = ReplyMarkup;
replyKeyboardForceReply#86b40b08 flags:# single_use:flags.1?true selective:flags.2?true placeholder:flags.3?string = ReplyMarkup;
replyKeyboardMarkup#85dd99d1 flags:# resize:flags.0?true single_use:flags.1?true selective:flags.2?true persistent:flags.4?true rows:Vector<KeyboardButtonRow> placeholder:flags.3?string = ReplyMarkup;
replyInlineMarkup#48a30254 rows:Vector<KeyboardButtonRow> = ReplyMarkup;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/replyKeyboardHide">replyKeyboardHide</a></td><td>Hide sent reply keyboard</td></tr><tr><td><a href="/constructor/replyKeyboardForceReply">replyKeyboardForceReply</a></td><td>Force the user to send a reply</td></tr><tr><td><a href="/constructor/replyKeyboardMarkup">replyKeyboardMarkup</a></td><td>Represents a reply keyboard</td></tr><tr><td><a href="/constructor/replyInlineMarkup">replyInlineMarkup</a></td><td>Represents an inline keyboard</td></tr></tbody></table>
