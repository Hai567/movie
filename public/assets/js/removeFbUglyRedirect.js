// Remove the ugly Facebook appended hash
// <https://github.com/jaredhanson/passport-facebook/issues/12>
if (window.location.hash === "#_=_" && window.location.hash === "#_=_") {
  if (window.history && history.pushState) {
    window.history.pushState("", document.title, window.location.pathname);
  } else {
    // Prevent scrolling by storing the page's current scroll offset
    var scroll = {
      top: document.body.scrollTop,
      left: document.body.scrollLeft
    };
    window.location.hash = "";
    // Restore the scroll offset, should be flicker free
    document.body.scrollTop = scroll.top;
    document.body.scrollLeft = scroll.left;
  }
}