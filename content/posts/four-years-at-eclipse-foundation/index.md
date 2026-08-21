---
title: "Four years at Eclipse Foundation: Looking Back"
date: 2026-07-31T13:00:00-05:00
cover:
  src: images/cover.webp
  alt: ""
tags: ["career"]
summary: |
---

It's hard to believe it's already been four years since I started my career as
a web developer. Every one of those years was spent at the Eclipse Foundation,
where I had the opportunity to grow both professionally and personally. From
collaborating with the Eclipse community to building and maintaining our Hugo
theme, PHP theme, CSS library, and web component library, I worked on the
foundation that powers 20+ websites. The work was always varied, sometimes
demanding, but consistently rewarding - and I enjoyed every minute of it.

## The first year

When I first joined, I was completely new to the industry. At the time, I was
much more of a follower than a technical leader. Most of my work involved
navigating an existing codebase rather than designing new systems, and that
codebase was largely built on legacy PHP 5, ES5 JavaScript, and plenty of
jQuery. It wasn't the modern stack I had been exposed to in school or through
my personal projects, and learning to work effectively within an established
system was a challenge in itself.

Like any junior developer, I made my fair share of mistakes. Some refactors
turned out to be far more disruptive than I anticipated, including removing
features that members of the Eclipse community depended on (oops). Those
experiences taught me the importance of understanding existing systems,
respecting backwards compatibility, and recognizing the impact that even
seemingly small changes can have on real users.

That experience has stayed with me. It fundamentally changed how I approach
changes to public-facing software and made me much more disciplined about
semantic versioning, backwards compatibility, and carefully considering the
impact of every release.

Later that year, I was given the opportunity to implement a major website
redesign. Looking back, I made several architectural decisions that I would
approach differently today. As the project evolved, some of those early choices
became increasingly costly to maintain. It was a humbling experience, but one
that shaped how I think about software architecture, technical debt, and the
importance of making decisions that can scale beyond the immediate needs of a
project.

## The middle years

In the middle years, I became more comfortable making technical decisions and
helping steer projects in a particular direction. I began taking ownership of
several libraries and websites, and even spearheaded major refactors, including
the Foundation's Membership Portal.

The Membership Portal is the Foundation's dashboard application that allows
members to view their project activity and manage their relationship with the
Foundation. To put it lightly, the application had significant performance
challenges. The refactor replaced a convoluted collection of `useEffect`-driven
logic with Redux Toolkit, eliminating unnecessary re-renders from the
application and significantly simplifying the overall codebase.

During this period, we also adopted TypeScript across our libraries, introduced
unit testing, and invested in better developer and user documentation through
Storybook. These years were about taking the lessons I had learned early on and
applying them, moving from simply contributing to projects toward actively
shaping their technical direction.

## The final year

An unexpected brand refresh came into my lap, and I had to move quickly. There
simply was not enough time to completely rethink the architecture, so,
reluctantly, we repeated some of the same mistakes from previous redesigns.
However, as time went on, we continued working behind the scenes to gradually
turn that refresh into something more mature and maintainable.

I'll admit it: this was one of the most challenging projects I worked on, and I
never quite felt like I fully solved it. We were dealing with a legacy CSS and
component library that had been around for more than 14 years. It was deeply
coupled to nearly every website operated by the Foundation, making any
significant change a difficult balancing act.

Despite those challenges, we made significant progress. Rather than continuing
to evolve the legacy system, Solstice Assets, indefinitely, we began breaking
it apart into three distinct initiatives:

* A new CSS theme: lightweight, preferably built with vanilla CSS, and easier
  for projects to adopt independently.
* A JavaScript API client: something that could eventually be offered as a
  service to the community, allowing developers to build their own experiences
  without needing to understand or maintain API schemas.
* A component library: Solstice Components, which was the only one of these
  initiatives to reach completion.

{{< figure src="./images/deprecate.webp" alt="A diagram showcasing how Solstice Assets (deprecated) can be broken into Solstice Components, a JS API client, and a CSS theme." caption="A diagram showcasing how Solstice Assets (deprecated) can be broken into Solstice Components, a JS API client, and a CSS theme." >}}

Solstice Components became a modern, framework-agnostic component library built
with web components and Lit, allowing these components to be used across
websites regardless of their underlying technology stack. See my post about it
[here](/posts/introducing-solstice-components).

We also took the opportunity to properly deprecate major portions of the Hugo
theme. We moved from a messy 0.x.x version history that contained three
separate brand refreshes in the same major version to proper semantic
versioning, releasing 1.0.0, 2.0.0, and 3.0.0. This allowed us to better
communicate breaking changes, reduce maintenance complexity, and avoid carrying
years of accumulated technical debt forward.

If only I had more time to do the same with Solstice Assets. It remains one of
the biggest pieces of unfinished work, and I hope the next person who takes
ownership of it can see it through. The foundation has been laid, the problems
are better understood, and I believe it is now in a much better position to be
transformed into something more modern and maintainable.

## Conclusion

Looking back, my time at Eclipse Foundation has been a journey of growth. I
joined as someone still learning how to navigate a large and unfamiliar
codebase, and I leave having had the opportunity to shape the architecture,
tools, and practices that support the Foundation's work.

Not every challenge was solved perfectly. Some things remain unfinished, and
some decisions were made under constraints that required compromise. But I am
proud of the progress we made, the foundations we built, and the people I had
the opportunity to work alongside.

The biggest lesson I am taking away is that engineering is rarely about
creating something perfect from the beginning. It is about continuously
improving, making thoughtful decisions, and leaving systems in a better state
for the people who come after you.

Thank you to everyone at Eclipse Foundation who trusted me, challenged me, and
helped me grow over these past four years. It has been an incredible chapter of
my career, and I am excited to see what comes next.
