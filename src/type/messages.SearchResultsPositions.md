---
title: "messages.SearchResultsPositions"
original: "https://core.telegram.org/type/messages.SearchResultsPositions"
section: ref
description: "Information about sparse positions of messages"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.SearchResultsPositions","url":"/type/messages.SearchResultsPositions/"}]
layout: layout.njk
---

# messages.SearchResultsPositions

Information about sparse positions of messages

```
messages.searchResultsPositions#53b22baf count:int positions:Vector<SearchResultsPosition> = messages.SearchResultsPositions;

---functions---

messages.getSearchResultsPositions#9c7f2f10 flags:# peer:InputPeer saved_peer_id:flags.2?InputPeer filter:MessagesFilter offset_id:int limit:int = messages.SearchResultsPositions;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.searchResultsPositions">messages.searchResultsPositions</a></td><td>Information about sparse positions of messages</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getSearchResultsPositions">messages.getSearchResultsPositions</a></td><td>Returns sparse positions of messages of the specified type in the chat to be used for shared media scroll implementation.<br><br>Returns the results in reverse chronological order (i.e., in order of decreasing message_id).</td></tr></tbody></table>
