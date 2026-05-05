---
title: "Introducing Solstice Components"
date: 2026-04-29T00:00:00-05:00
cover:
  src: images/cover.jpg
  alt: ""
tags: ["eclipse foundation", "library"]
summary: |
  We’ve rebuilt our component library from the ground up to be more flexible,
  more stable, and easier to use. Now, whether you’re maintaining an Eclipse
  project website or a Working Group site, you can integrate these components
  with minimal configuration regardless of your website’s tech stack.
---

We've rebuilt our component library from the ground up to be more flexible,
more stable, and easier to use. Now, whether you're maintaining an Eclipse
project website or a website for an Eclipse Foundation Working Group, you can
integrate these components with minimal configuration regardless of your
website's tech stack.

## The old library served us well - here's why we built something better

The old component library, Solstice Assets, was built on top of a combination
of jQuery, vanilla JavaScript, LESS stylesheets, and Mustache templates. While
it served us well for many years (10+), it had several issues:

1. **Portability:** The legacy component library was tightly coupled to
   eclipse.org’s global styles, making it difficult to reuse components on
   other sites without style conflicts. It also introduced significant CSS
   overhead, increasing the consumer’s bundle size. 
2. **Distribution:** Solstice Assets could be included either via NPM or by
   downloading build artifacts from eclipse.org. The NPM option required a
   fairly strict build setup, often forcing your tooling to be built around the
   library’s Webpack configuration rather than your own, which reduced
   compatibility with other tools. The downloadable artifacts lacked
   versioning, leading to risk of instability when updates were made.
3. **Scope:** The library tried to do too much. It bundled a full CSS framework
   (Bootstrap 3), global styles, and a large set of components, making it
   difficult to adopt selectively or use only what you actually needed. While
   this worked for sites already aligned with our styles, it created friction
   for those with their own independent design systems and visual identity. 

These issues introduced significant barriers to entry for many developers who
aren't front-end specialists. To better support the Eclipse community, we had
to go back to the drawing board and build something more portable, easier to
integrate, and focused purely on components. We had to build a component
library that was truly for everyone in the Eclipse community, regardless of
their technical expertise or the tech stack they were using.

## Introducing our new component library 

Our new library, *Solstice Components*, is built on Web Components, a native
web platform feature that allows us to define *custom* HTML elements. This
makes the components extremely simple to use: just drop them into your markup
like any standard HTML tag. No build step required, it works out of the box.

Web Components are designed to integrate into any web page, regardless of the
underlying technology. This means you can use our components in a React app, a
WordPress site, or even a plain HTML page without additional setup[^1].

They also benefit from style encapsulation, so component styles don’t clash
with your website’s styles. This improves portability and ease of use.

## Examples

To display a list of project adopters for a particular project, you can simply
add the following HTML to your webpage:

```html
<efsc-project-adopter-logo-list projectid="ecd.openvsx"></efsc-project-adopter-logo-list>
```
{{< figure class="md:-mx-24" src="./images/adopters.webp" caption="A list of project adopters for Open VSX as of May 2026" alt="A list of project adopters for the Open VSX project. From left to right: Broadcom, Coder, Ericsson, Gitpod, IBM, Onivim, SAP, TypeFox, VSCodium" >}} 

If you want to display a working group's member organizations, you can add the
following HTML:

```html
<efsc-member-logo-list type="working-group" collaboration="adoptium"></efsc-member-logo-list>
```

{{< figure class="md:-mx-24" src="./images/members.webp" caption="List of logos from member organizations for the Adoptium Working Group" alt="List of logos from member organizations for the Adoptium Working Group. From left to right: Alibaba Cloud, Bloomberg Engineering, Canonical, Fujitsu, Google, IBM, iJUG Association, Microsoft, OpenElements, Rivos" >}} 

To display a list of events, you can do the following:

```html
<efsc-collection pagesize="2" autoscroll="true">
  <efsc-event-filters></efsc-event-filters>
  <efsc-event-list></efsc-event-list>
  <efsc-pagination maxvisible="5" justify="center"></efsc-pagination>
</efsc-collection>
```
{{< figure class="md:-mx-24" src="./images/events.webp" caption="A list of events with the event filters and pagination components" alt="" >}}

## Try it out

If you're interested in trying out the new Solstice Components, you can find
the documentation and installation instructions on our
[website](https://webdev.eclipse.org/docs/components). 
It can be installed via NPM or you can find embeds to include the library
directly in your HTML from a CDN. 

## Conclusion

This is just the beginning. We've built the foundation for something better,
and we're counting on your feedback to keep improving it. Try the new component
library in your existing site. We think you'll notice the difference
immediately. And if you have ideas for new components or improvements, we'd
love to hear you by [creating an issue](https://gitlab.eclipse.org/eclipsefdn/software-dev/frameworks-and-tools/solstice-components/-/issues)! 
This library is for the entire Eclipse community.

[^1]: Web Components still require you to include the JavaScript that defines
them in the browser. In our case, they also require a small CSS theme file,
but these themes are fully compatible and designed to avoid any style
conflicts.
