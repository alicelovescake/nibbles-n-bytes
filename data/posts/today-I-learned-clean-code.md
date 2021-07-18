---
title: "Today I Learned (TIL): Clean code"
excerpt: "Interesting bits & bytes I'm learning about how to write more maintainable code"
coverImage: "/assets/blog/clean-code/cover.jpg"
date: "2021-07-17"
ogImage:
  url: "/assets/blog/object/cover.jpg"
---

Building [SheetMenu](../projects/sheet-menu) has been a long and steady process. I just finished pulling restaurant data from Google Sheets. I use this data to display the restaurant's menu on their very own page!

Whether users feels like **Umami Michelin** represents their style or **Spicy Modern** is the revamp they were looking for, templates and themes are now available. What's super cool is that their restaurant data dynamically updates based on the theme they select and whatever data they've input into their Google Sheet.

So time to move on to hooking up Stripe for payments right??

Well... hold on, before I immediately move on to the next feature, I took a bit of time to look at the code I've written. 

# More money, more problems

Quick story time: Last year at this time, I was a consultant working with high tech companies to implement large scale software projects. You know the unicorn companies often in the news getting millions in funding? They have completely dysfunctional teams! I discovered companies I admired had a ton of problems, particularly with technical debt. The story was always the same: 

- Startup x had to build and iterate fast after product market fit 
- Software engineer turnover and speed of growth meant shortcuts and spaghetti code 
- Business teams want new features that make more money
- Technical teams frustrated, knowing that any small change might break everything 
- Result: Silos, animosity between teams, money wasted, time wasted, competitors gain advantage, slow innovation 

I want to highlight my experiences because now being on the developer side, I see the importance of writing code that can be easily maintained, with a long term vision in mind. Code that is written for humans. Of course, I also understand from the business side the balance of making money and staying ahead of competition. 

That said, even though [SheetMenu](../projects/sheet-menu) is nothing compared to the codebase of multi-billion companies, I still want to make sure my code is clean. Build good habits early right?

# Today I learned how to write more maintainable code

After reviewing my code, I've made a few changes that I am proud of. Here are lessons I've learned:

### Create meaningful names.

Originally I created 2 new themes called `Theme1` and `Theme2` as separate components that imported other components like `MenuCard1`, `ContactCard2`. (Don't you wish you had creative naming skills like me?)

Not only do these names lack creativity, but they are completely meaningless and confusing when I'm saving it to my database. After refactoring I renamed `Theme1` to `Umami Michelin` and `Theme2` to `Spicy Modern`. Imagine as I build 10, 20, 30 templates, will I be able to keep track in my head what "Template42" represents? It also allowed me to [restructure the folder names](https://github.com/alicelovescake/sheetmenu/tree/main/web/src/components/SpicyModern) to my new theme names and organize my related components into the same folders. Now my imports are clear when it's from `./src/components/UmamiMichelin/MenuCard`. 


### DRY DRY DRY

Don't repeat yourself! I found that on my `ThemeSettings` page, I had a big chunk of code to display each theme for the user to select. After refactoring, I created a [new utils folder](https://github.com/alicelovescake/sheetmenu/blob/main/web/src/utils/themes.js) with all my theme related data. Specifically, I created a themes array with object elements that contained relevant information for each theme. Now, rather than repeating code, I map over my imported object and apply the same styling. Again, not a huge difference when I have 2 themes and can replicate my changes in 2 places. Imagine when I grow my selection. Plus it is easier to test new changes now that I only need to change a single place. 

Code organization makes a world of a difference. I now know exactly where all my theme data lives. My data is not tightly coupled, making it easy to add and delete. If I add a new theme, I only have to add to 1 place. It is easier for me to understand as much it will be for a new developer looking at my code. 

What's does the hare say to the tortoise? "Do you ever get anywhere?" 

I hope I'll finish soon! More importantly, I hope I'll keep learning! 🐢 🐢 🐢



