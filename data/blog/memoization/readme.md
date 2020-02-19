---
name: 'memoization'
title: Memoization
year: 17 February 2020
color: '#0083aa'
id: 'memoization-blog'
author: 'evanb54'
published: true
description: |
  A quick overview of the memoization approach to functional optimisation in Javascript.
---

In a nutshell Memoization is the programmatic practice of making long, recursive, iterative functions much faster. How you might ask, simply by caching the values the function returns after its initial execution.

Lets imagine a function that is the longest running addition that we can imagine. 

```javascript
const inefficentSquare = number => {
  let total = 0;
  for ( let i = 0; i < number; ++i) {
    for (let j = 0; j < number; ++j) {
      total++;
    }
  }
  return total;
};

const start = new Date();
console.warn(inefficentSquare(40000));
console.log(new Date() - start);
```

In this function we are taking some number into  it which will then loop over the number twice ( squaring it ) and then return the total value at the end. Running this locally I can see the time output to be 1609ms.
If we imagine 100 users trying to square 40k every second this time will start to add up, 1.6 by 100 users equates to 2.6 minutes.

But what if there were some way that we could store the previously gotten values with an in memory cache. 

Enter Memoization.

```javascript

const memoize = func => {
  const cache = {};
  return (...args) => {
    if (!cache[args]) {
      cache[args] = func(...args);
      return cache[args];
    }
    return cache[args];
  }
}
```

The memoize function is quite simple. It takes a function as an argument, and returns an anonymous function into which we can pass our arguments.
By leveraging Javascript closures we can maintain a cache which will allow us to quickly find the values we are looking for based on a cached key that we create with the functions arguments.
We can wrap our initial function in this function in order to see the full effect of the memoization optimizations on our code. Below are some of the values that have been outputted testing this method.

```javascript
const memoize = func => {
  const cache = {};
  return (...args) => {
    if (!cache[args]) {
      cache[args] = func(...args);
      return cache[args];
    }
    return cache[args];
  }
}

const inefficentSquare = memoize(number => {
  let total = 0;
  for ( let i = 0; i < number; ++i) {
    for (let j = 0; j < number; ++j) {
      total++;
    }
  }
  return total;
});

const start = new Date();
console.warn(inefficentSquare(4000));
console.log(new Date() - start);


const start2 = new Date();
console.warn(inefficentSquare(4000));
console.log(new Date() - start2); 

```
