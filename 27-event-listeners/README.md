# Event Listeners


## Review the Execution Stack, Event Queue, Event Loop
- example: setTimeout(function(){console.log("hello right away")}, 0)
- events are asynchronous

## .addEventListener on a DOM node
- takes in a string for the name of the event, and a callback function to be invoked when the event happens
- (optional) argument for the callback is the event itself
- event.preventDefault()

## Example of Events
- DOMContentLoaded
- click
- mouseover
- focus
- blur
- keydown
- submit

## When to add an event Listener
- on load of page?
- on creation of element?

## Practice
- When click of email -> send an email
- When click of submit -> add new instructor
- When click of row -> view profile

## Event bubbling vs. capturing, and propagation
- event.target: the innermost node that triggers the event
- event.target vs. event.currentTarget?
- a few events only capture and don't bubble (focus, blur)
- by default, event are fired during the bubbling phase
- event.stopPropagation()
