# Day 6

```
  Procrastination leaves behind work debt.
```

Need to do further review and refactor?

I added a little copyright thing at the bottom so stunned audiences will realise it's not worthless to me.

I remember that the plan was to look into refactoring a little bit at the end of Day 5, so even though it is 7:30 AM, we must look into it a little.

Day 5 saw the removal of a very annoying function. Certain devices are unable to handle its processing requirements on stock settings and these are in millions of pockets every day.

I am not hopeful, but it would be wonderful if the buttons from my physical wireframe (which I don't think is necessary for this template anyway, it's more meant to be a tweaker's paradise).

```md
I found new tech to play with! Today is rest day. Day 6 begins tomorrow, or ~~Monday~~ wednesday.
```

Good thing we're counting days, not tracking dates. Let's begin with Day 6.

I've done most of the refactoring, which required re-calculating a bunch of timings since paths are not locking like before.

### Problem:

        Causes my phone to overheat when I am testing the website for 10 minutes. No doubt, it will overheat in the hands of anybody given the content is supposed to take 5-15 minutes to get through, and 30 minutes+ when browsing. The JS should be aware of when the window is no longer in focus.

### Solution:

        Well, let's have a function that looks at the device screen size, and uses according bg image set.

While trying to setup a solution for debugging the development environment on another device, I accidentally broke my zfs on my setup, which was abruptly nuked before the end of it's lifecycle to continue this project as it didn't contain anything major.

```bash
mj@URIEL:~$ ls -la /boot/
total 149304
drwxr-xr-x  5 root root      4096 Dec 26 23:21 .
drwxr-xr-x 21 root root      4096 Dec 26 23:39 ..
```

See it for what it is. A great deal of pain and suffering.

Since I've lost the background assets it's time to generate 8888 variations, and carefully select the correct ones.

I would like to proceed with development of the website sections. A quick check over my notes shows that I haven't left out the interactive education/work sections.

I wanted to switch to a new branch since a merge was performed on the day6 branch, so we're here on a Day 6.5 branch now.

# Day 6.5

I have a great design, but besides user convenience it does not add anything to the product.

I have to render the variations again. This will only take a quarter of the time I have and unfortunately I am not going to risk using this PC while it's going on.

## Render done

Okay it's done and I'm too scared to check first so here is my will in advance.

If it doesn't work, then it's time to read through this horrible log file, 209044 lines on my machine.

##### Figure 1 (of the entire notes)

        /A\/|
       X X X
      | ._. |
       \ T /
        \V/

> See, it's my face, and it's not a good look!

Amazingly, the errors do persist. I'll have to look into it once my PC stops screaming in determination to load all the files in `./public/assets/background/out/webp/`.

Oh good, we're done with some minor issues with thumbs. I think the right way about this is to split folders based on resolution, then by jpeg compression. Then, determine which settings were used previously used.

I have to run the compressor again. I am already worried about my drive being overloaded and I have to run it a fourth time to completion because I accidentally deleted the badly sorted folder before it finished transferring the data.

Leave it to OOP to prefer making both a `backgroundResizer` AND `fileOrganiser` script.

      |\/A\
       X X X
      | ._. |
       \ T /
        \V/

It seems that part of the challenge is noticing when the bash script has completed. I need to have a standard alert type thing for my workstation. This won't do if it's taken me an hour to notice this yesterday.

A good approach would have been to address this prior. It crossed my mind but it was not really a concern until my phone overheated from the introduction of asynchronous loading/unloading of the UI.

## Weak iPhone 14 Pro

I know that there's already another but it's astonishing how bad the specs are.

I jest, yet there are fully interactive games that the platform has been running since the App Store didn't even exist. Virtualisation was basically the first step for the initial 'jail'break, which installed a suave alpine linux.

So why is it running my code so poorly? HTML5, and it's probably most accurate if I stop at that.

I'm quite certain that it's very intensive because the CPU is not only playing two videos, but also masking out the greenscreen, and rendering two canvas elements. This is happening constantly in the background. While that is going on, the opacity of the background is automated, inverse to the next or prior over a long period of time.

Making it's nature asynchronous is mostly via optimising code paths by using objects since my Astro build is only serving static content.

## Staying focused is good

I felt like I had been getting on the borderline of cheating by almost arbritarily creating a day 6.5... so I had a beer after work which was enjoyable. This focus however, is not.

Thankfully, copilot is much more experienced at copying other peoples' code than I am, so it was able to save me time on learning bits of shell scripting.

## Knowing when a milestone has been achieved is another

I'm going to wrap up this day with just the images sorted out and organised for use, for Day 7 to wrap everything up, including whatever monstrous implementation of the content selector I will settle for.

I am thinking about just making the box smaller, and have the area be scrollable, or something, and have additional buttons. No icons. Icons break the design philosophy, and as much as it tears me up to only have the logo I spent 3 days perfecting be a favicon, I'll have to continue with no icons.

In a certain sectionSection `(ooh, a rogue tongue twister)` the `-link` will change background colour to `danger`, because that will send you back to the home page.

Such a shame, there are no frontend changes, no backend changes, and only counter-productive practices coming from OOP. This is a nightmare!

I think I'm going to chill out for a little while and then figure out the rest. I'm going to also, no longer consider for hi-dpi watches. The smallest device should be in the list of default devices provided by the Viewport Emulator in Chrome Developer Tools.

Ok, wait no.

This isn't some kind of nuclear threat to the planet. This is simple: a decent, usable application with a modern design. It would be erroneous to patch everything here. This is a kind of callback hell, and I am sorry for all the meaningless words here dear reader. This implementation requires resources that are frankly, not available in any way shape or form. (not 1 second, but multiple seconds or more).

I can try for V2 when I have some actual free time. There is an outer loop deadline to this project that is not important here.

So everything needs to be completed by tomorrow. Unfortunately, I have a shift on saturday which makes the likelihood of not having one later today quite high.

I'll sync this current state, then clean up the project as I continue. I hadn't realised how much time off I took over christmas. I actually have no more extensions in terms of workdays so it's important to architect only defined implementations.

There are bigger problems, like the Portfolio page.
