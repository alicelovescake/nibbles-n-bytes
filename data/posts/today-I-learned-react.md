---
title: "Today I Learned (TIL): React Hooks & Context"
excerpt: "Interesting bits & bytes I learned about React Hooks & Context"
coverImage: "/assets/blog/react/cover.png"
date: "2020-05-08"
ogImage:
  url: "/assets/blog/react/cover.png"
---

How can we build front end apps as fast and flexible as Spiderman? 🕸️

## What is React?

[React](https://reactjs.org/) is a JavaScript library for building user interfaces. Ever since I started coding Frontend apps, React has come up again and again.

## What is cool about React?

One thing I love about React is the ability to build re-usable components. I can piece together components like lego blocks to build my final UI. What's neat is that these components are dynamic! I can pass not only logic but also data throughout my app to create interactive interfaces.

## What did I learn?

I've been following the [Tic Tac Toe](https://reactjs.org/tutorial/tutorial.html) tutorial and learned quiet a few neat tricks about React!
Don't look down on this simple game. It taught me a lot of techniques that are fundamentals to React.

Here are some highlights from what I learned today!

**1. useState is a React Hook! So is useEffect! And you can create your own!**

Hooks is a word that I've heard often but never understood what it meant. I've used useState and even useEffect many times, but I didn't realize they were hooks!

Hooks are simply reusable stateful behavior that can be called by different components. What is neat is I got to create my own custom hooks!

With the Tic Tac Toe game, there wasn't a need to reuse any stateful logic but if a system grows, it is better to abstract out and reuse that logic. I did it to practice making custom hooks and to make my code look cleaner.

It's quiet simple to create your own custom hook. You first create a folder to store all your hooks. Make sure the function name starts with `useHook`. The Hook can be replaced by whatever you want your hook to be called.

A key mistake I made was assuming you can reuse the state itself! No! Each call to a hook has a completely isolated state, like a new instance that starts from the initial null value you pass it. For example, I thought by calling the same custom hook in different components for Square and Board, that I could retain the state of the Board. No wonder why my board didn't change! 🤦‍♀️

### TIL: Hooks are a way to reuse stateful logic, not state itself

**2. You never modify the state directly!**

Like I mentioned, useState is a hook and I can call it in any component. For instance, I can call `useState` and destructure the return values into a current state value and a function that lets you update it. It's like having local variables. I like it because I can call it multiple times to manage multiple state variables. For the Tic Tac Toe game, I used `useState` to manage the board. I gave it a null value of a multi-dimensional array. But whenever, I make a move on the board, and I need to update the board with an "X" or "O", I cannot modify my current board array directly! Rather, I should use `splice(0)` to create a new board to modify, then call `setBoard` with the new board. Interesting!

I learned in React, immutability is important for several reasons:

a. You have a history of actions that you can redo and undo.

b. Easier for React to detect changes when it can compare an immutable object that is referenced to the previous one that has changed. Once React detect changes, it knows when a component needs re-rendering. That is the beauty of React right? It only updates what's necessary!

### TIL: Change your data without mutation!

**3. Best way to avoid prop drilling?**

Remember that React allows me to pass data throughout my components to create interactive UIs?

The standard way if you want 2 child components to communicate with each other, you declare the shared state in their parent component. The parent component can pass the state back down to the children by using props... which keeps everyone in sync.

Butttt, what if you have like 50 components? Passing props through every one was be a pain, especially when the intermediary components don't even use the data. This is what some developers refer as [prop drilling](https://kentcdodds.com/blog/prop-drilling).

_Is there a better way?_

Say hello to [React Context](https://reactjs.org/docs/context.html)! This is a hook that provides a way to pass data through the component tree without having to pass props down manually at every level. It's kinda like having global variables. But should you put every state into context and thereby making it global? Is this the best way to scale?

Some problems I've discovered with React Context is that when the provider gets a new value, all the components that consume that value are updated and have to render, even if it's a function component that only cares about part of the data. React can't do its job if it has to re-render everything every time... especially if we just change a simple state like if a modal is open.

_Is there a better way?_

Say hello to [function composition](https://www.youtube.com/watch?v=3XaXKiXtNjw)! React is fundamentally about composition. We can pass data without fancy hooks like context and simply just stick with the fundamentals: state and props. This is probably the best way to increase the flexibility of the component AND making it explicit (see note below).

Note: Prop drilling is not completely bad because it allows the developer to explicitly track where values are being used and update accordingly if need. With global variables, you don't know where the data is initialized, updated, and used. If you are on a scavenger hunt, wouldn't you want a map than go blind?

### TIL: Prop drilling can be a good thing, and it can be a bad thing. Consider the pros and cons of each approach to build flexible, explicit, and scalable components!

**4. React needs a `key` prop every time you map over an array.**

The console is often mad at me, even more than my mother. This time, the console blared red warnings about a missing key prop. What the heck is that?

The Tic Tac Toe tutorial doesn't use map to build out its board. But I did because I wanted to make my board's rows and columns to be dynamic. The `key` prop, as I learned, is used to identify which items have changed, added or removed. If we don't use it, and we remove items of a list on the DOM, react can get confused which element is which.

The lesson is that I should always choose a string that uniquely identifies that particular item that I'm mapping through. Choosing just the index is not a good idea because index might change when you add/remove. What is also interesting is that the `key` prop allows you to return the exact same element type but force React to unmount the previous instance and mount the new one so that the component can be reinitialized. Usually, React doesn't touch those components/DOM nodes if it's the same element types which is one way React optimizes re-renders.

Now I don't need to have nightmares about angry `key` props!

### TIL: Annoying errors on React helps me avoid bugs. The key prop is especially useful for controlling React component and element instances.

I learn something new every day with coding. Sometimes (ok most of the time) I feel like pulling my hair out. But when the lightbulb turns on, it's the greatest feeling ever!

What did you learn today? Let me know!
