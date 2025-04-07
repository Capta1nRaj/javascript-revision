const colorBoxes = document.querySelectorAll('.color-box');

colorBoxes.forEach(box => {
    box.addEventListener('click', (e) => {
        if (e.target.id === 'red') {
            document.body.style.backgroundColor = e.target.id;
        } else if (e.target.id === 'blue') {
            document.body.style.backgroundColor = e.target.id;
        } else if (e.target.id === 'black') {
            document.body.style.backgroundColor = e.target.id;
        } else if (e.target.id === 'green') {
            document.body.style.backgroundColor = e.target.id;
        } else {
            document.body.style.backgroundColor = e.target.id;
        }
    });
});

