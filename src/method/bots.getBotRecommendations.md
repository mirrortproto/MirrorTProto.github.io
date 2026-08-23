---
title: "bots.getBotRecommendations"
original: "https://core.telegram.org/method/bots.getBotRecommendations"
section: ref
description: "Obtain a list of similarly themed bots, selected based on similarities in their subscriber bases, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"bots.getBotRecommendations","url":"/method/bots.getBotRecommendations/"}]
layout: layout.njk
---

# bots.getBotRecommendations

Obtain a list of similarly themed bots, selected based on similarities in their subscriber bases, see [here »](/api/recommend/) for more info.

```
users.users#62d706b8 users:Vector<User> = users.Users;
users.usersSlice#315a4974 count:int users:Vector<User> = users.Users;
---functions---
bots.getBotRecommendations#a1b70815 bot:InputUser = users.Users;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>The method will return bots related to the passed bot.</td></tr></tbody></table>

### Result

[users.Users](/type/users.Users/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>This is not a valid bot.</td></tr></tbody></table>

### Related pages

#### [Similar channels and bots](/api/recommend/)

The API offers a method to obtain a list of similarly themed public channels and bots, selected based on similarities in their subscriber bases.
