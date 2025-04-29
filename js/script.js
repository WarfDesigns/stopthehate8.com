document.addEventListener('DOMContentLoaded', () =>{
    const column = document.querySelectorAll('.column');
    const imageFolder = '../img/';
    const imageCount = 10;
    for (let i = 1; i <= imageCount; i++) {
        const img = document.createElement('img');
        img.src = `${img}image${i}.jpg`;
    }
});
