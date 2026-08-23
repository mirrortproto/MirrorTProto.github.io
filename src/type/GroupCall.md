---
title: "GroupCall"
original: "https://core.telegram.org/type/GroupCall"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"GroupCall","url":"/type/GroupCall/"}]
layout: layout.njk
---

# GroupCall

A group call

```
groupCallDiscarded#7780bcb4 id:long access_hash:long duration:int = GroupCall;
groupCall#efb2b617 flags:# join_muted:flags.1?true can_change_join_muted:flags.2?true join_date_asc:flags.6?true schedule_start_subscribed:flags.8?true can_start_video:flags.9?true record_video_active:flags.11?true rtmp_stream:flags.12?true listeners_hidden:flags.13?true conference:flags.14?true creator:flags.15?true messages_enabled:flags.17?true can_change_messages_enabled:flags.18?true min:flags.19?true id:long access_hash:long participants_count:int title:flags.3?string stream_dc_id:flags.4?int record_start_date:flags.5?int schedule_date:flags.7?int unmuted_video_count:flags.10?int unmuted_video_limit:int version:int invite_link:flags.16?string send_paid_messages_stars:flags.20?long default_send_as:flags.21?Peer = GroupCall;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/groupCallDiscarded">groupCallDiscarded</a></td><td>Describes an ended <a href="/api/group-calls">group call</a>.</td></tr><tr><td><a href="/constructor/groupCall">groupCall</a></td><td>Describes a <a href="/api/group-calls">group call</a>.<br><br>If the <code>min</code> flag is set, this is a partial (<code>min</code>) constructor: only a subset of its fields contains up-to-date information, and it must be merged into a previously cached non-<code>min</code> constructor as described below. If no full (non-<code>min</code>) constructor for this call was cached previously, the <code>min</code> constructor must be discarded.<br><br>When <code>min</code> is set, the following mandatory fields may be used: <code>id</code>, <code>access_hash</code>, <code>participants_count</code> and <code>version</code>. In addition, <strong>only</strong> the following conditional fields may be used if present, subject to the usual <code>version</code> check:<br><br>- <code>conference</code><br>- <code>rtmp_stream</code><br>- <code>listeners_hidden</code><br>- <code>title</code><br>- <code>messages_enabled</code><br>- <code>record_start_date</code> and <code>record_video_active</code><br>- <code>schedule_date</code><br>- <code>send_paid_messages_stars</code><br><br>When <code>min</code> is set, the following fields <strong>must be ignored</strong>, keeping the values from the previously cached non-<code>min</code> constructor:<br><br>- <code>join_muted</code><br>- <code>can_change_join_muted</code><br>- <code>schedule_start_subscribed</code><br>- <code>can_start_video</code><br>- <code>creator</code><br>- <code>can_change_messages_enabled</code><br>- <code>unmuted_video_count</code><br>- <code>unmuted_video_limit</code><br>- <code>stream_dc_id</code><br>- <code>invite_link</code><br>- <code>default_send_as</code><br><br>The <code>join_date_asc</code> flag is set only when the call is created and never changes afterwards, so it too is not applied from a <code>min</code> constructor.</td></tr></tbody></table>
