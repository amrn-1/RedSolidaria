document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const settingsBtn = document.getElementById('settings-btn');
    const editBtn = document.getElementById('edit-btn');
    const login = document.getElementById('login');
    const userBtn = document.querySelector('.header-right .icon-btn:nth-child(3)'); // Botón de usuario (tercero en header-right)

    // Función para abrir modal de login
    function openLoginModal() {
        const loginModal = document.getElementById('loginModal');
        if (loginModal) {
            loginModal.style.display = 'block';
        }
    }

    // Función para cerrar modal de login
    function closeLoginModal() {
        const loginModal = document.getElementById('loginModal');
        if (loginModal) {
            loginModal.style.display = 'none';
        }
    }

    // Redirigir a Cuenta.html al hacer clic en el botón de configuración
    if (settingsBtn) {
        settingsBtn.addEventListener('click', function() {
            window.location.href = 'Cuenta.html';
        });
    }
    
    if (editBtn) {
        editBtn.addEventListener('click', function() {
            window.location.href = 'principal.html';
        });
    }

    // Abrir modal de login al hacer clic en el botón de usuario
    if (userBtn) {
        userBtn.addEventListener('click', function() {
            openLoginModal();
        });
    }

    // Cerrar modal de login si el usuario hace clic fuera
    window.onclick = function(event) {
        const loginModal = document.getElementById('loginModal');
        if (event.target === loginModal) {
            closeLoginModal();
        }
    };
});

function openModal() {
    document.getElementById("loginModal").style.display = "block";
}

function closeModal() {
    document.getElementById("loginModal").style.display = "none";
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById("loginModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
