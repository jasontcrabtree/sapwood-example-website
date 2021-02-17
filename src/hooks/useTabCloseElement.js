/*   const handleTabKey = (e) => {
  const focusableModalElements = dropdownRefTwo.current.querySelectorAll(
    'button'
  );
  const firstElement = focusableModalElements[0];
  const lastElement =
    focusableModalElements[focusableModalElements.length - 1];

  if (!e.shiftKey && document.activeElement !== firstElement) {
    firstElement.focus();
    return e.preventDefault();
  }

  if (e.shiftKey && document.activeElement !== lastElement) {
    lastElement.focus();
    e.preventDefault();
  }
}; */

// const keyListenersMap = new Map([
//   [26, onLeave],
//   [9, handleTabKey],
// ]);

// function keyListenerBig(e) {
//   console.log('1');
//   // get the listener corresponding to the pressed key
//   const listener = keyListenersMap.get(e.keyCode);
//   // call the listener if it exists
//   return listener && listener(e);
// }

// document.addEventListener('keydown', keyListenerBig);
