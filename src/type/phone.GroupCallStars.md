---
title: "Phone.GroupCallStars"
original: "https://core.telegram.org/type/phone.GroupCallStars"
section: ref
description: "Contains a live story's total donations and top donors, see paid live story donations »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Phone.GroupCallStars","url":"/type/phone.GroupCallStars/"}]
layout: layout.njk
---

# Phone.GroupCallStars

Contains a live story's total donations and top donors, see [paid live story donations »](/api/group-calls/#paid-live-story-donations).

```
phone.groupCallStars#9d1dbd26 total_stars:long top_donors:Vector<GroupCallDonor> chats:Vector<Chat> users:Vector<User> = phone.GroupCallStars;

---functions---

phone.getGroupCallStars#6f636302 call:InputGroupCall = phone.GroupCallStars;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/phone.groupCallStars">phone.groupCallStars</a></td><td>Contains a live story's total donations and top donors, see <a href="/api/group-calls#paid-live-story-donations">paid live story donations »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/phone.getGroupCallStars">phone.getGroupCallStars</a></td><td>Fetch a live story's total donations and top donors, see <a href="/api/group-calls#paid-live-story-donations">paid live story donations »</a>.</td></tr></tbody></table>

### Related pages

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
