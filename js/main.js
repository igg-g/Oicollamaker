'use strict';

{
  const outputs = document.querySelectorAll('.output');
  
  for (let i = 0; i < outputs.length; i++) {
    const form = document.querySelector('form');
    const input = document.createElement('input');

    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', outputs[i].textContent);
    input.addEventListener('input', e => {
      outputs[i].textContent = e.target.value;
    })

    form.appendChild(input);
  }
  
  function getImg() {
    html2canvas(document.getElementById('pkg')).then(canvas => {
      document.body.appendChild(canvas);
    });
  }

  document.querySelector('.get-img').addEventListener('click', getImg);
}