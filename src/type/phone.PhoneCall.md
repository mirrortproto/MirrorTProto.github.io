---
title: "Phone.PhoneCall"
original: "https://core.telegram.org/type/phone.PhoneCall"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Phone.PhoneCall","url":"/type/phone.PhoneCall/"}]
layout: layout.njk
---

# Phone.PhoneCall

Phone call

```
phone.phoneCall#ec82e140 phone_call:PhoneCall users:Vector<User> = phone.PhoneCall;

---functions---

phone.requestCall#42ff96ed flags:# video:flags.0?true user_id:InputUser random_id:int g_a_hash:bytes protocol:PhoneCallProtocol = phone.PhoneCall;
phone.acceptCall#3bd2b4a0 peer:InputPhoneCall g_b:bytes protocol:PhoneCallProtocol = phone.PhoneCall;
phone.confirmCall#2efe1722 peer:InputPhoneCall g_a:bytes key_fingerprint:long protocol:PhoneCallProtocol = phone.PhoneCall;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/phone.phoneCall">phone.phoneCall</a></td><td>A VoIP phone call</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/phone.requestCall">phone.requestCall</a></td><td>Start a telegram phone call, see <a href="/api/calls#one-to-one-calls">here »</a> for more info on the full flow.</td></tr><tr><td><a href="/method/phone.acceptCall">phone.acceptCall</a></td><td>Accept incoming call, see <a href="/api/calls#one-to-one-calls">here »</a> for more info on the full flow.</td></tr><tr><td><a href="/method/phone.confirmCall">phone.confirmCall</a></td><td><a href="/api/end-to-end/voice-calls">Complete phone call E2E encryption key exchange »</a>, see <a href="/api/calls#one-to-one-calls">here »</a> for more info on the full flow.</td></tr></tbody></table>
