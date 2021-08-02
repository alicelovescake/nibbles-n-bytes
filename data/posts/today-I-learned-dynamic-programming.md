---
title: "Today I Learned (TIL): Dynamic Programming"
excerpt: "Interesting bits & bytes I'm learning about breaking big hard problems into smaller pieces! "
coverImage: "/assets/blog/dynamic-programming/cover.png"
date: "2021-07-29"
ogImage:
  url: "/assets/blog/dynamic-programming/cover.png"
---

There are 2 words that send shiver down a programmer's spine: [Dynamic Programming](http://en.wikipedia.org/wiki/Dynamic_programming). 

[Did you know](https://www.quora.com/Why-is-dynamic-programming-called-dynamic-programming) the name was picked by researcher Dr. Richard Bellman to sound cool so he can get funding?

Here is what I learned today about DP!

## Code sniff 
1. Optimization problems: shortest/longest, minimized/maximized, least/most, etc
  
2. Can the problem can be broken down into a collection of simpler subproblems?
- Divide and Conquer approach: Divide problem into a *small* number of *disjoint* subproblems
- DP: Divide problem into *many* potential *overlapping* subproblems and storing the solution to save computation time. 
  

## Example
There are `n` step staircase. To climb it, you can take either *one* or *two* steps at a time. How many different ways is it possible to reach the top?

## Strategy

### Step 1: Identify problem variables. 
To achieve the goal, what are all the options to consider at each step?
What parameters are changing at each subproblem?
- **Staircase P:** 1 changing parameter: `n`: number of stairs. Option to take 1 step or 2 steps. 

### Step 2: Identify subproblems. 
Typical scenarios are:
- If problem involves array/ matrices, subproblems would be array of smaller sizes: `A[0 ... i-1]` as it relates to `A[0 ... i]` 
- If a problem involves a discrete quantity[i.e number of items, amt of money rounded to dollar, weight rounded to kg]: subproblems for 5 item set: look for solutions for sets of 4, 3, 2, 1, 0 items
  
- **Staircase P:** The number of steps is a discrete quantity. A smaller problem is knowing the number of different ways to go to top of `n - 1` and `n - 2` staircase.

### Step 3: Identify base cases
A base case is a subproblem that doesn't depend on other subproblems: hit a constraint or edge case.
- **Staircase P:** When the stairs given is 1 or 2

### Step 4: Determine how subproblem relate to the main problem: **Recurrence relation**. 
- Based on step 2 and 3 and assuming you have computed the subproblems, how would you compute the main problem?
- **Staircase P:** 
  - `Stairs[1] = 1`
  - `Stairs[2] = 2`
  - `Stairs[n] = Stairs[n - 2] + Stairs[n - 1]`


### Step 5: Determine time complexity
- Count the number of states: this depends on number of changing parameters
- Think about work done at each state. If everything else but one state has been computed, how much work do you compute that last state?
- **Staircase P:** States: n Work: O(1)

### How can we implement?
Approach 1: Recursion (Top down)

Approach 2: Add memoization. 

This can greatly speed up our recursion. It stores the results of expensive function calls and return the cached result. 
1. Initiate an object to act as memo: add optional parameter 
2. Store function result into memory before *every return statement*
3. Look up the memory for the function result before you start doing any other computation. 

Approach 3: Dynamic Programming (Bottom Up)

Approach 4: Pointers/ Iterative: If recurrence is only based on previous few subproblems, you can use pointers to store these variables. Else you have to keep track with an entire array. 


[Check out](today-I-learned-algorithm-patterns.md) other algo patterns I've learned! 

