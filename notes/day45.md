```
  It's nice to see the little ✅ symbol next to my commit titles in github again
```

I'm not entirely sure how, but I want to create a templating system for the content.

The design is so heavy that it's hard to be creative with spaghetti around the top, bottom and sides of the input area.

That's enough about me.

## Portfolio Card

I made a Portfolio Card component to house all the different technologies.

The Technologies section demands more interactivity, but unfortunately the design hasn't been resolved for it.

Two options right now and I might go with the first if I am lacking time:

  1. Just have card stacks, with tiny next/previous button (almost like a carousel) and content centred-xy (Name, Confidence, Link)
  2. Have a 'Current Tech' viewer, with the card marking the active icon and the viewer providing additional details (Name, Confidence, Link)

## Noon

It's almost the end of Cheat Day 4.5. I have been looking at MD/MDX files to organise the content.

There is now a folder for each section `./content/{about,csharp,education,php,portfolio,signature,sql,work}/`, where content will be organised based on H2 headings. Each H2 heading gets it's own markdown page.

I might have installed the @astrojs/mdx plugin unnecessarily here.

Was just offered a shift at work. I've already lost almost 7 hours of alert function to work this week. I have non-work obligations that prevents me from declining. We have less than 3 hours of work remaining for day 4.5.

Anyway, let's look into Markdown.

## Markdown

Initial implementation works ok.

I was initially thinking of JSON, but since Astro ships with Markdown, I want to use Markdown.

The system I am using results in a lot of files, but solves the styling issue without having to delve into documentation too deeply.

Let's sync latest up because I would rather the portfolio to present "WIP" while it is in progress.

## Gotta go

Gotta gotta gotta go...

I've also gotta make sure that the planets can spin at their normal speed again on mobile.

