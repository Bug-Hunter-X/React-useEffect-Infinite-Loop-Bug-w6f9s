# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications: an infinite loop caused by improperly using the `useEffect` hook.

## Description

The `bug.js` file contains a component that uses `useEffect` to update its state. The problem is that the state update (`setCount(count + 1)`) is performed within the `useEffect`'s dependency array, causing it to run continuously.

## Solution

The `bugSolution.js` file shows how to correctly use `useEffect` to avoid this infinite loop by removing the unnecessary dependency on the updated state.

## How to reproduce the bug
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the console for warnings about an infinite loop and the counter rapidly increasing.
