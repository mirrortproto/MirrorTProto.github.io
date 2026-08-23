---
title: "help.CountriesList"
original: "https://core.telegram.org/type/help.CountriesList"
section: ref
description: "Name, ISO code, localized name and phone codes/patterns of all available countries"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"help.CountriesList","url":"/type/help.CountriesList/"}]
layout: layout.njk
---

# help.CountriesList

Name, ISO code, localized name and phone codes/patterns of all available countries

```
help.countriesListNotModified#93cc1f32 = help.CountriesList;
help.countriesList#87d0759e countries:Vector<help.Country> hash:int = help.CountriesList;

---functions---

help.getCountriesList#735787a8 lang_code:string hash:int = help.CountriesList;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/help.countriesListNotModified">help.countriesListNotModified</a></td><td>The country list has not changed</td></tr><tr><td><a href="/constructor/help.countriesList">help.countriesList</a></td><td>Name, ISO code, localized name and phone codes/patterns of all available countries</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/help.getCountriesList">help.getCountriesList</a></td><td>Get name, ISO code, localized name and phone codes/patterns of all available countries</td></tr></tbody></table>
