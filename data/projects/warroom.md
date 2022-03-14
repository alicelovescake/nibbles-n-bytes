---
title: "War Room"
excerpt: "Making incident management stress-free"
coverImage: "/assets/projects/warroom/cover.png"
date: "2022-02-07"
ogImage:
  url: "/assets/projects/warroom/cover.png"
---

Growing up, failure was never in my vocabulary.

In school, I only ever had a single B on my report card up until I finished university. In my first sales job, I spent hours practicing for 15 minute demos making sure I gave a perfect presentation.

What I didn't realize then is that failure is not fatal. It is part of success. I wish I took classes that intrigued me instead of those I knew I could ace. I wish I didn't memorize scripts in my sales presentations so I could have created space for human connection. I wish I let myself stumble a few more times so I could learn that repeated failure breeds creativity and innovation. If failure is not an option, neither is success.

In February, my partner and I built War Room, an incident management tool that helps developers to quickly resolve issues with their services and systems. 30 days was not enough time to finish a product we were proud of, but it did teach me valuable lessons along the way!

## 🔨 How did we build it?

### Frontend

> [Solid JS](https://www.solidjs.com/): A simple and performant reactivity UI framework

Most developers lean towards [React](https://reactjs.org/), a popular tool developed by Facebook, to build user interfaces. Solid shines on its superior performance and powerful reactive primitives that makes developing fun and simple. It was so cool to see my components render only once while always displaying the latest state.

![picture 1](/assets/projects/warroom/solidPerformance.png)

I wish there were more libraries in the ecosystem to enable more developers to use Solid. In the end, we failed to deploy War Room because the few Solid libraries that we did use did not work with our production build. Given that the month was up, we had to move on. Regardless, it was a joy using this open source tool built by many smart developers dedicated to making the web better.

### Backend

> [Nest JS](https://nestjs.com/): A progressive Node.js framework for building scalable server-side applications

Last month, we used Nest to build the backend for Poke. I learned a lot about how Nest sets up REST APIs. For War Room, I decided to use GraphQL as the query language to interact with our backend. I spent a bit of time trying to decide between a [schema first or code first approach](https://blog.logrocket.com/code-first-vs-schema-first-development-graphql/). I went with a schema first because I wanted to control my GraphQL SDL. I created a code generator to automatically generate TypeScript definitions from the abstract syntax tree. It was really fun to work with GQL because it allows the frontend to query for the exact data it needs without any extra bloat in a single request.

## 💡 Challenges & Lessons Learned

### Failure to launch is nothing to be ashamed of

Like I mentioned, we failed to launch War Room at the end of February because of a broken deployment and lack of polish on the final product. I avoided writing this post because I was embarrassed that we didn't launch a product that I'm proud of. That said, the process of _trying_ to build a product that I'm proud of taught me a lot! Technically, I got way better at building APIs, components and modeling data. Personally, it has brought me closer to my partner because we had honest conversations about our goals for [12 products](https://www.12products.xyz/) and our dreams of ultimately launching something in the future that users will love. It was a risk trying to build a B2B SaaS tool in 30 days and it was disappointing when we failed. But we did create something and we are on our way to making bigger dreams a reality!

### Don't be afraid of errors

Pretty much every day I'm greeted with a long stack trace error and blaring red console warnings. In my first month of coding, I was constantly scared that my brain would completely shut down because I didn't know what to do. I thought errors meant I was stupid and not good enough to be coding.

Getting straight As in school taught me that a letter defined my intelligence and ultimately my self worth. But in development, I don't think a single developer, no matter how experienced, goes a day without being stumped by some code.

There was a particularly nasty that assaulted me while working on War Room. Rather than freezing, I read the error. I followed the stack trace that identified the line of code that was throwing the exception. It was related to a library I had in my `node_modules`. I traced the bread crumbs to the root of the issue. I was so happy when I finally resolved the error, grateful for what I learned about my code and the interaction it had with the library's code. Not only that, I gained some confidence in my debugging abilities.

There is no reason to be afraid of errors or making mistakes. They can be our friends!

![picture 2](/assets/projects/warroom/stackError.png)

Check out [12product's Github](https://github.com/12products) for all our _open source_ code and our [Twitch channel](https://www.twitch.tv/12products) to follow along!

For March, we've started to build a journal for your terminal!
