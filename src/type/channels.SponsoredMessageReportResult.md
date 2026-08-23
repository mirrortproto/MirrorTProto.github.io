---
title: "channels.SponsoredMessageReportResult"
original: "https://core.telegram.org/type/channels.SponsoredMessageReportResult"
section: ref
description: "Status of the method call used to report a sponsored message »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channels.SponsoredMessageReportResult","url":"/type/channels.SponsoredMessageReportResult/"}]
layout: layout.njk
---

# channels.SponsoredMessageReportResult

Status of the method call used to report a [sponsored message »](/api/sponsored-messages/).

```
channels.sponsoredMessageReportResultChooseOption#846f9e42 title:string options:Vector<SponsoredMessageReportOption> = channels.SponsoredMessageReportResult;
channels.sponsoredMessageReportResultAdsHidden#3e3bcf2f = channels.SponsoredMessageReportResult;
channels.sponsoredMessageReportResultReported#ad798849 = channels.SponsoredMessageReportResult;

---functions---

messages.reportSponsoredMessage#12cbf0c4 random_id:bytes option:bytes = channels.SponsoredMessageReportResult;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/channels.sponsoredMessageReportResultChooseOption">channels.sponsoredMessageReportResultChooseOption</a></td><td>The user must choose a report option from the localized options available in <code>options</code>, and after selection, <a href="/method/messages.reportSponsoredMessage">messages.reportSponsoredMessage</a> must be invoked again, passing the option's <code>option</code> field to the <code>option</code> param of the method.</td></tr><tr><td><a href="/constructor/channels.sponsoredMessageReportResultAdsHidden">channels.sponsoredMessageReportResultAdsHidden</a></td><td>Sponsored messages were hidden for the user in all chats.</td></tr><tr><td><a href="/constructor/channels.sponsoredMessageReportResultReported">channels.sponsoredMessageReportResultReported</a></td><td>The sponsored message was reported successfully.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.reportSponsoredMessage">messages.reportSponsoredMessage</a></td><td>Report a <a href="/api/sponsored-messages">sponsored message »</a>, see <a href="/api/sponsored-messages#reporting-sponsored-messages">here »</a> for more info on the full flow.</td></tr></tbody></table>

### Related pages

#### [Sponsored messages](/api/sponsored-messages/)

How clients should fetch, display and interact with sponsored messages.
