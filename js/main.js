'use strict';

{
  const inputs = document.getElementsByClassName('input');
  const outputs = document.getElementsByClassName('output');
  
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', e => {
      
      // e.targetでinput要素を取得
      outputs[i].textContent = e.target.value;
    })
  }
  
  function getImage() {
    html2canvas(document.getElementById('pkg')).then(canvas => {
      document.body.appendChild(canvas);
    });
  }

  document.getElementById('generator').addEventListener('click', getImage);
}