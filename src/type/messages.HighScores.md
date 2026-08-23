---
title: "Messages.HighScores"
original: "https://core.telegram.org/type/messages.HighScores"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.HighScores","url":"/type/messages.HighScores/"}]
layout: layout.njk
---

# Messages.HighScores

High scores (in games)

```
messages.highScores#9a3bfd99 scores:Vector<HighScore> users:Vector<User> = messages.HighScores;

---functions---

messages.getGameHighScores#e822649d peer:InputPeer id:int user_id:InputUser = messages.HighScores;
messages.getInlineGameHighScores#f635e1b id:InputBotInlineMessageID user_id:InputUser = messages.HighScores;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.highScores">messages.highScores</a></td><td>Highscores in a game</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getGameHighScores">messages.getGameHighScores</a></td><td>Get highscores of a game</td></tr><tr><td><a href="/method/messages.getInlineGameHighScores">messages.getInlineGameHighScores</a></td><td>Get highscores of a game sent using an inline bot</td></tr></tbody></table>
