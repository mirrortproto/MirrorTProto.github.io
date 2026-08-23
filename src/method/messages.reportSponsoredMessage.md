---
title: "messages.reportSponsoredMessage"
original: "https://core.telegram.org/method/messages.reportSponsoredMessage"
section: ref
description: "Report a sponsored message », see here » for more info on the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.reportSponsoredMessage","url":"/method/messages.reportSponsoredMessage/"}]
layout: layout.njk
---

# messages.reportSponsoredMessage

Report a [sponsored message »](/api/sponsored-messages/), see [here »](/api/sponsored-messages/#reporting-sponsored-messages) for more info on the full flow.

```
channels.sponsoredMessageReportResultChooseOption#846f9e42 title:string options:Vector<SponsoredMessageReportOption> = channels.SponsoredMessageReportResult;
channels.sponsoredMessageReportResultAdsHidden#3e3bcf2f = channels.SponsoredMessageReportResult;
channels.sponsoredMessageReportResultReported#ad798849 = channels.SponsoredMessageReportResult;
---functions---
messages.reportSponsoredMessage#12cbf0c4 random_id:bytes option:bytes = channels.SponsoredMessageReportResult;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>The ad's unique ID. See <a href="/api/updates#updatemessageid-updates">here »</a> for more info on random ID deduplication and updateMessageID mapping.</td></tr><tr><td><strong>option</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Chosen report option, initially an empty string, see <a href="/api/sponsored-messages#reporting-sponsored-messages">here »</a> for more info on the full flow.</td></tr></tbody></table>

### Result

[channels.SponsoredMessageReportResult](/type/channels.SponsoredMessageReportResult/)

### Only users can use this method

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Sponsored messages](/api/sponsored-messages/)

How clients should fetch, display and interact with sponsored messages.
