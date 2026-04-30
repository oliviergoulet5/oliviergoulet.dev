---
title: "Introducing Solstice Components"
date: 2026-04-29T00:00:00-05:00
cover:
  src: images/cover.jpg
  alt: ""
tags: ["eclipse foundation", "library"]
---

We've rebuilt our component library from the ground up to be more flexible,
more stable, and easier to use. Now, whether you're maintaining an Eclipse
project website or a Working Group site, you can integrate these components
with minimal configuration regardless of your website's tech stack.

## The old library served us well - here's why we built something better

The old component library was built on top of a combination of jQuery, custom
JavaScript, LESS stylesheets, and Mustache templates. While it served us well
for many years (10+), it had several issues:

1. **Portability**: The old component library were tightly coupled with the
   global styles of the eclipse.org website. This made it difficult to simply
   insert components onto your webpage without risking styles clashing.
2. **Distribution**: The old component library offered two ways to get started:
   NPM or downloadable build artifacts from eclipse.org. The NPM approach
   required your build system to be configured in a specific way. You had to
   extend the component library's Webpack config, which meant it wasn't
   compatible with other build tools. As for the downloadable artifacts, they
   weren't versioned, so if your site depended on them, you risked instability
   whenever the library changed.
3. **The scope was too large**: The old component library did too much. As
   mentioned before, it included a full blown CSS framework, global styles, and
   a plethora of components. It was not possible to pick and choose exactly
   what you needed without importing the entire library.

These issues were what I deem as large barriers to entry for many developers,
especially developers whom are not necessarily front-end experts. If we truly
wanted to empower the Eclipse community, we had to go back to the drawing board
and build something better. We had to build a component library that was
portable, easy to integrate, and focused on just the components. We had to
build a component library that was truly for everyone in the Eclipse community,
regardless of their technical expertise or the tech stack they were using.

## Introducing our new component library 

Our new library is built on top of Web Components, a technology that is part of
the HTML5 standard. In essence, Web Components allow us to create custom HTML
elements. This means it is incredibly easy to use our components. 

Web Components are also designed to be easily integrated into any web page,
regardless of the underlying technology. This means that you can use our
components in a React app, a WordPress website, or even a plain HTML page.

They also benefit from style encapsulation, which means that the styles of our
components won't clash with the styles of your website. This is a huge win for
portability and ease of use.

To display a list of project adopters for a particular project, you can simply
add the following HTML to your webpage:

```html
<efsc-project-adopter-logo-list projectid="ecd.openvsx"></efsc-project-adopter-logo-list>
```
{{< figure class="md:-mx-24" src="./images/adopters.webp" caption="A list of project adopters for Open VSX as of May 2026" alt="A list of project adopters for the Open VSX project. From left to right: Broadcom, Coder, Ericsson, Gitpod, IBM, Onivim, SAP, TypeFox, VSCodium" >}} 

If you want to display a list of member organizations of a particular working
group, you can add the following HTML:

```html
<efsc-member-logo-list type="working-group" collaboration="adoptium"></efsc-member-logo-list>
```

{{< figure class="md:-mx-24" src="./images/members.webp" caption="List of logos from member organizations for the Adoptium Working Group" alt="List of logos from member organizations for the Adoptium Working Group. From left to right: Alibaba Cloud, Bloomberg Engineering, Canonical, Fujitsu, Google, IBM, iJUG Association, Microsoft, OpenElements, Rivos" >}} 

To display a list of events, you can add the following HTML:

```html
<efsc-collection pagesize="2" autoscroll="true">
  <efsc-event-filters></efsc-event-filters>
  <efsc-event-list publishtarget=""></efsc-event-list>
  <efsc-pagination maxvisible="5" justify="center"></efsc-pagination>
</efsc-collection>
```
{{< figure class="md:-mx-24" src="./images/events.webp" caption="A list of events with the event filters and pagination components" alt="" >}}

## Try it out

If you're interested in trying out the new component library, you can find the
documentation and installation instructions on our [website](https://webdev.eclipse.org/docs/components). 
It can be installed via NPM or you can use the CDN links to include it directly
in your HTML.

## Conclusion

This is just the beginning. We've built the foundation for something better,
and we're counting on your feedback to keep improving it. Try the new component
library in your existing site. We think you'll notice the difference
immediately. And if you have ideas for new components or improvements, we'd
love to hear them by [creating an issue](https://gitlab.eclipse.org/eclipsefdn/software-dev/frameworks-and-tools/solstice-components/-/issues)! 
This library is for the entire Eclipse community.
