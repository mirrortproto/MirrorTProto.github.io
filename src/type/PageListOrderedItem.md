---
title: "PageListOrderedItem"
original: "https://core.telegram.org/type/PageListOrderedItem"
section: ref
description: "Represents an instant view ordered list"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"PageListOrderedItem","url":"/type/PageListOrderedItem/"}]
layout: layout.njk
---

# PageListOrderedItem

Represents an [instant view ordered list](https://instantview.telegram.org)

```
pageListOrderedItemText#5e068047 num:string text:RichText = PageListOrderedItem;
pageListOrderedItemBlocks#98dd8936 num:string blocks:Vector<PageBlock> = PageListOrderedItem;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/pageListOrderedItemText">pageListOrderedItemText</a></td><td>Ordered list of text items</td></tr><tr><td><a href="/constructor/pageListOrderedItemBlocks">pageListOrderedItemBlocks</a></td><td>Ordered list of <a href="https://instantview.telegram.org">IV</a> blocks</td></tr></tbody></table>
