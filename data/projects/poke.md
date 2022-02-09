---
title: "Poke"
excerpt: "A fresh take on reminders. Ready to get poked?"
coverImage: "/assets/projects/poke/cover2.png"
date: "2022-02-07"
ogImage:
  url: "/assets/projects/poke/cover2.png"
---

Albert Einstein once said time is an illusion. I'll tell you what, time sure feels real when you need to launch a product within 30 days!

This week, I'm excited to release Poke to the [Apple App Store](https://apps.apple.com/ca/app/poke/id1607699386)! It's the first product my partner and I've created on our quest to build [12 products in 12 months](https://alicezhao.com/posts/12-products).

Here's a recap and lessons I learned along the way.

## 👷‍♀️ What did we build?

Check out the demo!

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/ee690b6aec284a2f9a571023e2f754c2?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## 🔨 How did we build it?

### Frontend

> [Expo](https://expo.dev/): A free and open source framework for making universal React applications

**Fast development:** We didn't need to do any native mobile coding using Swift or Java. In the end, we did have to use [Xcode](https://developer.apple.com/xcode/) to launch to the Apple store but Expo gave us all the tools and APIs to quickly build and deploy our React Native app.

> [React Native](https://reactnative.dev/): Written in JavaScript, rendered with native code, a framework to develop mobile apps

**Developer productivity**: I loved being able to take advantage of all the productivity features in React Native. Everything from hot reloading to composable [core components](https://reactnative.dev/docs/components-and-apis), it all made it easier to iterate fast using syntax I was already familiar with.

> [Flipper](https://fbflipper.com/): Extensible mobile app debugger

**Easy to use**: Which developer writes perfect code? Not me. I was able to test my assumptions and view errors with Flipper's log viewer, React dev tools and network inspector.

### Backend

> [Nest JS](https://nestjs.com/): A progressive Node.js framework for building scalable server-side applications

**Flexible yet rigid**: Nest's opinionated structure, code generators, and CLI saved us a lot of time in setting up our APIs. Yet it was flexible enough for us to integrate with our custom auth provider and create unique decorators.

> [Supabase](https://supabase.com/): The open source Firebase alternative

**Up and running in no time**: I never imagined that I can set up auth and a database with a few lines of code. Supabase is not perfect, but it was so easy to get a relational Postgres database running and auth that generated JWT tokens.

> [Twilio](https://www.twilio.com/): Communication APIs for SMS, Voice, Video

**Good documentation**: Poke would not be possible without Twilio. Their documentation gave me great examples to integrate with their API to text users reminders and also hooks up with Supabase for text-based auth!

## 💡 Challenges & Lessons Learned

### Building in Public is scary but fun!

Building in public makes me feel very self conscious. Not only am I struggling to solve a bug on my own but people are watching me as I do it. Every Sunday at 12 pm PST, my partner and I [stream on Twitch](https://www.twitch.tv/12products), alternating who codes each time.

During one of the streams where I was coding, 78 people viewed me stumble my way through building a screen to create reminders and 2 hours later fist pumping the air when it worked. Although I was hesitant to code in public as a beginner, I learned to have fun and meet a supportive community along the way!

### Copying Code !== Cheating

I found a great [YouTube tutorial](https://www.youtube.com/channel/UCMCcqbJpyL3LAv3PJeYz2bg) that walked through how to build your first React Native app. As I followed along, I suddenly felt shame in copying some of the code in the video. Am I really practicing to become a good engineer if I don't write original code? Am I taking shortcuts by taking someone else's code?

At the end of the day, I'm incredibly grateful for the plethora of online resources to enable developers to be successful. Yes, I've copied code from tutorials and gotten answers from StackOverflow, but I'm also building and learning along the way. So maybe copying code is not cheating, it is part of learning!

### Do to Learn

There are so many buzzwords in technical documentation that I can read something 100 times and still not understand. Take for example a simple term we've all heard of:

> API: application programming interface that is a set of protocols that adhere to HTTP and REST standards for building and integrating application software.

If you were me, you would be thinking - what the hell is an interface? How does a protocol work? What is the difference between REST and HTTP? What does an application software look like?

What I learned is that you have to _do_ to learn. You have to throw yourself to the unknown and face the problems head on to actually understand the tools and concepts. Coding is _not_ something you learn in a textbook or watch in a tutorial. Coding is something you learn by hacking and getting out of your comfort zone. Trying all these new tools building Poke this month has helped me grow a ton!

Check out [12product's Github](https://github.com/12products) for all our _open source_ code and our [website](https://www.12products.xyz/) to follow along. You might get a sneak peak into our February product!
