---
title: "help.getPromoData"
original: "https://core.telegram.org/method/help.getPromoData"
section: ref
description: "Returns a set of useful suggestions and PSA/MTProxy sponsored peers, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"help.getPromoData","url":"/method/help.getPromoData/"}]
layout: layout.njk
---

# help.getPromoData

Returns a set of useful suggestions and PSA/MTProxy sponsored peers, see [here »](/api/config/#suggestions) for more info.

```
help.promoDataEmpty#98f6ac75 expires:int = help.PromoData;
help.promoData#8a4d87a flags:# proxy:flags.0?true expires:int peer:flags.3?Peer psa_type:flags.1?string psa_message:flags.2?string pending_suggestions:Vector<string> dismissed_suggestions:Vector<string> custom_pending_suggestion:flags.4?PendingSuggestion chats:Vector<Chat> users:Vector<User> = help.PromoData;
---functions---
help.getPromoData#c0977421 = help.PromoData;
```

### Parameters

This constructor does not require any parameters.

### Result

[help.PromoData](/type/help.PromoData/)

### Only users can use this method

### Related pages

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
