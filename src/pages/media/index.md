---
title: Example
publishDate: 20 June 2023
author: Stephan Griesel
authorURL: https://twitter.com/stephangriesel
description: Example post description
layout: ../../layouts/BlogPost.astro
---

This example post needs to be here for build to complete successfully

```javascript
import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';

export default defineConfig({
  integrations: [
    NetlifyCMS({
      config: {
        backend: {
          name: 'git-gateway',
          branch: 'main',
        },
        collections: [
          // Content collections
        ],
      },
    }),
  ],
});
```
