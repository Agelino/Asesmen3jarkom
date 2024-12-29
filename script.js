document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form default
  
    // Ambil nilai input
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
  
    // Validasi sederhana
    if (email === '' || password === '') {
      errorMessage.textContent = 'Email dan password harus diisi!';
      return;
    }
  
    // Reset pesan error
    errorMessage.textContent = '';
  
    // Redirect ke halaman index.html
    window.location.href = 'dasboard.html';
  });
  