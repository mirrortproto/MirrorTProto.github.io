---
title: "postAddress"
original: "https://core.telegram.org/constructor/postAddress"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"postAddress","url":"/constructor/postAddress/"}]
layout: layout.njk
---

# postAddress

Shipping address

```
postAddress#1e8caaeb street_line1:string street_line2:string city:string state:string country_iso2:string post_code:string = PostAddress;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>street_line1</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>First line for the address</td></tr><tr><td><strong>street_line2</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Second line for the address</td></tr><tr><td><strong>city</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>City</td></tr><tr><td><strong>state</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>State, if applicable (empty otherwise)</td></tr><tr><td><strong>country_iso2</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>ISO 3166-1 alpha-2 country code</td></tr><tr><td><strong>post_code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Address post code</td></tr></tbody></table>

### Type

[PostAddress](/type/PostAddress/)
