const toggleItems = document.querySelector('.toggle-menu');
const toggleButton = document.querySelector('.toggler');

toggleButton.addEventListener('click', () => toggleItems.classList.toggle('active'));

// window.addEventListener('click', (e) => {
//     if(e.target !== toggleButton){
//         toggleItems.classlist.add('active');
//     }
// })