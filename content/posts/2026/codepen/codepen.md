---
title: Adding Codepen Pens to Hugo Posts
date: 2026-11-10T05:47:16.616Z
description: A quick tutorial on how to display your Codepen pens on hugo posts
image: /images/movingblocks.png
type: post
tags:
    - hugo
    - codepen
    - blog
url: /codepen-on-hugo
draft: false
keywords:
    - codepen
    - hugo
---

{{< codepen id="VwRvzmK" author="yelof" height="400">}}

## Codepen on Hugo!⤴️
When I was building my [Genuary post](https://foley.works/genuary-2023/ "link to Genuary post"), I was poked around for a solution to embedding some Codepen pens on the post. For some reason I had no luck on my first search, but found [a solution from this guy Alex](https://isqua.github.io/hugo-shortcodes/development/codepen/ "link to Alex's project page") on a follow-up search. All credit to Alex for the shortcode, but figured I'd share an overview of the solution here, largely because I wanted to learn codeblocks. 

### Steps for Placing Your Codepen on Hugo
1. Download [shortcode file](https://raw.githubusercontent.com/isqua/hugo-shortcodes/main/themes/hugo-shortcodes/layouts/shortcodes/codepen.html "Link to shortcode file")
2. Add file to your layouts/shortcodes folder
3. Use this in your posts:
    ```shortcode
    {{</*codepen id="{{your-codepen-pen-ID}}" author="{{your-codepen-ID}}"*/>}}
    ```
    where {{your-codepen-pen-ID}} is the ID of your Codepen pen, and where {{your-codepen-ID}} is your actual Codepen account ID. 
    
    You can also go with a more maximal version: 
    ```shortcode
    {{</*codepen id="{{your-codepen-pen-ID}}"
    author="{{your-codepen-ID}}"
    caption="Sample caption"
    title="Sample Title"
    height="400"
    theme="light"
    tab="html,result"*/>}}
    ```
4. Publish your post and see your pen in your post!
