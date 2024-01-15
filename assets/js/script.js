// const navToggle = document.querySelector('.nav-toggle');
// const sidebar = document.querySelector('.sidebar');

// console.log(sidebar, navToggle);
// navToggle.addEventListener('click', () => {
//      sidebar.classList.toggle('sidebar--visible');
// })

const navToggle = document.querySelector('.nav-toggle');
const sidebar = document.querySelector('.sidebar');

console.log(sidebar, navToggle);

const flag = false;
navToggle.addEventListener('click', () => {
     // if(!flag) {
     //   sidebar.style =  `display: flex;
     // position: absolute;
     // width: min(100%,545px);
     // z-index: 2;
     // visibility:visible;`;

     // console.log(sidebar.style);
     // } else {
     //   sidebar.style =  `display: none`;
     // }
     sidebar.classList.toggle('sidebar--visible');
})