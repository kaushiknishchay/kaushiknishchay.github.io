---
title: Automating My Social Cards: Satori, Sharp, and the End of  "Generic" Previews
description: TL;DR: I stopped relying on blog cover images for my Open Graph (OG) previews. Instead, I wired up Satori and Sharp to generate branded, text-rich social cards programmatically at build time in Astro.
date: 2026-04-18T11:47:03.957Z
author: Nishchay Kaushik
tags: Astro, satori, webdev, automation, Frontend Development, openGraph, sharp, JavaScript, TypeScript, Blogging Tools , frontend, blog, astro js
---

# Automating My Social Cards: Satori, Sharp, and the End of  "Generic" Previews

**TL;DR:** I stopped relying on blog cover images for my Open Graph (OG) previews. Instead, I wired up Satori and Sharp to generate branded, text-rich social cards programmatically at build time in Astro.

## The Problem with "Good Enough" Previews

For a long time, I just used the blog post's hero image as the Open Graph image. It was easy, but it wasn't effective.

When you share a link on Twitter or LinkedIn, a beautiful landscape photo doesn't actually tell anyone *what* the post is about. You’re relying on the small metadata text below the image to do all the heavy lifting. I wanted my social cards to be clear, branded, and informative containing the title and a snippet of the description, without having to design them manually every time.

## The Power Couple: Satori and Sharp

I recently moved to a workflow using [Satori](https://github.com/vercel/satori) and **Sharp**.

*   **Satori:** Converts HTML and CSS (via JSX) into an SVG. It’s built by Vercel and it’s what powers their own Open Graph generation.
    
*   **Sharp:** A high-performance image processing library for Node.js. It takes the SVG from Satori and converts it into a web-ready JPG.
    

### Pro-tip: The Satori Playground

If you’re just starting out, check out the [Satori Playground](https://og-playground.vercel.app/). It’s the fastest way to prototype your layout using Tailwind before you touch a single line of your own project's code.

## The Implementation

The setup in Astro involves creating a dynamic endpoint that runs at build time.

### 1\. Loading Your Fonts

Satori needs the raw font data to render text correctly in the SVG. I use **Inter** (Regular and Bold) for that clean, technical look.

```typescript
import fs from 'fs';
import path from 'path';

// Load fonts once into memory
const fontBoldData = fs.readFileSync(path.resolve('src/assets/fonts/Inter-Bold.ttf'));
const fontRegularData = fs.readFileSync(path.resolve('src/assets/fonts/Inter-Regular.ttf'));
```

### 2\. Designing with Satori (JSX)

Here is a simplified version of the template. Note that Satori uses a subset of Flexbox for layout, which feels very natural if you’ve used React Native or Tailwind.

```typescript
const svg = await satori(
  {
    type: 'div',
    props: {
      style: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#0a0a0a',
        padding: '60px 80px',
        fontFamily: 'Inter',
      },
      children: [
        {
          type: 'div',
          props: {
            style: { fontSize: '64px', color: '#ffffff', fontWeight: 'bold' },
            children: title,
          },
        },
        {
          type: 'div',
          props: {
            style: { fontSize: '28px', color: '#d4d4d4', marginTop: '20px' },
            children: description,
          },
        },
      ],
    },
  },
  {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Inter', data: fontRegularData, weight: 400, style: 'normal' },
      { name: 'Inter', data: fontBoldData, weight: 700, style: 'normal' },
    ],
  }
);
```

### 3\. Converting to JPEG with Sharp

Social platforms can be picky about SVGs, so we convert the output to a high-quality JPEG.

```typescript
const jpegBuffer = await sharp(Buffer.from(svg))
  .jpeg({ quality: 80, progressive: true })
  .toBuffer();

return new Response(jpegBuffer, {
  headers: { 'Content-Type': 'image/jpeg' },
});
```

Here's how it looks like in action for my blog:

![](https://me.nkaushik.in/og/writing/top-4-ways-to-run-llm-locally-on-android-and-ios.jpg align="center")

![](https://me.nkaushik.in/og/writing/how-to-run-llm-models-on-old-android-devices-locally.jpg align="center")

## Why This Matters

Now, every time I run `npm run build`, Astro generates a unique, branded social card for every single post.

*   **Zero Design Friction:** I just write my post, and the image handles itself.
    
*   **Consistent Branding:** Every shared link looks like it belongs to my site.
    
*   **Higher Click-Through:** The image actually tells people what they're clicking on.
    

It has improved my workflow quite a bit—mostly because I don't have to think about it anymore.

## Conclusion

If you're still using generic cover images for your social shares, give Satori a try. It's the ultimate "set it and forget it" tool for content creators.
