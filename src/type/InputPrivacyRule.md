---
title: "InputPrivacyRule"
original: "https://core.telegram.org/type/InputPrivacyRule"
section: ref
description: "Privacy rules indicate _who_ can or can't do something and are specified by a PrivacyRule, and its input counterpart InputPrivacyRule."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputPrivacyRule","url":"/type/InputPrivacyRule/"}]
layout: layout.njk
---

# InputPrivacyRule

Privacy **rules** indicate _who_ can or can't do something and are specified by a [PrivacyRule](/type/PrivacyRule/), and its input counterpart [InputPrivacyRule](/type/InputPrivacyRule/).

See the [privacy documentation »](/api/privacy/) for more info.

```
inputPrivacyValueAllowContacts#d09e07b = InputPrivacyRule;
inputPrivacyValueAllowAll#184b35ce = InputPrivacyRule;
inputPrivacyValueAllowUsers#131cc67f users:Vector<InputUser> = InputPrivacyRule;
inputPrivacyValueDisallowContacts#ba52007 = InputPrivacyRule;
inputPrivacyValueDisallowAll#d66b66c9 = InputPrivacyRule;
inputPrivacyValueDisallowUsers#90110467 users:Vector<InputUser> = InputPrivacyRule;
inputPrivacyValueAllowChatParticipants#840649cf chats:Vector<long> = InputPrivacyRule;
inputPrivacyValueDisallowChatParticipants#e94f0f86 chats:Vector<long> = InputPrivacyRule;
inputPrivacyValueAllowCloseFriends#2f453e49 = InputPrivacyRule;
inputPrivacyValueAllowPremium#77cdc9f1 = InputPrivacyRule;
inputPrivacyValueAllowBots#5a4fcce5 = InputPrivacyRule;
inputPrivacyValueDisallowBots#c4e57915 = InputPrivacyRule;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputPrivacyValueAllowContacts">inputPrivacyValueAllowContacts</a></td><td>Allow only contacts</td></tr><tr><td><a href="/constructor/inputPrivacyValueAllowAll">inputPrivacyValueAllowAll</a></td><td>Allow all users</td></tr><tr><td><a href="/constructor/inputPrivacyValueAllowUsers">inputPrivacyValueAllowUsers</a></td><td>Allow only certain users</td></tr><tr><td><a href="/constructor/inputPrivacyValueDisallowContacts">inputPrivacyValueDisallowContacts</a></td><td>Disallow only contacts</td></tr><tr><td><a href="/constructor/inputPrivacyValueDisallowAll">inputPrivacyValueDisallowAll</a></td><td>Disallow all</td></tr><tr><td><a href="/constructor/inputPrivacyValueDisallowUsers">inputPrivacyValueDisallowUsers</a></td><td>Disallow only certain users</td></tr><tr><td><a href="/constructor/inputPrivacyValueAllowChatParticipants">inputPrivacyValueAllowChatParticipants</a></td><td>Allow only participants of certain chats</td></tr><tr><td><a href="/constructor/inputPrivacyValueDisallowChatParticipants">inputPrivacyValueDisallowChatParticipants</a></td><td>Disallow only participants of certain chats</td></tr><tr><td><a href="/constructor/inputPrivacyValueAllowCloseFriends">inputPrivacyValueAllowCloseFriends</a></td><td>Allow only <a href="/api/privacy">close friends »</a></td></tr><tr><td><a href="/constructor/inputPrivacyValueAllowPremium">inputPrivacyValueAllowPremium</a></td><td>Allow only users with a <a href="/api/premium">Premium subscription »</a>, currently only usable for <a href="/constructor/inputPrivacyKeyChatInvite">inputPrivacyKeyChatInvite</a>.</td></tr><tr><td><a href="/constructor/inputPrivacyValueAllowBots">inputPrivacyValueAllowBots</a></td><td>Allow bots and mini apps</td></tr><tr><td><a href="/constructor/inputPrivacyValueDisallowBots">inputPrivacyValueDisallowBots</a></td><td>Disallow bots and mini apps</td></tr></tbody></table>

### Related pages

#### [PrivacyRule](/type/PrivacyRule/)

Privacy **rules** together with [privacy keys](/api/privacy/#privacy-keys) indicate _what_ can or can't someone do and are specified by a [PrivacyRule](/type/PrivacyRule/) constructor, and its input counterpart [InputPrivacyRule](/type/InputPrivacyRule/).

See the [privacy documentation »](/api/privacy/) for more info.

#### [InputPrivacyRule](/type/InputPrivacyRule/)

Privacy **rules** indicate _who_ can or can't do something and are specified by a [PrivacyRule](/type/PrivacyRule/), and its input counterpart [InputPrivacyRule](/type/InputPrivacyRule/).

See the [privacy documentation »](/api/privacy/) for more info.

#### [Privacy settings](/api/privacy/)

Telegram allows users to specify granular privacy settings, choosing which users can or can't interact with them in certain ways.
