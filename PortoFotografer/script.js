// Membuat efek klik pada foto portofolio
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.innerHTML = `<img src="${img.src}" alt="Foto Portofolio">`;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', () => overlay.remove());
  });
});

// Tambahkan style overlay lewat JS
const style = document.createElement('style');
style.innerHTML = `
.overlay {
  position: fixed;
  top:0; left:0; right:0; bottom:0;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.overlay img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
}
`;
document.head.appendChild(style);
