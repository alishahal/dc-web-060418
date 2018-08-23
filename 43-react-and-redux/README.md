# React-Redux

## Objectives

- Walk through implementing the redux and react-redux libraries
- Learn how to set up the boilerplate of react-redux with Provider
- Use state inside the redux store in a component with connect and mapStateToProps
- Convert a function passed down as a prop to a child component into an action passed in through mapDispatchToProps

## Problems

What is the best place to call the dispatch with the initial action?
(When / in what file should we create the store?)

How do we structure the store?
- Does it get its own file?
- What about the Reducer?

One giant reducer function
  - super messy
  - we want to separate it into smaller pieces

Component does not rerender when store state is updated
  - it would be cool if store state was a prop to our component
  - like to remove our bad hack

  - removed with `connect`

## Provider

a react component!

## Connect

```
RouterConnectedHeader = withRouter(Header)
// in your header
this.props.location
this.props.history
```

```
howToConnect = connect(mapStateToProps, mapDispatchToProps, {})
howToConnect(Header) // possible
howToConnect(Other)
```


## Conventions

Move logic out of components

## combineReducers
