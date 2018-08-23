# Intro to Redux

## Objectives

- Review key redux concepts
- Implement a basic redux store
- Demonstrate how store makes refactoring easier

## Redux

* https://gist.github.com/alexgriff/0e247dee73e9125177d9c04cec159cc6
* https://redux.js.org/basics/actions

### Store

- Where all of your redux state lives
- Created with a `reducer`
- Uses the reducer to update the state every time an action is dispatched

Methods:
 - getState: returns the current state of the store
 - dispatch: send an action to the store, reducer will use to update the store

### Reducers
- function to decide how to update the state
- state, action -> state

- should not mutate the old state!
- should be pure functions!
- dispatch is asynchronous (doesn't happen immediately)

Why pure, (non-mutating)?
- reduce possibility of errors
- might want to go back to the old state
- like setState, might want to compare the old state and the new state (i.e. to check whether it changed)

### Actions

Required!
Object with a property 'type' that is a string

also can have other data - the `payload`  - that you want in the action!

## Problems

How do we structure the store?
- Does it get its own file?
- What about the Reducer?

One giant reducer function
  - super messy
  - we want to separate it into smaller pieces

Component does not rerender when store state is updated
  - it would be cool if store state was a prop to our component
  - like to remove our bad hack
