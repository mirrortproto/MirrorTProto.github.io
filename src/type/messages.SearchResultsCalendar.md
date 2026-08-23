---
title: "messages.SearchResultsCalendar"
original: "https://core.telegram.org/type/messages.SearchResultsCalendar"
section: ref
description: "Information about found messages sent on a specific day"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.SearchResultsCalendar","url":"/type/messages.SearchResultsCalendar/"}]
layout: layout.njk
---

# messages.SearchResultsCalendar

Information about found messages sent on a specific day

```
messages.searchResultsCalendar#147ee23c flags:# inexact:flags.0?true count:int min_date:int min_msg_id:int offset_id_offset:flags.1?int periods:Vector<SearchResultsCalendarPeriod> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SearchResultsCalendar;

---functions---

messages.getSearchResultsCalendar#6aa3f6bd flags:# peer:InputPeer saved_peer_id:flags.2?InputPeer filter:MessagesFilter offset_id:int offset_date:int = messages.SearchResultsCalendar;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.searchResultsCalendar">messages.searchResultsCalendar</a></td><td>Information about found messages sent on a specific day</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getSearchResultsCalendar">messages.getSearchResultsCalendar</a></td><td>Returns information about the next messages of the specified type in the chat split by days.<br><br>Returns the results in reverse chronological order.<br>Can return partial results for the last returned day.</td></tr></tbody></table>
