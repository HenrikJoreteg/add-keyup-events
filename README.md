# add-keyup-events

Takes an element, usually an `<input>` or `<textarea>` and registers a `keyup` handler on it that emits named events for special keys. It does `enter` and `esc` events by default.

You can override the events by passing an optional second argument that follows the format: `{keyvalue: 'customEventName'}`.

## installing

```
npm install add-keyup-events
```

## using

```js
var addKeyupEvents = require('add-keyup-events');


// some input
var input = document.create('input');

// pass it our input
addKeyupEvents(input);

// Now we can listen for "enter" and "esc" events using the
// normal `addEventListener` the browser gives us.
input.addEventListener('enter', doSomething, false);
```

You can also override the events to listen for whatever you want.

```js
// some input
var input = document.create('input');

// create a custom hash of keycode to event name mappings:
var customEvents = {
    65: 'a',
    12: 'enter'
};

// pass it our input, and our custom events
addKeyupEvents(input, customEvents);

// now we can listen for 'a' events and 'enter' events
input.addEventListener('a', doSomething, false);
```

## credits

If you like this, follow [@HenrikJoreteg](http://twitter.com/henrikjoreteg) on twitter and check out my book: [Human JavaScript](http://humanjavascript.com).

## license

MIT
