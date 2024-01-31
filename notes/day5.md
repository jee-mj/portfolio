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

Nope. The image works out better though. I think it might be to do with how it was extracted into a component. I'm really not sure but I'll leave this till I am closer to shipping.

## Content

I've had some coffee so it's go time. Usually I'm very self conscious about the content I write so it's sorta amazing how GPT can generate things with enough cohesiveness and fluency that I can rely on it. Commit trackers, do savour the lols and don't try too hard to understand if it's not making sense. GPT will polish it later.

To ensure that the design is not distracting users from the content, I've removed transparency from the section content areas.

V2 will have some major refactoring required however, the purpose of this V1 is to create something that is functional so that I can start applying to places ASAP.

```md
# TODO: Features

1. Add parallax effect to the background on clicking an element <!-- Version 2 -->
2. The current version of the site is what I want design wise, and will be archived in `archive` branch. <!-- A case of Waffling -->
  - Specifically, how the Portfolio / Signature pages are designed.
```

I'm about to kill my favourite feature of the website so that I can have it be functional. I can continue to work on this any time in the future. Right now, what's important is deadlines and core features. As long as these are met, then it's okay.

I'm not sure what is better, a JSON file, or this file/folder structure I have currently. Maybe some people really like writing in JSON, but because of the volume of different things I am having to consider for this, markdown works a lot better for my purposes.

All things considered, Markdown is a lot better for this vs JSON. JSON _might_ be a little better in transit.

I'm going to commit, backup `dev-mj` to archive and take another break.
