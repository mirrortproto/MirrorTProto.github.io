---
title: "InputPrivacyKey"
original: "https://core.telegram.org/type/InputPrivacyKey"
section: ref
description: "Privacy keys together with privacy rules » indicate _what_ can or can't someone do and are specified by a PrivacyKey constructor, and its input counterpart InputPrivacyKey."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputPrivacyKey","url":"/type/InputPrivacyKey/"}]
layout: layout.njk
---

# InputPrivacyKey

Privacy **keys** together with [privacy rules »](/api/privacy/#privacy-rules) indicate _what_ can or can't someone do and are specified by a [PrivacyKey](/type/PrivacyKey/) constructor, and its input counterpart [InputPrivacyKey](/type/InputPrivacyKey/).

See the [privacy documentation »](/api/privacy/) for more info.

```
inputPrivacyKeyStatusTimestamp#4f96cb18 = InputPrivacyKey;
inputPrivacyKeyChatInvite#bdfb0426 = InputPrivacyKey;
inputPrivacyKeyPhoneCall#fabadc5f = InputPrivacyKey;
inputPrivacyKeyPhoneP2P#db9e70d2 = InputPrivacyKey;
inputPrivacyKeyForwards#a4dd4c08 = InputPrivacyKey;
inputPrivacyKeyProfilePhoto#5719bacc = InputPrivacyKey;
inputPrivacyKeyPhoneNumber#352dafa = InputPrivacyKey;
inputPrivacyKeyAddedByPhone#d1219bdd = InputPrivacyKey;
inputPrivacyKeyVoiceMessages#aee69d68 = InputPrivacyKey;
inputPrivacyKeyAbout#3823cc40 = InputPrivacyKey;
inputPrivacyKeyBirthday#d65a11cc = InputPrivacyKey;
inputPrivacyKeyStarGiftsAutoSave#e1732341 = InputPrivacyKey;
inputPrivacyKeyNoPaidMessages#bdc597b4 = InputPrivacyKey;
inputPrivacyKeySavedMusic#4dbe9226 = InputPrivacyKey;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputPrivacyKeyStatusTimestamp">inputPrivacyKeyStatusTimestamp</a></td><td>Whether people will be able to see our exact last online timestamp.<br><br>Note that if <em>we</em> decide to hide our exact last online timestamp to someone (i.e., users A, B, C, or all users) <strong>and</strong> we do not have a <a href="/api/premium">Premium</a> subscription, we won't be able to see the exact last online timestamp of those users (A, B, C, or all users), even if those users <em>do</em> share it with us.<br><br>If those users <em>do</em> share their exact online status with us, but we can't see it due to the reason mentioned above, the <code>by_me</code> flag of <a href="/constructor/userStatusRecently">userStatusRecently</a>, <a href="/constructor/userStatusLastWeek">userStatusLastWeek</a>, <a href="/constructor/userStatusLastMonth">userStatusLastMonth</a> will be set.</td></tr><tr><td><a href="/constructor/inputPrivacyKeyChatInvite">inputPrivacyKeyChatInvite</a></td><td>Whether people will be able to invite you to chats</td></tr><tr><td><a href="/constructor/inputPrivacyKeyPhoneCall">inputPrivacyKeyPhoneCall</a></td><td>Whether you will accept phone calls</td></tr><tr><td><a href="/constructor/inputPrivacyKeyPhoneP2P">inputPrivacyKeyPhoneP2P</a></td><td>Whether to allow P2P communication during VoIP calls</td></tr><tr><td><a href="/constructor/inputPrivacyKeyForwards">inputPrivacyKeyForwards</a></td><td>Whether messages forwarded from you will be <a href="https://telegram.org/blog/unsend-privacy-emoji#anonymous-forwarding">anonymous</a></td></tr><tr><td><a href="/constructor/inputPrivacyKeyProfilePhoto">inputPrivacyKeyProfilePhoto</a></td><td>Whether people will be able to see your profile picture</td></tr><tr><td><a href="/constructor/inputPrivacyKeyPhoneNumber">inputPrivacyKeyPhoneNumber</a></td><td>Whether people will be able to see your phone number</td></tr><tr><td><a href="/constructor/inputPrivacyKeyAddedByPhone">inputPrivacyKeyAddedByPhone</a></td><td>Whether people can add you to their contact list by your phone number</td></tr><tr><td><a href="/constructor/inputPrivacyKeyVoiceMessages">inputPrivacyKeyVoiceMessages</a></td><td>Whether people can send you voice messages or round videos (<a href="/api/premium">Premium</a> users only).</td></tr><tr><td><a href="/constructor/inputPrivacyKeyAbout">inputPrivacyKeyAbout</a></td><td>Whether people can see your bio</td></tr><tr><td><a href="/constructor/inputPrivacyKeyBirthday">inputPrivacyKeyBirthday</a></td><td>Whether the user can see our birthday.</td></tr><tr><td><a href="/constructor/inputPrivacyKeyStarGiftsAutoSave">inputPrivacyKeyStarGiftsAutoSave</a></td><td>Whether received <a href="/api/gifts">gifts</a> will be automatically displayed on our profile</td></tr><tr><td><a href="/constructor/inputPrivacyKeyNoPaidMessages">inputPrivacyKeyNoPaidMessages</a></td><td>Who can send you messages without paying, if <a href="/api/paid-messages">paid messages »</a> are enabled.</td></tr><tr><td><a href="/constructor/inputPrivacyKeySavedMusic">inputPrivacyKeySavedMusic</a></td><td>Whether the user can see the <a href="/api/profile#music">songs we pinned to our profile »</a>.</td></tr></tbody></table>

### Related pages

#### [Privacy settings](/api/privacy/)

Telegram allows users to specify granular privacy settings, choosing which users can or can't interact with them in certain ways.

#### [PrivacyKey](/type/PrivacyKey/)

Privacy **keys** together with [privacy rules »](/api/privacy/#privacy-rules) indicate _what_ can or can't someone do and are specified by a [PrivacyKey](/type/PrivacyKey/) constructor, and its input counterpart [InputPrivacyKey](/type/InputPrivacyKey/).

See the [privacy documentation »](/api/privacy/) for more info.

#### [InputPrivacyKey](/type/InputPrivacyKey/)

Privacy **keys** together with [privacy rules »](/api/privacy/#privacy-rules) indicate _what_ can or can't someone do and are specified by a [PrivacyKey](/type/PrivacyKey/) constructor, and its input counterpart [InputPrivacyKey](/type/InputPrivacyKey/).

See the [privacy documentation »](/api/privacy/) for more info.
