---
title: "Today I Learned (TIL): From Java land to C++"
excerpt: "Interesting bits & bytes I'm learning about C++"
coverImage: "/assets/blog/c++/cover.jpeg"
date: "2021-05-10"
ogImage:
  url: "/assets/blog/c++/cover.jpeg"
---

Hello Summer! The sun is out, the days are getting longer... it's the best time to take a course on Algorithms and Data Structures! Yipeeee!

In all seriousness, I am really excited about [this class](https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPSC&course=221). I get to learn C++, a new language. Since I just learned Java, I wanted to share cool new things I'm exploring with C++.

It's like meeting a new friend! 🧑🏻‍🤝‍🧑🏽

## What is C++?

C++ is a widely used programming language created by [Bjarne Stroustrup](https://www.stroustrup.com/C++.html) in 1979. It supports [data abstraction](https://www.stroustrup.com/bs_faq.html#class), [object-oriented programing](https://www.stroustrup.com/bs_faq.html#oop), and [generic programming](https://www.stroustrup.com/bs_faq.html#generic).

## TIL: C++ explicitly allocate and deallocates memory

There are 2 large chunks of memory: 1. the stack. 2. the heap. I'm more familiar with stacks than heaps. I learned that the stack is actually system administered. The system keeps track of the lifecycle of my variables, largely by the scoping mechanism.

I've always taken the stack for granted because I never had to explicitly tell it that I'm done using a particular memory location. The system just handles it for me. Imagine the stack is your favorite restaurant and you just stand up and leave after you're done with your food! With stacks, that's ok because your bill just get magically settled.

Heaps, on the other hand, is memory that you have to ask for programmatically using the `new` keyword. This keyword calls a C++ function that returns a heap chunk of memory. Usually, the only way to access this memory location is via a pointer that is stored on the stack.

Isn't always better for our food bill to be magically settled when we leave the restaurant?! There will be instances we want memory to be persistent, and live outside the scope of a single function. That's when we use heaps. But we have to remember to de-allocate the memory when we are done with it! Or else the boogie man will come for you....

Just kidding, you will get a [memory leak.](https://en.wikipedia.org/wiki/Memory_leak#:~:text=In%20computer%20science%2C%20a%20memory,accessed%20by%20the%20running%20code.) When you remove all references to heap memory before explicitly deleting, then no one can access this piece of memory. If that happens a lot, then performance degrades and it leads to [memory fragmentation.](<https://en.wikipedia.org/wiki/Fragmentation_(computing)>)

In general, stacks are faster and you don't have to worry about allocating or de-allocating memory. But the memory on stacks is also limited in both space and scope, so that is when you consider heaps!

## TIL: Pointers

I use pointers a lot when I'm solving algorithms with Javascript. C++ elevates pointers to a whole new level!

Since we have access to memory addresses in C++, pointers can be used to pass around that access to different chunks of memory.

The CLang compiler is a funny machine. Even when you delete the value of a pointer, all the pointers that reference the same value, might still return the previously deleted value! I learned that I always have to reassign the value of all references (i.e `p = NULL`)

There are 2 ways to assign a pointer to a target value: 1. `p = &x;` where x is any variable storing a value 2. `p = new int;` p is assigned to unnamed heap value

The thing I don't like about C++ so far is that the compiler doesn't tell you when you've made a mistake and it's inconsistent in showing the right errors. For example, if you initialize a pointer p `int * p;` then assign p like so `*p = 37;` This should show a segmentation fault during compile time but shows up as a runtime error.

Overall, pointers are useful because they are small so passing by value into function is fast. We can also change the object inside the function and that will reflect after the function finishes executing. But it increases the complexity and likelihood of errors if you forget to dereference.

I'm day 1 of my course and lots to learn. Stay tuned!
