---
title: "messages.TranslatedText"
original: "https://core.telegram.org/type/messages.TranslatedText"
section: ref
description: "Translated text with entities."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.TranslatedText","url":"/type/messages.TranslatedText/"}]
layout: layout.njk
---

# messages.TranslatedText

Translated text with [entities](/api/entities/).

```
messages.translateResult#33db32f8 result:Vector<TextWithEntities> = messages.TranslatedText;

---functions---

messages.translateText#63183030 flags:# peer:flags.0?InputPeer id:flags.0?Vector<int> text:flags.1?Vector<TextWithEntities> to_lang:string = messages.TranslatedText;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.translateResult">messages.translateResult</a></td><td>Translated text with <a href="/api/entities">entities</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.translateText">messages.translateText</a></td><td>Translate a given text.<br><br><a href="/api/entities">Styled text entities</a> will only be preserved for <a href="/api/premium">Telegram Premium</a> users.</td></tr></tbody></table>

### Related pages

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities
