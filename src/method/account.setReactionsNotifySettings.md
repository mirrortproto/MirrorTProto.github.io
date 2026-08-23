---
title: "account.setReactionsNotifySettings"
original: "https://core.telegram.org/method/account.setReactionsNotifySettings"
section: ref
description: "Change the reaction notification settings »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.setReactionsNotifySettings","url":"/method/account.setReactionsNotifySettings/"}]
layout: layout.njk
---

# account.setReactionsNotifySettings

Change the [reaction notification settings »](/api/reactions/#notifications-about-reactions).

```
reactionsNotifySettings#56e34970 flags:# messages_notify_from:flags.0?ReactionNotificationsFrom stories_notify_from:flags.1?ReactionNotificationsFrom sound:NotificationSound show_previews:Bool = ReactionsNotifySettings;
---functions---
account.setReactionsNotifySettings#316ce548 settings:ReactionsNotifySettings = ReactionsNotifySettings;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/type/ReactionsNotifySettings">ReactionsNotifySettings</a></td><td>New reaction notification settings.</td></tr></tbody></table>

### Result

[ReactionsNotifySettings](/type/ReactionsNotifySettings/)

### Only users can use this method

### Related pages

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
