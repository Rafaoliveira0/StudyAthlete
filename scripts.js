document.addEventListener('DOMContentLoaded', () => {
    // Aqui você pode adicionar funcionalidades JavaScript se necessário
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Login realizado com sucesso!');
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Cadastro realizado com sucesso!');
    });
});
