---
title: "stories.PeerStories"
original: "https://core.telegram.org/type/stories.PeerStories"
section: ref
description: "Active story list of a specific peer."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"stories.PeerStories","url":"/type/stories.PeerStories/"}]
layout: layout.njk
---

# stories.PeerStories

[Active story list](/api/stories/#watching-stories) of a specific peer.

```
stories.peerStories#cae68768 stories:PeerStories chats:Vector<Chat> users:Vector<User> = stories.PeerStories;

---functions---

stories.getPeerStories#2c4ada50 peer:InputPeer = stories.PeerStories;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/stories.peerStories">stories.peerStories</a></td><td><a href="/api/stories#watching-stories">Active story list</a> of a specific peer.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/stories.getPeerStories">stories.getPeerStories</a></td><td>Fetch the full active <a href="/api/stories#watching-stories">story list</a> of a specific peer.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
