---
title: Things I learned while building a design system at Kong
description: I refactored our entire open-source UI component library. Here are a few lessons I learned.
published: June 25, 2024
image: kong_design_system_banner.png
about: implementing a design system
index: 0
---

## Summary

::wrapper{classNames="mb-8"}
In this article, I will talk about my experience implementing a design system at [Kong](https://konghq.com/){class="link" target="_blank" rel="noopener"}. I will go over the reasons why we decided we needed one in the first place, where we started, and how we got to where we are today. I will also cover the technology we used and how it has transformed software development at Kong. Whether you have plenty of experience with design systems or are looking to get started with one, I hope you will find this article helpful and informative.
::

## Key takeaways

::wrapper{classNames="mb-8"}

* You know you need a design system when ensuring consistent UX across the platform becomes a bottleneck
* Trying to combine design tokens, UI components, icons and styles into one library is a very bad pattern - each of those areas requires a separate library
* We are using [Style Dictionary](https://amzn.github.io/style-dictionary/#/){class="link" target="_blank" rel="noopener"} as a tool for defining and exporting all of our design tokens
* [Stylelint](https://stylelint.io/){class="link" target="_blank" rel="noopener"} is a great tool for enforcing correct design token usage in code
* Clear ownership over design vision is essential for great UX and DX
::

## Background

::wrapper{classNames="mb-6"}
[Kong Konnect](https://konghq.com/products/kong-konnect){class="link" target="_blank" rel="noopener"} is our primary application. I am not going focus too much on explaining what it does, but it is important to understand a few things about how our design and engineering teams are operating.
::

### App setup and component structure

::wrapper{classNames="mb-6"}
Konnect is a Vue SPA. Last year (2023) we broke the monolith down into micro-frontends ([this great article by Adam DeHaven](https://www.adamdehaven.com/articles/scalable-architectures-with-vue-micro-frontends-a-developer-centric-approach){class="link" target="_blank" rel="noopener"} explains ins-and-outs of that effort). Different widgets and UI elements of Konnect are abstracted into reusable Vue components, exported by different open-source and/or private libraries. All of those libraries as well as the host apps (micro-frontends), use our open-source UI component library called [Kongponents](https://kongponents.konghq.com/){class="link" target="_blank" rel="noopener"}.
::

### Engineering team organization and workflow

::wrapper{classNames="mb-6"}
Konnect engineering is organized into specialized teams each owning 1 or more product areas. Majority of teams have both back-end and front-end developers, some teams have their own designated product designer but most of the time they "share" a designer (one designer could be assigned to a few projects or initiatives across different areas). **Teams ship often, new features are sometimes released as often as weekly, across the board.**
::

### The turning point: inconsistent UX

::wrapper{classNames="mb-8"}
Without a consistent design system and a big-picture vision for the platform UI at a fundamental level, the product becomes feature-bloated. It's hard to scale a product that users don't find intuitive and easy to use. For quite some time, Konnect was lacking just that: a clear and definitive vision for the design. Engineers began to accommodate different, often inconsistent designs, resulting in multiple variations of the same component (e.g., two dropdown menus on the same page with very different appearances and inconsistent UX). Eventually, the components used by the design team in Figma started to look different from Kongponents, turning design reviews into trivia nights where engineers had to guess which components to use. Sometimes, these sessions led to engineers adding even more variations to Kongponents to accommodate their use cases. Maintenance of Kongponents was becoming increasingly demanding, and a good UX was becoming something the platform was lacking.
::

## Pick one thing and be good at it

::wrapper{classNames="mb-6"}
Redesigning Kongponents would lay the foundation for the whole design system effort. However, before we could simply start using the new and shiny designs our talented design team came up with, we needed to address a few bad patterns we had going on in Kongponents. At the time Kongponents was at v8 and it was the literal Frankenstein. Kongponents v8 was simultaneously:

1. A Vue components library
2. Design tokens library
   * Probably an overstatement but as close to the truth as it gets, as it exported a few CSS custom properties and SASS variables for our most used colors, spacing values and font sizes at the time.
3. Utility class library
    * Again, a very loud term to call what in fact was a couple dozen of common use-case classes.
4. Icons library

![Kongponents v8 diagram](/images/kongponents_v8_diagram.svg)

Very first thing we did was removing usage of all Kongponents-provided utility classes, CSS custom properties and SASS variables from all consuming repos.

To ensure no one accidentally uses outdated utility classes, we created a custom ESLint plugin to catch any occurrences in the code. **We found that automation is the most effective way to combat anti-patterns.**
::

### Design tokens

::wrapper{classNames="mb-6"}
We chose [Style Dictionary](https://amzn.github.io/style-dictionary/#/){class="link" target="_blank" rel="noopener"} to serve as our design tokens library and the single source of truth for all our design tokens.

Naming is hard. After hours of research and back-and-forth on which convention to follow, we finally agreed on a naming structure. I won't delve too deeply into token naming, as it deserves an article of its own.

![Kong design token structure](/images/design_token_structure.svg)

The design team owns the design tokens and decides when and what tokens to add based on the needs of the design system.

Enforcing the correct token usage in code, however, is engineering team responsibility. We quickly figured, that it's only a matter of time before someone accidentally misuses a token or two:

```css
/* incorrect, kui-space-* token does not belong in font-size property */
.service-card-description {
  font-size: $kui-space-20;
}

/* correct */
.service-card-description {
  font-size: $kui-font-size-20;
}
```

To prevent that from happening, we created a custom [Stylelint](https://stylelint.io/){class="link" target="_blank" rel="noopener"} plugin to help us enforce correct token usage throughout our codebase.
::

### Icons

::wrapper{classNames="mb-6"}
There are multiple reasons why it is a bad idea to combine component UI library with icons library:

* Separation of concerns
* Bundle size - even with tree-shaking, ideally we wanted to have full control over package size
* Ease of switching - should we decide to use some other icons library tomorrow, we don't want to have to do a breaking Kongponents release just for that
* Maintenance overhead

We created a separate library for icons. Replacing all existing usage of icons across the entire app at once would have been a massive effort so instead we decided to do it proactively while the Kongponents were in the process of reskin. We would:

* Ask designers and engineers to only use new icons when working on new features
* Try to catch any usage of deprecated icons during pull request review and ask the author of the PR to replace old icon with a new one
* Add new icons to the new library on-demand

After a few months we only had a handful of old icons left in the entire codebase.
::

### Kongponents reskin

::wrapper{classNames="mb-8"}
At first we were planning to only do what's necessary to give the components new look and feel and to integrate new design tokens into the styles. However, we realized that with many outdated variations of different components going away, we will need to revisit most of the props and slots in every component. Since doing that practically meant going through each component line-by-line, we decided to also tackle a few code smells that we found along the way. In the end, apart from styling changes, Kongponents v9 includes:

* Accessibility improvements
* Better and more intuitive prop naming
* Consistent and predictable selector naming
* Performance improvements
::

## Outcomes

::wrapper{classNames="mb-8"}
The obvious win here is that we have refreshed the look and feel of our entire platform without any downtime in shipping new features. Achieving full 1:1 parity between Figma components and Kongponents guarantees a pixel-perfect design-to-development transition. With our systematic approach to building UIs, there's no confusion about ownership: all design decisions are backed by use cases across our entire design system. In terms of code quality, Konnect is in much better shape than it was at the start of this transition. The developer experience has improved, as each Kongponent now performs the specific tasks it was designed for without needing any style overrides. Most importantly, Konnect users are now enjoying a consistent UX across all product areas.
::

## Outro

Implementation of design system cannot be treated as event but rather a process. In the future we will be dealing with more challenges scaling and solidifying it. However, I am proud of what our team has accomplished so far and value the lessons we learned.
