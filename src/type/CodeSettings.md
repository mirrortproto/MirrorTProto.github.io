---
title: "CodeSettings"
original: "https://core.telegram.org/type/CodeSettings"
section: ref
description: "Settings for the code type to send"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"CodeSettings","url":"/type/CodeSettings/"}]
layout: layout.njk
---

# CodeSettings

Settings for the code type to send

```
codeSettings#ad253d78 flags:# allow_flashcall:flags.0?true current_number:flags.1?true allow_app_hash:flags.4?true allow_missed_call:flags.5?true allow_firebase:flags.7?true unknown_number:flags.9?true logout_tokens:flags.6?Vector<bytes> token:flags.8?string app_sandbox:flags.8?Bool = CodeSettings;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/codeSettings">codeSettings</a></td><td>Settings used by telegram servers for sending the confirm code.<br><br>Example implementations: <a href="https://github.com/DrKLO/Telegram/blob/master/TMessagesProj/src/main/java/org/telegram/ui/LoginActivity.java">telegram for android</a>, <a href="https://github.com/tdlib/td/tree/master/td/telegram/SendCodeHelper.cpp">tdlib</a>.</td></tr></tbody></table>
