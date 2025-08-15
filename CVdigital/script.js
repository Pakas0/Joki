document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    const ctaButton = document.querySelector('.cta-button');

    // Fungsi untuk menampilkan section yang sesuai
    function showSection(targetId) {
        // Sembunyikan semua section
        contentSections.forEach(section => {
            section.classList.remove('active');
        });

        // Tampilkan section yang dituju
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }

    // Event listener untuk setiap link navigasi
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Mencegah link berpindah halaman secara default

            // Hapus kelas 'active' dari semua link
            navLinks.forEach(nav => nav.classList.remove('active'));
            // Tambahkan kelas 'active' ke link yang diklik
            this.classList.add('active');

            const targetId = this.getAttribute('href');
            showSection(targetId);
        });
    });

    // Event listener untuk tombol "Lihat Karya Saya"
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Aktifkan link navigasi portofolio
            navLinks.forEach(nav => nav.classList.remove('active'));
            document.querySelector('a[href="#portfolio"]').classList.add('active');

            showSection(targetId);
        });
    }

    // Tampilkan halaman home saat pertama kali dimuat
    showSection('#home');
});
