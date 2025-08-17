document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const fullImg = document.createElement('img');
    fullImg.src = img.src;
    fullImg.alt = "Foto Portofolio";
    fullImg.classList.add('lightbox-img');

    overlay.appendChild(fullImg);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.remove();
    });

    fullImg.addEventListener('click', (e) => {
      e.stopPropagation();
      fullImg.classList.toggle('zoomed');
    });
  });
});

const style = document.createElement('style');
style.innerHTML = `
.overlay {
  position: fixed;
  top:0; left:0; right:0; bottom:0;
  background: rgba(0,0,0,0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.3s ease;
}
@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
}
`;
document.head.appendChild(style);
