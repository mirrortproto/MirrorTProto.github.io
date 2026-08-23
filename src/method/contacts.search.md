---
title: "contacts.search"
original: "https://core.telegram.org/method/contacts.search"
section: ref
description: "Returns users found by username substring."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"contacts.search","url":"/method/contacts.search/"}]
layout: layout.njk
---

# contacts.search

Returns users found by username substring.

```
contacts.found#b3134d9d my_results:Vector<Peer> results:Vector<Peer> chats:Vector<Chat> users:Vector<User> = contacts.Found;
---functions---
contacts.search#11f812d8 q:string limit:int = contacts.Found;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>q</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Target substring</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Maximum number of users to be returned</td></tr></tbody></table>

### Result

[contacts.Found](/type/contacts.Found/)

### Notes

This method will exclude the current user's contacts from the search results. It is assumed that searches among the user's contacts can be handled locally by the client.

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>QUERY_TOO_SHORT</td><td>The query string is too short.</td></tr><tr><td>400</td><td>SEARCH_QUERY_EMPTY</td><td>The search query is empty.</td></tr></tbody></table>
