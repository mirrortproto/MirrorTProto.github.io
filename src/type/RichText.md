---
title: "RichText"
original: "https://core.telegram.org/type/RichText"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"RichText","url":"/type/RichText/"}]
layout: layout.njk
---

# RichText

Rich text

```
textEmpty#dc3d824f = RichText;
textPlain#744694e0 text:string = RichText;
textBold#6724abc4 text:RichText = RichText;
textItalic#d912a59c text:RichText = RichText;
textUnderline#c12622c4 text:RichText = RichText;
textStrike#9bf8bb95 text:RichText = RichText;
textFixed#6c3f19b9 text:RichText = RichText;
textUrl#3c2884c1 text:RichText url:string webpage_id:long = RichText;
textEmail#de5a0dd6 text:RichText email:string = RichText;
textConcat#7e6260d7 texts:Vector<RichText> = RichText;
textSubscript#ed6a8504 text:RichText = RichText;
textSuperscript#c7fb5e01 text:RichText = RichText;
textMarked#34b8621 text:RichText = RichText;
textPhone#1ccb966a text:RichText phone:string = RichText;
textImage#81ccf4f document_id:long w:int h:int = RichText;
textAnchor#35553762 text:RichText name:string = RichText;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/textEmpty">textEmpty</a></td><td>Empty rich text element</td></tr><tr><td><a href="/constructor/textPlain">textPlain</a></td><td>Plain text</td></tr><tr><td><a href="/constructor/textBold">textBold</a></td><td><strong>Bold</strong> text</td></tr><tr><td><a href="/constructor/textItalic">textItalic</a></td><td><em>Italic</em> text</td></tr><tr><td><a href="/constructor/textUnderline">textUnderline</a></td><td>Underlined text</td></tr><tr><td><a href="/constructor/textStrike">textStrike</a></td><td><del>Strikethrough</del> text</td></tr><tr><td><a href="/constructor/textFixed">textFixed</a></td><td><code>fixed-width</code> rich text</td></tr><tr><td><a href="/constructor/textUrl">textUrl</a></td><td>Link</td></tr><tr><td><a href="/constructor/textEmail">textEmail</a></td><td>Rich text email link</td></tr><tr><td><a href="/constructor/textConcat">textConcat</a></td><td>Concatenation of rich texts</td></tr><tr><td><a href="/constructor/textSubscript">textSubscript</a></td><td>Subscript text</td></tr><tr><td><a href="/constructor/textSuperscript">textSuperscript</a></td><td>Superscript text</td></tr><tr><td><a href="/constructor/textMarked">textMarked</a></td><td>Highlighted text</td></tr><tr><td><a href="/constructor/textPhone">textPhone</a></td><td>Rich text linked to a phone number</td></tr><tr><td><a href="/constructor/textImage">textImage</a></td><td>Inline image</td></tr><tr><td><a href="/constructor/textAnchor">textAnchor</a></td><td>Text linking to another section of the page</td></tr></tbody></table>
