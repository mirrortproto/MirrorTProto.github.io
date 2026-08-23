---
title: "account.getReactionsNotifySettings"
original: "https://core.telegram.org/method/account.getReactionsNotifySettings"
section: ref
description: "Get the current reaction notification settings »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getReactionsNotifySettings","url":"/method/account.getReactionsNotifySettings/"}]
layout: layout.njk
---

# account.getReactionsNotifySettings

Get the current [reaction notification settings »](/api/reactions/#notifications-about-reactions).

```
reactionsNotifySettings#56e34970 flags:# messages_notify_from:flags.0?ReactionNotificationsFrom stories_notify_from:flags.1?ReactionNotificationsFrom sound:NotificationSound show_previews:Bool = ReactionsNotifySettings;
---functions---
account.getReactionsNotifySettings#6dd654c = ReactionsNotifySettings;
```

### Parameters

This constructor does not require any parameters.

### Result

[ReactionsNotifySettings](/type/ReactionsNotifySettings/)

### Only users can use this method

### Related pages

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
