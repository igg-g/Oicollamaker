'use strict';

{
  // 商品パッケージ内の編集できる（ようにした）要素を配列で取得
  const outputs = document.querySelectorAll('.output');
  
  // 上で取得した配列をもとに、対応する入力フォームをドキュメントに順次追加
  for (let i = 0; i < outputs.length; i++) {
    const form = document.querySelector('form');
    const input = document.createElement('input');

    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', outputs[i].textContent);

    // 入力した文字がリアルタイムで反映されるように設定
    input.addEventListener('input', e => {

      // 右辺のe.targetはイベントを発生させた要素（ここではinput）を取得している
      outputs[i].textContent = e.target.value;
    })

    form.appendChild(input);
  }
  
  function getImg() {
    // 商品パッケージの内容をcanvasに書き出してドキュメントの最後に追加する
    html2canvas(document.getElementById('pkg')).then(canvas => {
      document.body.appendChild(canvas);
    });
  }

  document.querySelector('.get-img').addEventListener('click', getImg);
}