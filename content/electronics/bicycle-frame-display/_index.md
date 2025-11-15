---
title: "Bicycle Frame Display"
image: "/path/to/image.png"
type: "page"
url: /bicycle-frame-display 
---

- *2 sided display*
- *526 total LEDs (WS2802B)*
- *lots of solder and wire*
- *Arduino Nano*
- *Voltage regulator*
- *7.4v RC battery pack*


I started riding with the Providence Bike Jam crew at the beginning of 2021, and I knew from my first ride that these were my folks. Lights, music, smiles, and bicycle advocacy; what’s not to love.

Given my recent excursion into the world of microprocessors and LEDs, I knew I had to make something for my bike. So, I made a rough trace of my frame space, cut some wood, plastered each side with LEDs. 

I can upload new patterns/designs to the Nano, which helps keep it fresh. I’m currently working on plans to adapt this rig to be sound reactive. 

![Bicycle Frame Display](/bicycleframedisplay.jpg)

## Custom Mapping with MoonModules WLED Fork

I recently was working on mapping a custom LED layout for the Lil' Lamb I made before The Big Deal, a Wooly Fair event in Providence, Rhode Island. I realized that the [MoonModule WLED sound reactive fork](https://mm.kno.wled.ge "link to MoonModule WLED sound reactive fork")  offered a bit more for me and my oddball LED layouts, and figured out that the way for me to map it was with a 2d-gaps.json file. Once I figured that out, I realized I could run the same sound reactive WLED installation on this bike LED display as well. Stay tuned for more updates! 

<div class="video-container">
  <video id="player" playsinline controls data-poster="/static/images/lil-lamb-back.jpg">
    <source src="/videos/bicycleframe.mp4" type="video/mp4" />
  </video>
</div>
