const likeMe = document.querySelector('.likeMe');
const times = document.getElementById('times');

let clickTime = 0;
let timesClicked = 0;

likeMe.addEventListener('dblclick', (e) => {
  createHeartLike(e);
});

const createHeartLike = (e) => {
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.left = `${xInside}px`;
  heart.style.top = `${yInside}px`;

  likeMe.appendChild(heart);

  times.innerHTML = ++timesClicked;

  setTimeout(() => heart.remove(), 500);
};
