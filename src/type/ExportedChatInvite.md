---
title: "ExportedChatInvite"
original: "https://core.telegram.org/type/ExportedChatInvite"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"ExportedChatInvite","url":"/type/ExportedChatInvite/"}]
layout: layout.njk
---

# ExportedChatInvite

Exported chat invite

```
chatInviteExported#a22cbd96 flags:# revoked:flags.0?true permanent:flags.5?true request_needed:flags.6?true link:string admin_id:long date:int start_date:flags.4?int expire_date:flags.1?int usage_limit:flags.2?int usage:flags.3?int requested:flags.7?int subscription_expired:flags.10?int title:flags.8?string subscription_pricing:flags.9?StarsSubscriptionPricing = ExportedChatInvite;
chatInvitePublicJoinRequests#ed107ab7 = ExportedChatInvite;

---functions---

messages.exportChatInvite#a455de90 flags:# legacy_revoke_permanent:flags.2?true request_needed:flags.3?true peer:InputPeer expire_date:flags.0?int usage_limit:flags.1?int title:flags.4?string subscription_pricing:flags.5?StarsSubscriptionPricing = ExportedChatInvite;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/chatInviteExported">chatInviteExported</a></td><td>Exported chat invite</td></tr><tr><td><a href="/constructor/chatInvitePublicJoinRequests">chatInvitePublicJoinRequests</a></td><td>Used in updates and in the channel log to indicate when a user is requesting to join or has joined a <a href="/api/discussion#requiring-users-to-join-the-group">discussion group</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.exportChatInvite">messages.exportChatInvite</a></td><td>Export an invite link for a chat</td></tr></tbody></table>
