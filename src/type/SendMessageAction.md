---
title: "SendMessageAction"
original: "https://core.telegram.org/type/SendMessageAction"
section: ref
description: "User actions. Use this to provide users with detailed info about their chat partner's actions: typing or sending attachments of all kinds."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"SendMessageAction","url":"/type/SendMessageAction/"}]
layout: layout.njk
---

# SendMessageAction

User actions. Use this to provide users with detailed info about their chat partner's actions: typing or sending attachments of all kinds.

#### [End-to-end schema](/schema/end-to-end/)

```
===17===
sendMessageCancelAction#fd5ec8f5 = SendMessageAction;
sendMessageChooseContactAction#628cbc6f = SendMessageAction;
sendMessageGeoLocationAction#176f8ba1 = SendMessageAction;
sendMessageRecordAudioAction#d52f73f7 = SendMessageAction;
sendMessageRecordVideoAction#a187d66f = SendMessageAction;
sendMessageTypingAction#16bf744e = SendMessageAction;
sendMessageUploadAudioAction#e6ac8a6f = SendMessageAction;
sendMessageUploadDocumentAction#8faee98e = SendMessageAction;
sendMessageUploadPhotoAction#990a3c1a = SendMessageAction;
sendMessageUploadVideoAction#92042ff7 = SendMessageAction;

===66===
sendMessageRecordRoundAction#88f27fbc = SendMessageAction;
sendMessageUploadRoundAction#bb718624 = SendMessageAction;
```

API schema:

```
sendMessageTypingAction#16bf744e = SendMessageAction;
sendMessageCancelAction#fd5ec8f5 = SendMessageAction;
sendMessageRecordVideoAction#a187d66f = SendMessageAction;
sendMessageUploadVideoAction#e9763aec progress:int = SendMessageAction;
sendMessageRecordAudioAction#d52f73f7 = SendMessageAction;
sendMessageUploadAudioAction#f351d7ab progress:int = SendMessageAction;
sendMessageUploadPhotoAction#d1d34a26 progress:int = SendMessageAction;
sendMessageUploadDocumentAction#aa0cd9e4 progress:int = SendMessageAction;
sendMessageGeoLocationAction#176f8ba1 = SendMessageAction;
sendMessageChooseContactAction#628cbc6f = SendMessageAction;
sendMessageGamePlayAction#dd6a8f48 = SendMessageAction;
sendMessageRecordRoundAction#88f27fbc = SendMessageAction;
sendMessageUploadRoundAction#243e1c66 progress:int = SendMessageAction;
speakingInGroupCallAction#d92c2285 = SendMessageAction;
sendMessageHistoryImportAction#dbda9246 progress:int = SendMessageAction;
sendMessageChooseStickerAction#b05ac6b1 = SendMessageAction;
sendMessageEmojiInteraction#25972bcb emoticon:string msg_id:int interaction:DataJSON = SendMessageAction;
sendMessageEmojiInteractionSeen#b665902e emoticon:string = SendMessageAction;
sendMessageTextDraftAction#376d975c random_id:long text:TextWithEntities = SendMessageAction;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/sendMessageTypingAction">sendMessageTypingAction</a></td><td>User is typing.</td></tr><tr><td><a href="/constructor/sendMessageCancelAction">sendMessageCancelAction</a></td><td>Invalidate all previous action updates. E.g. when user deletes entered text or aborts a video upload.</td></tr><tr><td><a href="/constructor/sendMessageRecordVideoAction">sendMessageRecordVideoAction</a></td><td>User is recording a video.</td></tr><tr><td><a href="/constructor/sendMessageUploadVideoAction">sendMessageUploadVideoAction</a></td><td>User is uploading a video.</td></tr><tr><td><a href="/constructor/sendMessageRecordAudioAction">sendMessageRecordAudioAction</a></td><td>User is recording a voice message.</td></tr><tr><td><a href="/constructor/sendMessageUploadAudioAction">sendMessageUploadAudioAction</a></td><td>User is uploading a voice message.</td></tr><tr><td><a href="/constructor/sendMessageUploadPhotoAction">sendMessageUploadPhotoAction</a></td><td>User is uploading a photo.</td></tr><tr><td><a href="/constructor/sendMessageUploadDocumentAction">sendMessageUploadDocumentAction</a></td><td>User is uploading a file.</td></tr><tr><td><a href="/constructor/sendMessageGeoLocationAction">sendMessageGeoLocationAction</a></td><td>User is selecting a location to share.</td></tr><tr><td><a href="/constructor/sendMessageChooseContactAction">sendMessageChooseContactAction</a></td><td>User is selecting a contact to share.</td></tr><tr><td><a href="/constructor/sendMessageRecordRoundAction">sendMessageRecordRoundAction</a></td><td>User is recording a round video to share</td></tr><tr><td><a href="/constructor/sendMessageUploadRoundAction">sendMessageUploadRoundAction</a></td><td>User is uploading a round video</td></tr><tr><td><a href="/constructor/sendMessageGamePlayAction">sendMessageGamePlayAction</a></td><td>User is playing a game</td></tr><tr><td><a href="/constructor/speakingInGroupCallAction">speakingInGroupCallAction</a></td><td>User is currently speaking in the group call</td></tr><tr><td><a href="/constructor/sendMessageHistoryImportAction">sendMessageHistoryImportAction</a></td><td>Chat history is being imported</td></tr><tr><td><a href="/constructor/sendMessageChooseStickerAction">sendMessageChooseStickerAction</a></td><td>User is choosing a sticker</td></tr><tr><td><a href="/constructor/sendMessageEmojiInteraction">sendMessageEmojiInteraction</a></td><td>User has clicked on an animated emoji triggering a <a href="/api/animated-emojis#emoji-reactions">reaction, click here for more info »</a>.</td></tr><tr><td><a href="/constructor/sendMessageEmojiInteractionSeen">sendMessageEmojiInteractionSeen</a></td><td>User is watching an animated emoji reaction triggered by another user, <a href="/api/animated-emojis#emoji-reactions">click here for more info »</a>.</td></tr><tr><td><a href="/constructor/sendMessageTextDraftAction">sendMessageTextDraftAction</a></td><td>Used by bots to implement <a href="/api/bots/ai#live-response-streaming">live message streaming »</a>.</td></tr></tbody></table>
