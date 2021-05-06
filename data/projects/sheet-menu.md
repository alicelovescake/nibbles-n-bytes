---
title: "SheetMenu"
excerpt: "Helping restaurants deploy professional websites in under fifteen minutes"
coverImage: "/assets/projects/sheet-menu/cover.png"
date: "2021-05-01"
ogImage:
  url: "/assets/projects/sheet-menu/cover.png"
---

I'm really excited about this new open source project I'm currently working on!

I’ve noticed that my favorite local restaurants have dated, clunky web pages. In order to help restaurant owners focus on what matters (their restaurants), I set out to build a modern web app with Redwood JS and the JAMstack. It enables anyone to easily create professional looking websites for their restaurants in under 15 minutes. And they do it with tools that they are already familiar with - Google Sheets!

To help small restaurants grow and market themselves ([Viet food anyone?](https://www.thevietnoodleguy.ca/)), I want SheetMenu to be a one stop shop to improve their online presence.

Future features I want to build include:

- analytics for owners to get instant insights on their visitors
- a variety of professional designs that represent their brand
- DoorDash and Uber Eats integrations!

Check out the [code I have so far on Github](https://github.com/alicelovescake/sheetmenu)

**Technical challenges?**

I've started to document my challenges in a dev journal. It helps me deeply reflect on the problems I'm solving. It's also a great place for me to look back on what I've accomplished so far. Coding is HARD. We need to celebrate every step of the way.

Here we go....

## Challenge 1: Who knew full stack means 100 different tools you have to learn?

This is the first project where I'm not just working on the frontend. I'm using [RedwoodJS](https://redwoodjs.com/) as a framework. Built on React, GraphQL, and Prisma, Redwood makes the development workflow a lot easier for a newbie like me. That said, it's still hard!

I was completely confused between SDL files (which defines the GraphQL object, query, mutation types and thus interface of API) and SERVICE files (which has business logic that is normally in resolver files and tells Apollo how to map them to SDL). Learning how Redwood work with data is helping me appreciate the importance of organization and abstraction to create a system that is flexible and scalable!

## Lessons!

1. Keep push forward, even when you hit a wall. Keep building.

   Every technical detail feels like an alien language. What the heck is an API? I'm building frontend before knowing the difference between a div and span tag. I'm hooking up to Google API before even knowing any protocols of an API. I'm querying and mutating with GraphQL while still making mistakes with de-structuring objects. That said, doing is the best way to learning.

2. Time is in the eye of the beholder

   I get frustrated with myself on the time it takes for me to complete what seems like a tiny feature. What seems simple on the outside can be incredibly complicated underneath the hood. Patience is a virtue right? I have to give myself the time to learn.

3. Embrace the suck

   Redwood has great documentation and tutorials. Reading the docs the first time didn't make sense, nor did the 10th time. It only started making sense when I started coding. Struggling to create my own Sheet service showed me that I don't have to make each function in my service available via GraphQL, that they are just Javascript functions that I can use from another service and used to communicate with Google API. After multiple errors on the server I learned that functions in Query and Mutation types are what is exposed in the Frontend. I learned the difference between Input and types in GraphQL schema. After overcoming problems as I am coding, reading the docs makes a lot more sense now!

## Challenge 2: External APIs Not Always Straightforward to Work With

SheetMenu's core differentiator is that a Google Sheet will be auto-generated upon account creation and owners can modify the Sheet whenever they want anything changed on their menu.

That means I have to hook up [Google's API](https://console.developers.google.com)!

Am I naive to expect a top tech company like Google to have great documentation? I was wrong, very wrong. I hit a roadblock upon discovery that Sheets API didn't allow for charing or changing permissions on Sheets, which is exactly what I needed to do.

## Lessons!

1. [StackOverFlow](https://stackoverflow.com/) is my friend,everyone's friend really. Search error messages and key words. Chances are, someone has tried to solve the same issue.

For me, after banging my head against the wall a few times, I found out Google _Sheets_ API doesn't allow to change permission but Google _Drive_ API does.

2. Break tasks down to the simplest parts. Spend 5-10 minutes testing out a small proof of concept rather than days trying to figure out all to do the whole thing

Redwood didn't allow me to add scope to auth provider, so I can't use API key to authenticate Google Drive. But I tried a new way to authenticate by creating Service Provider account instead. Wasn't sure if it will work but trying it out proved to be feasible option and avoided having to go through PR process with Redwood.

3. Store private keys in .env files and parse it for use at runtime

Common rookie mistake, right? Learned that .env files do not get pushed to Github so probably a secure place to put my API key.

This is just a small snapshot of everything I've learned thus far. I'm proud that I'm using the full Git workflow to create branches, push, create pull request, have my partner review it, and merge to main.

Stay tuned for more updates and mistakes from me!
