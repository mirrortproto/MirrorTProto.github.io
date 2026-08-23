---
title: "help.acceptTermsOfService"
original: "https://core.telegram.org/method/help.acceptTermsOfService"
section: ref
description: "Accept the new terms of service"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"help.acceptTermsOfService","url":"/method/help.acceptTermsOfService/"}]
layout: layout.njk
---

# help.acceptTermsOfService

Accept the new terms of service

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
help.acceptTermsOfService#ee72f79a id:DataJSON = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/DataJSON">DataJSON</a></td><td>ID of terms of service</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>DATA_JSON_INVALID</td><td>The provided JSON data is invalid.</td></tr></tbody></table>
