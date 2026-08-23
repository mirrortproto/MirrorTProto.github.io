---
title: "help.PremiumPromo"
original: "https://core.telegram.org/type/help.PremiumPromo"
section: ref
description: "Telegram Premium promotion information"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"help.PremiumPromo","url":"/type/help.PremiumPromo/"}]
layout: layout.njk
---

# help.PremiumPromo

Telegram Premium promotion information

```
help.premiumPromo#5334759c status_text:string status_entities:Vector<MessageEntity> video_sections:Vector<string> videos:Vector<Document> period_options:Vector<PremiumSubscriptionOption> users:Vector<User> = help.PremiumPromo;

---functions---

help.getPremiumPromo#b81b93d4 = help.PremiumPromo;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/help.premiumPromo">help.premiumPromo</a></td><td>Telegram Premium promotion information<br><br>Note that the <code>video_sections</code>+<code>videos</code> fields are a list of videos, and the corresponding premium feature identifiers.<br>They're equivalent to a section =&gt; video dictionary, with keys from <code>video_section</code> and values from <code>videos</code>.<br>The keys in <code>video_sections</code> correspond to a specific feature identifier, and the associated promotional video should be shown when the associated feature row is clicked.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/help.getPremiumPromo">help.getPremiumPromo</a></td><td>Get Telegram Premium promotion information</td></tr></tbody></table>
