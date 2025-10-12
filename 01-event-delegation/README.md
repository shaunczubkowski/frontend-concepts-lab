# Event delegation — bubbling vs capturing

## Summary

**Event delegation** is a technique where a single event listener is attached to a parent (or ancestor) element to handle events that originate from its child elements. Instead of attaching many listeners to many children, you attach one and use the event object to determine which child triggered it.

## Event flow: capturing vs bubbling

- **Capturing phase**: Event goes top → down (ancestor → target). Rarely used directly; in `addEventListener` you can pass `{ capture: true }`.

- **At-target phase**: The event reaches the target element.

- **Bubbling phase**: Event travels back up target → top (target → ancestors). By default, event listeners listen during the bubbling phase (`capture: false`).

`event.target` = original element that triggered the event  
`this` (or `event.currentTarget`) = element whose listener is currently running

## When to use delegation

- Lots of similar child nodes (lists, tables, grids)
- Dynamic children added/removed after initial render
- Performance/simplicity: fewer listeners in memory
