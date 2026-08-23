---
title: "InputChannel"
original: "https://core.telegram.org/type/InputChannel"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputChannel","url":"/type/InputChannel/"}]
layout: layout.njk
---

# InputChannel

Represents a channel

```
inputChannelEmpty#ee8c1e86 = InputChannel;
inputChannel#f35aec28 channel_id:long access_hash:long = InputChannel;
inputChannelFromMessage#5b934f9d peer:InputPeer msg_id:int channel_id:long = InputChannel;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputChannelEmpty">inputChannelEmpty</a></td><td>Represents the absence of a channel</td></tr><tr><td><a href="/constructor/inputChannel">inputChannel</a></td><td>Represents a channel</td></tr><tr><td><a href="/constructor/inputChannelFromMessage">inputChannelFromMessage</a></td><td>Defines a <a href="/api/min">min</a> channel that was seen in a certain message of a certain chat.</td></tr></tbody></table>
