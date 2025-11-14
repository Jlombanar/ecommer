
        // Toggle password visibility
        document.getElementById('toggle-password').addEventListener('click', function() {
            const passwordInput = document.getElementById('password');
            const eyeOpen = document.getElementById('eye-icon-open');
            const eyeClosed = document.getElementById('eye-icon-closed');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                eyeOpen.classList.add('hidden');
                eyeClosed.classList.remove('hidden');
            } else {
                passwordInput.type = 'password';
                eyeOpen.classList.remove('hidden');
                eyeClosed.classList.add('hidden');
            }
        });

        // Toggle confirm password visibility
        document.getElementById('toggle-confirm-password').addEventListener('click', function() {
            const confirmInput = document.getElementById('confirmPassword');
            const eyeOpen = document.getElementById('eye-icon-open-confirm');
            const eyeClosed = document.getElementById('eye-icon-closed-confirm');
            
            if (confirmInput.type === 'password') {
                confirmInput.type = 'text';
                eyeOpen.classList.add('hidden');
                eyeClosed.classList.remove('hidden');
            } else {
                confirmInput.type = 'password';
                eyeOpen.classList.remove('hidden');
                eyeClosed.classList.add('hidden');
            }
        });

        // Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        });

        // Password strength indicator
        document.getElementById('password').addEventListener('input', function() {
            const password = this.value;
            const container = document.getElementById('password-strength-container');
            const bar = document.getElementById('password-strength-bar');
            const text = document.getElementById('password-strength-text');
            
            if (password.length > 0) {
                container.style.display = 'block';
                
                let strength = 0;
                const hasLength = password.length >= 8;
                const hasUppercase = /[A-Z]/.test(password);
                const hasLowercase = /[a-z]/.test(password);
                const hasNumber = /[0-9]/.test(password);
                
                // Update checkmarks
                document.getElementById('req-length').innerHTML = hasLength ? '<span class="mr-2 text-green-600">✓</span> Mínimo 8 caracteres' : '<span class="mr-2">○</span> Mínimo 8 caracteres';
                document.getElementById('req-uppercase').innerHTML = hasUppercase ? '<span class="mr-2 text-green-600">✓</span> Una mayúscula' : '<span class="mr-2">○</span> Una mayúscula';
                document.getElementById('req-lowercase').innerHTML = hasLowercase ? '<span class="mr-2 text-green-600">✓</span> Una minúscula' : '<span class="mr-2">○</span> Una minúscula';
                document.getElementById('req-number').innerHTML = hasNumber ? '<span class="mr-2 text-green-600">✓</span> Un número' : '<span class="mr-2">○</span> Un número';
                
                if (hasLength) strength += 25;
                if (hasUppercase) strength += 25;
                if (hasLowercase) strength += 25;
                if (hasNumber) strength += 25;
                
                bar.style.width = strength + '%';
                
                if (strength <= 25) {
                    bar.style.backgroundColor = '#ef4444';
                    text.textContent = 'Débil';
                    text.style.color = '#ef4444';
                } else if (strength <= 50) {
                    bar.style.backgroundColor = '#f59e0b';
                    text.textContent = 'Regular';
                    text.style.color = '#f59e0b';
                } else if (strength <= 75) {
                    bar.style.backgroundColor = '#3b82f6';
                    text.textContent = 'Buena';
                    text.style.color = '#3b82f6';
                } else {
                    bar.style.backgroundColor = '#10b981';
                    text.textContent = 'Fuerte';
                    text.style.color = '#10b981';
                }
            } else {
                container.style.display = 'none';
            }
        });

        // Form validation
        document.getElementById('register-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const terms = document.getElementById('terms').checked;
            
            // Validaciones básicas
            if (password !== confirmPassword) {
                document.getElementById('register-error').classList.remove('hidden');
                document.getElementById('register-error-message').textContent = 'Las contraseñas no coinciden';
                return;
            }
            
            if (!terms) {
                document.getElementById('register-error').classList.remove('hidden');
                document.getElementById('register-error-message').textContent = 'Debes aceptar los términos y condiciones';
                return;
            }
            
            // Aquí irían tus validaciones y lógica de registro
            console.log('Register attempt:', { firstName, lastName, email, phone, password });
            
            // Éxito (simulado)
            alert('¡Cuenta creada exitosamente! Redirigiendo al login...');
            window.location.href = 'login.html';
        });
  