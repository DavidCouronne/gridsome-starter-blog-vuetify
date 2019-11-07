---
title: "Gridsome: Improve security and SEO"
date: 2019-11-01
published: true
author: "David Couronné"
tags: ['Gridsome', 'SEO']
canonical_url: false
description: "Improve security headers and SEO with vue-meta"
cover_image: https://res.cloudinary.com/dpw19qolx/image/upload/t_cover-image/v1572590743/bernard-hermant-IhcSHrZXFs4-unsplash.jpg
avatar: "davidcouronne.jpg"
---

## Improve security with Netlify

You can visite and scanne your website at https://securityheaders.com . 

If security headers are missing then you will get D Grade even on Netlify.



You can Get A grade by just adding few lines of code.



In your root directory, create a file `netlify.toml`

```toml{codeTitle: "netlify.toml"}
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"    
    Referrer-Policy = "no-referrer"
    X-Content-Type-Options= "nosniff"
    Strict-Transport-Security = "max-age=2592000; includeSubDomains; preload"
    Feature-Policy = "geolocation 'none'; midi 'none'; sync-xhr 'none';microphone 'none'; camera 'none'; magnetometer 'none'; gyroscope 'none'; speaker 'none'; fullscreen 'none'; payment 'none'" 
    Content-Security-Policy= "default-src * 'unsafe-inline' 'unsafe-eval'; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src *; style-src * 'unsafe-inline'"
```

This code is from: https://gist.github.com/miguelmota/7c8eabf5745b0e721f41158cc1b6591f

## Improve SEO

### Tools

+ https://cards-dev.twitter.com/validator
+ https://search.google.com/structured-data/testing-tool
+ https://opengraphcheck.com/

### Documentation

+ https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup
+ https://ogp.me/
