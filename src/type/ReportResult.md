---
title: "ReportResult"
original: "https://core.telegram.org/type/ReportResult"
section: ref
description: "Represents a report menu or result"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"ReportResult","url":"/type/ReportResult/"}]
layout: layout.njk
---

# ReportResult

Represents a report menu or result

```
reportResultChooseOption#f0e4e0b6 title:string options:Vector<MessageReportOption> = ReportResult;
reportResultAddComment#6f09ac31 flags:# optional:flags.0?true option:bytes = ReportResult;
reportResultReported#8db33c4b = ReportResult;

---functions---

messages.report#fc78af9b peer:InputPeer id:Vector<int> option:bytes message:string = ReportResult;

stories.report#19d8eb45 peer:InputPeer id:Vector<int> option:bytes message:string = ReportResult;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/reportResultChooseOption">reportResultChooseOption</a></td><td>The user must choose one of the following options, and then <a href="/method/messages.report">messages.report</a> must be re-invoked, passing the option's <code>option</code> identifier to <a href="/method/messages.report">messages.report</a>.<code>option</code>.</td></tr><tr><td><a href="/constructor/reportResultAddComment">reportResultAddComment</a></td><td>The user should enter an additional comment for the moderators, and then <a href="/method/messages.report">messages.report</a> must be re-invoked, passing the comment to <a href="/method/messages.report">messages.report</a>.<code>message</code>.</td></tr><tr><td><a href="/constructor/reportResultReported">reportResultReported</a></td><td>The report was sent successfully, no further actions are required.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.report">messages.report</a></td><td>Report a message in a chat for violation of telegram's Terms of Service</td></tr><tr><td><a href="/method/stories.report">stories.report</a></td><td>Report a story.</td></tr></tbody></table>
