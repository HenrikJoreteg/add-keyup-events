// Takes an element, usually an <input> or <textarea>
// and registers a keyup handler on it. That emits named
// events for special keys. `enter` and `esc` events are
// added by default. But you can add whatever you want by
// passing an optional eventHash as the second argument.
// It should follow the format {keyvalue: 'customEventName'}
module.exports = function (element, eventHash) {
    var events = eventHash || {13: 'enter', 27: 'esc'};
    element.addEventListener('keyup.addKeyupEvents', function (e) {
        var eventName = events[e.which];
        var customEvent;
        if (eventName) {
            customEvent = document.createEvent('Event');
            customEvent.initEvent(eventName);
            element.dispatchEvent(customEvent);
        }
    }, false);
};
