const keys = {
  37: 1, 38: 1, 39: 1, 40: 1,
};
var element  = document.getElementById("app");
function preventDefault(e) {
  e = e || element.event;
  if (e.preventDefault) { e.preventDefault(); }
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

function disableScroll() {
  if (element.addEventListener) // older FF
  { element.addEventListener('DOMMouseScroll', preventDefault, false); }
    element.onwheel = preventDefault; // modern standard
    element.onmousewheel = element.onmousewheel = preventDefault; // older browsers, IE
    element.ontouchmove = preventDefault; // mobile
    document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
  if (element.removeEventListener) { element.removeEventListener('DOMMouseScroll', preventDefault, false); }
    element.onmousewheel =element.onmousewheel = null;
    element.onwheel = null;
    element.ontouchmove = null;
  document.onkeydown = null;
}

export {enableScroll, disableScroll}