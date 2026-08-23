---
title: "PaidReactionPrivacy"
original: "https://core.telegram.org/type/PaidReactionPrivacy"
section: ref
description: "Paid reaction privacy settings »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"PaidReactionPrivacy","url":"/type/PaidReactionPrivacy/"}]
layout: layout.njk
---

# PaidReactionPrivacy

[Paid reaction privacy settings »](/api/reactions/#paid-reactions)

```
paidReactionPrivacyDefault#206ad49e = PaidReactionPrivacy;
paidReactionPrivacyAnonymous#1f0c1ad9 = PaidReactionPrivacy;
paidReactionPrivacyPeer#dc6cfcf0 peer:InputPeer = PaidReactionPrivacy;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/paidReactionPrivacyDefault">paidReactionPrivacyDefault</a></td><td>Uses the default reaction privacy, set using <a href="/method/messages.togglePaidReactionPrivacy">messages.togglePaidReactionPrivacy</a>.</td></tr><tr><td><a href="/constructor/paidReactionPrivacyAnonymous">paidReactionPrivacyAnonymous</a></td><td>Send paid reactions anonymously.</td></tr><tr><td><a href="/constructor/paidReactionPrivacyPeer">paidReactionPrivacyPeer</a></td><td>Send paid reactions as the specified peer, fetched using <a href="/method/channels.getSendAs">channels.getSendAs</a> with the <code>for_paid_reactions</code> flag set.</td></tr></tbody></table>

### Related pages

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
