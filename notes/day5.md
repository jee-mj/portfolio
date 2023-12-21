```
  I'm struck by a fresh blank!
```

# Day 5: Review and finalise

First, let's ensure that this branch is working ok with a quick sync to repo. No other changes for now.

I'm regretting choosing framer motion is one thing. I found a really graphical development environment for front-end that I wish I was using because I don't feel like learning another workstation application in the middle of all this. Never risk breaking the camel's back. It's just not worth it.

I am a little concerned about the following statements where I don't recall the logic and haven't written down the thought or reasoning behind writing it in my notes:

  > `It's fine though, astro has further optimisation strategies for everything later.` - D2
    - Context is about caching, but I don't remember exactly what was the specifics.
    - The animated bg and video might be what I was referring to.
    - I do require further optimisations for phones. My phone did not skip video frames at one stage.
  > `Due to various issues I was jumping back and forth from Linux and Windows.` - D3
    - After this day, the phone skipping video frames issue came into existence. We can review changes later.

Hooray for debt. I think the main issue is the use of the webm/webp formats, because it might require modern processing techniques vs jpeg and mp4 (in both removing greenscreen and automating opacity). Simple fix might be adjusting the timings. I've made the actual transition run for half the length. The seizure risk must be reasessed.

It checks out ok in my dev environment, so I am going to merge back and check on my phone.