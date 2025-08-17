document.addEventListener('DOMContentLoaded', () => {
    const balloonContainer = document.getElementById('balloon-container');
    const mainContent = document.getElementById('main-content');
    const balloon = document.querySelector('.balloon');

    const popSound = document.getElementById('pop-sound');
    const backgroundMusic = document.getElementById('background-music');

    const musicControl = document.getElementById('music-control');
    const iconVolumeOn = document.querySelector('.feather-volume-2');
    const iconVolumeOff = document.querySelector('.feather-volume-x');

    const galleryImages = document.querySelectorAll('.gallery img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeButton = document.querySelector('.close-button');


    balloon.addEventListener('click', () => {
        popSound.play();

        backgroundMusic.play();

        musicControl.classList.remove('hidden');
        setTimeout(() => musicControl.classList.add('visible'), 500);

        balloon.classList.add('popped');

        setTimeout(() => {
            balloonContainer.style.display = 'none';
            mainContent.classList.remove('hidden');
            setTimeout(() => {
                mainContent.classList.add('visible');
            }, 50);

            createBalloons(30);
        }, 300);
    });

    musicControl.addEventListener('click', () => {

        if (backgroundMusic.paused) {
            backgroundMusic.play();
            iconVolumeOn.classList.remove('hidden');
            iconVolumeOff.classList.add('hidden');
        } else {
            backgroundMusic.pause();
            iconVolumeOn.classList.add('hidden');
            iconVolumeOff.classList.remove('hidden');
        }
    });


    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            lightbox.classList.remove('hidden');
            setTimeout(() => lightbox.classList.add('visible'), 10);
            lightboxImg.src = image.src;
        });
    });

    function closeLightbox() {
        lightbox.classList.remove('visible');
        setTimeout(() => lightbox.classList.add('hidden'), 400);
    }

    closeButton.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
});

function createBalloons(count) {
    const colors = ['#ff8fab', '#ffc0cb', '#f3a4b5', '#ffd1dc', '#fff0f5'];
    
    for (let i = 0; i < count; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('mini-balloon');
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.left = Math.random() * 100 + 'vw';
        const size = Math.random() * 30 + 30;
        balloon.style.width = size + 'px';
        balloon.style.height = (size * 1.2) + 'px';
        balloon.style.animationDuration = (Math.random() * 5 + 5) + 's';
        document.body.appendChild(balloon);
        setTimeout(() => {
            balloon.remove();
        }, 10000);
    }
}