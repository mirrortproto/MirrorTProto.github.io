---
title: "payments.exportedInvoice"
original: "https://core.telegram.org/constructor/payments.exportedInvoice"
section: ref
description: "Exported invoice deep link"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.exportedInvoice","url":"/constructor/payments.exportedInvoice/"}]
layout: layout.njk
---

# payments.exportedInvoice

Exported [invoice deep link](/api/links/#invoice-links)

```
payments.exportedInvoice#aed0cbd9 url:string = payments.ExportedInvoice;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Exported <a href="/api/links#invoice-links">invoice deep link</a></td></tr></tbody></table>

### Type

[payments.ExportedInvoice](/type/payments.ExportedInvoice/)

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
