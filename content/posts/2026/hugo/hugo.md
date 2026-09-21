---
title: Using Hugo the Static Site Generator
date: 2026-09-20
description: In my first year of using Hugo as a static site generator, I built three static websites. Here are my thoughts so far.
image: /images/hugo-logo.png
type: post
tags:
    - hugo
    - small web
    - blog
    - blogging
url: /hugo-static-site-generator
draft: false
keywords:
    - hugo
    - static site
    - static site generator
    - static website
---

<img src="/images/hugo-logo.png" alt="Diagram" class="no-radius" width="400" height="400">

## My First Experiences with Hugo Static Site Generator
I learned about [Hugo](https://gohugo.io "link to the official Hugo website") and what a static site was from the fine folks on Mastodon after inquiring about options post-Wordpress. I'm sure I went to the previously linked website and saw this, their tagline: 

> *The world’s fastest framework for building websites*

I remember thinking, hm, I can get a Wordpress website up pretty quickly. Certainly quicker than the time it took me to get my first Hugo site (this one) up and running. 

But with the bumps and bruises of getting this site up, I developed a certain level of comfort and familiarity with the installation process, file structure, and so on. That lead to my [second Hugo site](https://foleystoneworks.com "link to the Foley Stoneworks website") being completed in a night. While just starter theme that I've yet to customze, the third Hugo site I made was up on the web in a few hours. 

## Things I Love about Bulding Static Websites with Hugo
Here's what I love about building static websites. I just so happened to have ended up trying Hugo and liking it, but from what I've read, Astro and Jekyll are fine static site generators, and I'm sure there are others out there. I have to assume the bulleted characteristics below apply to them just as well, too. 

- **Simplicity**: Hey neat! There's my website files, right there in that folder in the 'websites' folder on my hard drive. Sweet, I can use a basic code editing program to edit the files and update my website to Github. Sure, using Studio Visual Vode and a CLI isn't the sexiest setup in the world, and at least out of the box isn't a WYSIWYG building experience, but it's just *so simple*. Here's what I look at in Visual Studio Code. It's pretty easy to pick a file, edit some markdown, and save. 

<img src="/images/website-file-structure.png" alt="Diagram" class="no-radius">


- **Speed**: It's tough to get a full understanding of how quick you can build a static website until you actually get the hang of it. I've been using themes, which let me start with a full, ready to go website with filler content that I can edit to my preferences. Once some familiarity with Hugo is there, it takes little time to get a new installation going, edit a page or two, edit the hugo.toml file and a few other items here and there, and it's off to the races. On the last website I made, I had the bare theme up and running within 30 minutes, and had a full website built in just a few hours. 

- **Aesthetics**: From what I can tell, [Hugo's themes](https://themes.gohugo.io "link to the themes section of the Hugo website") are quite nice! I love how a lot of them look, they're all lightning quick, and respond perfectly. Here are the three themes that I have worked with so far: 
    - *[Gokarna](https://themes.gohugo.io/themes/gokarna/ "link to the Gokarna theme on the Hugo website")*
    - *[Story](https://themes.gohugo.io/themes/hugo-story/ "link to the Story theme on the Hugo website")*
    - *[Mana](https://themes.gohugo.io/themes/hugo-mana-theme/ "link to the Mana theme on the Hugo website")*

    In my humble opion, most of the themes in the Hugo theme library are pretty slick, to the point where deciding on which theme go to with has always been a difficult decision. 

- **Customization**: While I've been leaning on themes so far, it's been easy to learn the Hugo framework, and with that I can see a clearer path forward if I wish to take my Hugo development to the next step. 

    One customization I made today was not to my theme, with the Front Matter extension. This essentially acts as CMS right within Visual Studio Code, but at least with this initial review, i'm not too sure it's going to save me a bunch of time. It does have a nice server preview feature that I'm going to see if I can set up on a split panel view- will let you know how that goes, and if I see more value from it than just having http://localhost:1313 open on my browser. 

    Another nice feature of the Front Matter extension is some rudimentary SEO data to aid you in forming posts, as well as an option to commit straight from within the extension. Again, not the biggest help in the world, but nice to know it's there if you prefer to keep as much to one tab as possible. 