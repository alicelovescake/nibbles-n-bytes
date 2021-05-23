---
title: "Today I Learned (TIL): Object Oriented Design"
excerpt: "Interesting bits & bytes I'm learning about Object Oriented Design"
coverImage: "/assets/blog/object/cover.jpg"
date: "2021-04-15"
ogImage:
  url: "/assets/blog/object/cover.jpg"
---

There seems to be a debate that goes as far back as Red Sox or Yankees.

Object-oriented programming or functional programming? 

I'm no where experienced enough to discuss pros and cons of both. But I did just learn some basic principles of OOP!

Fun fact, these basic concepts popped up on an recent interview so it pays off to understand the fundamentals!


## TIL: Encapsulation

Encapsulation is a technique that hides inner details. Functions encapsulate behavior. Objects encapsulate data and behavior. Bundling  data and behavior in one nice little package in the form of a class gives us a lot of power!

Power? Tell me more!

  1. **Adds security to user data:** 
  
  You can remove direct access to important fields and attributes via encapsulation. If still want a user to read of update the value, you can define public getter and setter methods. This way, you control access and can validate the new value before changing the attribute!
  
  2. **Protect your money maker!** 
  
  If you have top secret business logic that is part of your IP, do you want the entire public to have access? Java, for instance, has [4 access modifiers](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html) that you can use to define the visibility of classes, methods, and attributes. Start with the most restrictive!

When I used Java, I just took this feature for granted!


## TIL: Inheritance

Classes can inherit properties and operations from other classes so you can reuse classes you have defined earlier for a related purpose by extending that implementation or making slight changes. 

For example, once you have a class for a generic bicycle, you can design a subclass for a road bike or mountain bike that inherits properties but adds more operations that are unique that that type of bike.

**TLDR: Classes can inherit properties from other classes**

## TIL: Polymorphism

Polymorphism literally means *many forms*. Inheritance confuses the compiler on which operation you need in a particular situation. But polymorphism saves the day by enabling this determination to be made at execution time. So it's ok that you create a pointer to a bike without the compiler knowing if you want to use the implementation in road or mountain bike. 

In Java, polymorphism kicks in when you instantiate a new bike object with the apparent type of bike and actual type of mountain. This tells the compiler you want to access the implementation details for mountain bike! 

**TLDR: Objects can determine appropriate operations at execution time**

That's it for now! 

One thing I love around programming concepts is that you can always go deeper and learn more. This is just the first layer of the onion! 

Red Sox for the win? 