const form = document.getElementById('guestbook-form');
const messagesContainer = document.getElementById('messages-container');

// URL ke Netlify Function kita. Ini adalah path default.
const GET_MESSAGES_URL = '/.netlify/functions/get-messages';
const ADD_MESSAGE_URL = '/.netlify/functions/add-message';

// Fungsi untuk mengambil dan menampilkan semua pesan
const fetchMessages = async () => {
    messagesContainer.innerHTML = '<p>Memuat ucapan...</p>';
    try {
        const response = await fetch(GET_MESSAGES_URL);
        if (!response.ok) throw new Error('Gagal mengambil data');
        
        const messages = await response.json();
        
        // Kosongkan container
        messagesContainer.innerHTML = '';

        if (messages.length === 0) {
            messagesContainer.innerHTML = '<p>Belum ada ucapan. Jadilah yang pertama!</p>';
        } else {
            messages.forEach(msg => {
                const messageEl = document.createElement('div');
                messageEl.className = 'message-item';
                messageEl.innerHTML = `
                    <strong>${escapeHTML(msg.name)}</strong>
                    <p>${escapeHTML(msg.message_text)}</p>
                `;
                messagesContainer.appendChild(messageEl);
            });
        }
    } catch (error) {
        messagesContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    }
};

// Fungsi untuk mengirim pesan baru
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    try {
        const response = await fetch(ADD_MESSAGE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, message })
        });

        if (!response.ok) throw new Error('Gagal mengirim pesan');

        // Reset form dan refresh daftar pesan
        form.reset();
        fetchMessages();

    } catch (error) {
        alert(`Error: ${error.message}`);
    }
});

// Helper untuk mencegah XSS
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          "'": '&#39;',
          '"': '&quot;'
        }[tag] || tag)
    );
}

// Panggil fungsi saat halaman pertama kali dimuat
document.addEventListener('DOMContentLoaded', fetchMessages);