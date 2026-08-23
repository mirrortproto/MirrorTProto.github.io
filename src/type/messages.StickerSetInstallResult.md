---
title: "Messages.StickerSetInstallResult"
original: "https://core.telegram.org/type/messages.StickerSetInstallResult"
section: ref
description: "Result of stickerset installation process"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.StickerSetInstallResult","url":"/type/messages.StickerSetInstallResult/"}]
layout: layout.njk
---

# Messages.StickerSetInstallResult

Result of stickerset installation process

```
messages.stickerSetInstallResultSuccess#38641628 = messages.StickerSetInstallResult;
messages.stickerSetInstallResultArchive#35e410a8 sets:Vector<StickerSetCovered> = messages.StickerSetInstallResult;

---functions---

messages.installStickerSet#c78fe460 stickerset:InputStickerSet archived:Bool = messages.StickerSetInstallResult;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.stickerSetInstallResultSuccess">messages.stickerSetInstallResultSuccess</a></td><td>The stickerset was installed successfully</td></tr><tr><td><a href="/constructor/messages.stickerSetInstallResultArchive">messages.stickerSetInstallResultArchive</a></td><td>The stickerset was installed, but since there are too many stickersets some were archived</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.installStickerSet">messages.installStickerSet</a></td><td>Install a stickerset</td></tr></tbody></table>
