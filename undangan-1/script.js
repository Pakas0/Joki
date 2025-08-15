// Atur tanggal pernikahan Anda di sini
const weddingDate = new Date("Oct 15, 2025 09:00:00").getTime();

// Perbarui hitungan mundur setiap 1 detik
const countdownFunction = setInterval(function() {

    // Dapatkan tanggal dan waktu hari ini
    const now = new Date().getTime();
    
    // Temukan selisih antara sekarang dan tanggal pernikahan
    const distance = weddingDate - now;
    
    // Perhitungan waktu untuk hari, jam, menit, dan detik
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Tampilkan hasilnya di elemen dengan id yang sesuai
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    
    // Jika hitungan mundur selesai, tulis beberapa teks
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown-timer").innerHTML = "Acara Telah Berlangsung";
    }
}, 1000);