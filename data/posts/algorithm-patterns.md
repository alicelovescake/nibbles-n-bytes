---
title: "Today I Learned (TIL): Algorithm Patterns"
excerpt: "Interesting bits & bytes I'm learning about hard algorithm problems that make me think! "
coverImage: "/assets/blog/algorithm-patterns/cover.jpg"
date: "2021-07-21"
ogImage:
  url: "/assets/blog/algorithm-patterns/cover.jpg"
---

Like many aspiring software engineers, I've been practicing data structures and algorithms in hopes of "cracking the coding interview".

From hacking on so many problems using platforms like [BinarySearch](https://binarysearch.com/) and [AlgoExpert](https://www.algoexpert.io/product), I've come to a point where I want to document [common patterns](https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed). With these patterns, I'm hoping to build a better mental model so that I can solve problems faster. 

# Pattern 1: Sliding Window

## Code sniff  
- Problems dealing with linear data structures like *Array or LinkedList or String*
- Find *contiguous* subarrays or sublists of a given size

## Example
- Given an array, find the average of all contiguous subarrays of size "K" in it

## Strategy
**Brute Force**
- For every element of the input, find the next k elements. 
- Time Complexity: O(N * K)
- Inefficiency: Recalculating/traversing overlapped portion

### Can we do better?
**Sliding Window Approach**
  - Visualize each contiguous subarray as a sliding window of size K. 
  - We slide window by one element when we move on to the next subarray. 
  - To re-use the sum from previous subarray, we subtract the element going out of window and add element now being included in sliding window.
  - If our window is dynamic, have an internal while loop to shrink window until we hit the desired length
  - Time Complexity: O(N)
  - Initialize: `windowStart = 0` and  `windowEnd = iterator in for loop` 
  - Slide window: `accumulator -= arr[windowStart]` and `windowStart++`
  
