# This, Call, Bind, Apply

- Execution Context
- strict mode
- `this`, call, bind, apply
- arrow functions

## Scope

space available for variables - where is this variable defined?

what will this name evaluate to?

## Execution Context

`this`

## this

1. `this` - defaults to window
2. whatever is on the left of the `.` in a function call
3. whatever is our argument to `bind`
   no way to tell what a function is bound to
   bind can only be used once
   once it's bound, it can't be unbound!!
4. `call` - bind and invoke (lets us choose our context)
   `apply` - bind and invoke
