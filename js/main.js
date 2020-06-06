'use strict';

{
  const foo = document.getElementById('foo');

  function updateValue(e) {
    const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height); //canvasのクリア

    ctx.font = 'bold 32px Verdana';
    ctx.fillText(e.target.value, 0, canvas.height / 2);
  }
  
  foo.addEventListener('input', updateValue);
}