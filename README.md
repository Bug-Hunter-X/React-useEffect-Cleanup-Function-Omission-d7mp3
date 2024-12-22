# React useEffect Cleanup Function Omission

This example demonstrates a common error in React's `useEffect` hook: forgetting to include a cleanup function to remove event listeners or other side effects when the component unmounts. This can result in memory leaks and unexpected behavior.

## Bug
The `bug.js` file showcases the problem. The `useEffect` hook adds an event listener but doesn't remove it when the component is unmounted, leading to a memory leak.

## Solution
The `bugSolution.js` file presents the corrected code.  A cleanup function is returned from `useEffect` to remove the event listener when the component is unmounted, preventing memory leaks.

## How to Reproduce
1. Clone this repository.
2. Navigate to the relevant file (`bug.js`).
3. Observe the console or memory usage in a browser's developer tools to see the effect of the unhandled event listener. Then, compare to the behavior of `bugSolution.js`.