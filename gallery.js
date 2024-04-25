function loaderGallery(){
    document.querySelector('.loader').style.display = 'flex';
    fetch('https://dog.ceo/api/breeds/image/random/20')
        .then(response => response.json())
        .then(data => {
            document.querySelector('.loader').style.display = 'none';
        const btnNode = document.querySelector('.btn');
        btnNode.addEventListener('click',
        function() {
            loaderGallery()
        })
        const gallery = document.querySelector('.wrap__gallery');
        gallery.innerHTML = '';
        data.message.forEach(photo => {
            gallery.innerHTML += `<img class="wrap__gallery_img" src="${photo}" />`;
                
        });
    })
        .catch(error => {
            console.error('Ошибка загрузки:', error);
            document.querySelector('.loader').style.display = 'none';
        })
}