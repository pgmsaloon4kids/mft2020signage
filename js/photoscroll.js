$(function () {
  const loop = document.getElementById('loop_js');

  //タイムラインを作成
  const loopAnim = new TimelineMax({
    repeat: -1 //繰り返し無制限
  });

  //画像を複製してdiv内に挿入
  let loopItem = (window.innerWidth, loop.children[0]);
  loop.appendChild(loopItem.cloneNode(true));
  loop.appendChild(loopItem.cloneNode(true));

  //アニメーションの設定
  loopAnim
    .to(loop, 50, { ease: Power0.easeNone, xPercent: -66.66666 })
    .to(loop, 0, { ease: Power0.easeNone, x: 0 });
});