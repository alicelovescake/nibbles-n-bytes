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

As a newbie, I love contributing to open source. Here is why! *👉* 

**1. I can collaborate and get feedback from talented developers for free!**

I was intimidated to contribute code for the first time. But guess what I discovered? Nothing *bad* happened! If anything, experienced engineers took the time to explain what they needed and guided me to the right direction. 

*Progress and iteration over perfection!*

**2. I get an inside look into large production codebases and learn best practices from different companies!**

My tiny little projects are nothing like the code for real companies with thousands of lines of code and components to parse. I don't profess I understand everything but it's good practice for me to see how top notch teams and companies handle their testing and code organization.


What are projects I've contributed to?

# Redwood JS

### What do they do?
[Redwood](https://redwoodjs.com/) is a relatively new framework that is on a mission to bringing full-stack to the JAMstack. Built on React, GraphQL, and Prisma, Redwood allows developers to build projects faster and better.

### Why did I choose Redwood JS?
I've built [projects](sheet-menu.md) on Redwood and love not only the tech but also the community! In fact, I joined a workshop ran by David Price, one of Redwood's co-founders (amazing, super nice person). I couldn't believe how welcoming everyone was to me. They've also invested heavily into supporting contributors...just check out the 8 pages of [notes here from the workshop](https://docs.google.com/document/d/16tMBiCMNZUrpGI_vQFvD6Cne8sKihGs0f1JraXfTIbg/edit?usp=sharing)

### What did I work on?
There was an [issue](https://github.com/redwoodjs/redwood/issues/1482) in Redwood's codebase were templated code were generated for invalid models. 

I reviewed the code to identify where the scaffold files were called and generated. Then implemented a robust solution where an error is thrown and an relevant error message is displayed to the user. 

This was my first commit. I got feedback after my commit from a core maintainer to add a unit test. He also sent me relevant info on [snapshot testing on Jest Js](https://jestjs.io/docs/snapshot-testing) which I implemented. 

### Challenges and lessons
**Testing Code**
- Learned how to use Jest to implement tests! 
- How to run tests from the console.
  
**Collaboration with Others**
- I linked to related issues in PR to help reviewers follow tail leading up to this PR
- Helpful description! I tried to have bullet points with concise and clear language on what I've done
- I '@' mentioned a maintainer for feedback and review. 

Happy to report my [PR was merged](https://github.com/redwoodjs/redwood/pull/2829)! 🎉 🎉

# Google Site Kit

### What do they do?

Google Site Kit is a specialized team that provides a one-stop solution for WordPress users to integrate with Google APIs for them to be successful on the web.

### Why did I choose Google Site Kit?

I was searching for `good-first-issue` tag in Github and they were one of the first to pop up! An opportunity to contribute to Google, why not?

### What did I work on?

### Challenges and lessons

**Mastering the Fork and Branch Git workflow**

- Learned how to fork the original repo so I can make changes without affecting original project
- Creating branches rather than directing working on main.
- Make commits small and have useful commit messages. Explain why I've made the change and what I've done.

**Leveraging Google's Engineering Guidelines and Contributor Handbook**

- Took time to understand the procedure to contribute to Google's code
- Learned more about their branching strategy called GitFlow that allows for parallel development.
- Tips for writing proper code! 
  - Adhere to project code standards (WPCS, ESLint etc.)
  - Apply DRY principal
  - Add tests
  - Easily understandable by other developers; readability is more important than cleverness or brevity



