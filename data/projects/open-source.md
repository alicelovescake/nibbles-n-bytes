---
title: "Open Source Projects"
excerpt: "A snapshot of cool open source projects I've had the privilege of contributing to!"
coverImage: "/assets/projects/open-source/cover.jpg"
date: "2021-06-25"
ogImage:
  url: "/assets/projects/open-source/cover.jpg"
---

Isn't it a crazy idea to share your work in public? 🤯

Why would a company give away their secret sauce? Or why would a developer share make their repository public for the critical gaze of the internet?

Before the image of the Game of Thrones scene where Cersei is forced into a long painful walk of shame flash by, know that open source is worth it!

As a newbie, I love contributing to open source. Here is why! _👉_

**1. I can collaborate and get feedback from talented developers for free!**

I was intimidated to contribute code for the first time. But guess what I discovered? Nothing _bad_ happened! If anything, experienced engineers took the time to explain what they needed and guided me to the right direction.

_Progress and iteration over perfection!_

**2. I get an inside look into large production codebases and learn best practices from different companies!**

My tiny little projects are nothing like the code for real companies with thousands of lines of code and components to parse. I don't profess I understand everything but it's good practice for me to see how top notch teams and companies handle their testing and code organization.

What are projects I've contributed to?

# Redwood JS

## What do they do?

[Redwood](https://redwoodjs.com/) is a relatively new framework that is on a mission to bringing full-stack to the JAMstack. Built on React, GraphQL, and Prisma, Redwood allows developers to build projects faster and better.

## Why did I choose Redwood JS?

I've built [projects](sheet-menu.md) on Redwood and love not only the tech but also the community! In fact, I joined a workshop ran by David Price, one of Redwood's co-founders (amazing, super nice person). I couldn't believe how welcoming everyone was to me. They've also invested heavily into supporting contributors...just check out the 8 pages of [notes here from the workshop](https://docs.google.com/document/d/16tMBiCMNZUrpGI_vQFvD6Cne8sKihGs0f1JraXfTIbg/edit?usp=sharing)

## What did I work on?

**1. Splash Page**

Practically every RedwoodJS dev gets an eyeful of the splash page when they create a new Redwood app. Specifically the splash page is shown whenever there are no routes created or when routes are created but there is no home page. I took on the task of revamping the current welcome page to give it some pizzaz and flair. Here were the general considerations:

- All markup and styles need to be within the component
- Shouldn’t rely on TailwindCss
- Supports Safari, Chrome, Firefox, etc.
- Quick to load, so relatively lightweight
- Friendly, engaging, exciting
- Reflects mission and sentiment from [RedwoodJS Docs](https://redwoodjs.com/docs/introduction)
- Shows release and version info

[This PR](https://github.com/redwoodjs/redwood/pull/3183) ended up being way more challenging than just HTML and CSS design! Not only did I build a new page from scratch but there were technical challenges that included:

- Working with [Cypress](https://docs.cypress.io/guides/overview/why-cypress) to make sure our broken e2e tests passed
- Querying the current Redwood version from the GraphQL API so the splash page always displays accurate version number. Also the version number is only conditionally rendered so that it only shows if the query is complete.
- Working with larger Redwood codebase to detect and display states in which no pages exists or when a page other than the home page exists. This was a bit tricky since I had to work with Typescript and some tricky logic. But super gratifying because not only did I fulfill my need but I also improved the overall DX. Prior to my change, a developer would get a 404 page if they try to navigate to a home page that didn't exist. Now they see my splash page!

This PR has taken me a few weeks and it's not merged yet. But the best thing so far is getting a shoutout from one of the core contributors!

![picture 1](/assets/projects/open-source/feedback.png)

**2. Fix Broken Scaffold**

There was an [issue](https://github.com/redwoodjs/redwood/issues/1482) in Redwood's codebase were templated code were generated for invalid models.

I reviewed the code to identify where the scaffold files were called and generated. Then implemented a robust solution where an error is thrown and an relevant error message is displayed to the user.

This was my first commit. I got feedback after my commit from a core maintainer to add a unit test. He also sent me relevant info on [snapshot testing on Jest Js](https://jestjs.io/docs/snapshot-testing) which I implemented.

**3. Add new CLI command**

Redwood is huge on open source and they are constantly working to making the contributing experience better. Redwood `rwfw` is a tool to help contributors sync the Redwood framework with Redwood project. I added a new CLI command `help` and `--help` so that users are able to get more information on the list of available commands and explanations on what it does. [Here is the PR](https://github.com/redwoodjs/redwood/pull/3085)!

## Challenges and lessons

**Setting up Dev Environment**

- The most challenging part and time consuming is getting connected to the Redwood framework.
- Redwood is constantly changing. I have to pull new changes and install new dependencies
- Half the time is debugging how to get the dev environment running and projects linked!

**Testing Code**

- Learned how to use Jest to implement tests!
- How to run tests from the console.

**Collaboration with Others**

- I linked to related issues in PR to help reviewers follow tail leading up to this PR
- Helpful description! I tried to have bullet points with concise and clear language on what I've done
- I '@' mentioned a maintainer for feedback and review.

Happy to report my [PR was merged](https://github.com/redwoodjs/redwood/pull/2829)! 🎉 🎉

# Google Site Kit

## What do they do?

Google Site Kit is a specialized team that provides a one-stop solution for WordPress users to integrate with Google APIs for them to be successful on the web.

## Why did I choose Google Site Kit?

I was searching for `good-first-issue` tag in Github and they were one of the first to pop up! An opportunity to contribute to Google, why not?

## What did I work on?

**1. Clean up unused SVGs**

Graphics that were used before are so longer needed after moving to inline svgs. I removed these files to prevent accumulation of tech debt. I also made sure no other file uses these files to avoid breaking any code in the entire repo.

## Challenges and lessons

**Mastering the Fork and Branch Git workflow**

- Learned how to fork the original repo so I can make changes without affecting original project
- Creating branches rather than directing working on main.
- Make commits small and have useful commit messages. Explain why I've made the change and what I've done.

**Leveraging Google's Engineering Guidelines and Contributor Handbook**

- Took time to understand the procedure to contribute to Google's code
- Learned more about their branching strategy called GitFlow that allows for parallel development.
- Tips for writing proper code!
  - Adhere to project code standards (WPCS, ESLint etc.)
  - Apply [DRY principal](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
  - Add tests
  - Easily understandable by other developers; readability is more important than cleverness or brevity
