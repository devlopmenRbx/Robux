kageCard.querySelector('.price').textContent;

        // Determine delivery type
        const isInstant = packageCard.querySelector('.instant-badge');
        const isEconomy = packageCard.querySelector('.economy-badge');
        const deliveryType = isInstant ? 'Instan (1-5 Menit)' : isEconomy ? 'Ekonomis (1-5 Hari)' : 'Instan (1-5 Menit)';

            // Show purchase modal or redirect
        showPurchaseForm(packageName, packagePrice, deliveryType);
        });
    });

    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.header');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(102, 126, 234, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            navbar.style.backdropFilter = 'none';
        }
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe package cards
    const packageCards = document.querySelectorAll('.package-card');
    packageCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });

    // Observe steps
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(50px)';
        step.style.transition = `all 0.6s ease ${index * 0.2}s`;
        observer.observe(step);
    });

    // Add floating animation to Roblox character
    const character = document.querySelector('.roblox-character');
    if (character) {
        // Add random movement
        setInterval(() => {
            const randomX = (Math.random() - 0.5) * 10;
            const randomY = (Math.random() - 0.5) * 10;
            character.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }, 3000);
    }

    // Add particle effect
    createParticles();
});

// Purchase form function
function showPurchaseForm(packageName, packagePrice, deliveryType) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'purchase-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Order ${packageName}</h3>
                <button class="close-modal">&times;</button>
            </div>
            <div class="modal-body">
                <div class="order-summary">
                    <p><strong>Paket:</strong> ${packageName}</p>
                    <p><strong>Harga:</strong> ${packagePrice}</p>
                    <p><strong>Pengiriman:</strong> ${deliveryType}</p>
                </div>
                <form class="purchase-form">
                    <div class="form-group">
                        <label for="username">Username Roblox:</label>
                        <input type="text" id="username" name="username" required placeholder="Masukkan username Roblox">
                    </div>
                    <div class="form-group">
                        <label for="whatsapp">Nomor WhatsApp:</label>
                        <input type="tel" id="whatsapp" name="whatsapp" required placeholder="08xx-xxxx-xxxx">
                    </div>
                    <div class="form-group">
                        <label for="payment">Metode Pembayaran:</label>
                        <select id="payment" name="payment" required>
                            <option value="">Pilih metode pembayaran</option>
                            <option value="dana">DANA</option>
                            <option value="gopay">GoPay</option>
                            <option value="ovo">OVO</option>
                            <option value="bank">Transfer Bank</option>
                        </select>
                    </div>
                    <button type="submit" class="submit-btn">
                        <i class="fas fa-shopping-cart"></i>
                        Order Sekarang
                    </button>
                </form>
            </div>
        </div>
    `;

    // Add modal styles
    const modalStyles = `
        .purchase-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }

        .modal-content {
            background: white;
            border-radius: 20px;
            width: 90%;
            max-width: 500px;
            max-height: 90vh;
            overflow-y: auto;
            animation: slideIn 0.3s ease;
        }

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem;
            border-bottom: 1px solid #eee;
        }

        .close-modal {
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            color: #999;
        }

        .modal-body {
            padding: 1.5rem;
        }

        .order-summary {
            background: #f8f9fa;
            padding: 1rem;
            border-radius: 10px;
            margin-bottom: 1.5rem;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: bold;
            color: #333;
        }

        .form-group input,
        .form-group select {
            width: 100%;
            padding: 0.75rem;
            border: 2px solid #ddd;
            border-radius: 10px;
            font-size: 1rem;
            transition: border-color 0.3s;
        }

        .form-group input:focus,
        .form-group select:focus {
            outline: none;
            border-color: #667eea;
        }

        .submit-btn {
            width: 100%;
            background: linear-gradient(45deg, #667eea, #764ba2);
            color: white;
            padding: 1rem;
            border: none;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s;
        }

        .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(102,126,234,0.4);
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes slideIn {
            from { transform: translateY(-50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;

    // Add styles to head
    const styleSheet = document.createElement('style');
    styleSheet.textContent = modalStyles;
    document.head.appendChild(styleSheet);

    // Add modal to body
    document.body.appendChild(modal);

    // Close modal functionality
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', function() {
        document.body.removeChild(modal);
        document.head.removeChild(styleSheet);
    });

    // Close on outside click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
            document.head.removeChild(styleSheet);
        }
    });

    // Handle form submission
    const form = modal.querySelector('.purchase-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(form);
        const username = formData.get('username');
        const whatsapp = formData.get('whatsapp');
        const payment = formData.get('payment');

        // Create WhatsApp message
        const message = `Halo! Saya ingin order Robux:\n\n` +
                       `📦 Paket: ${packageName}\n` +
                       `💰 Harga: ${packagePrice}\n` +
                       `🚀 Pengiriman: ${deliveryType}\n` +
                       `🎮 Username: ${username}\n` +
                       `💳 Pembayaran: ${payment}\n\n` +
                       `Mohon diproses ya! Terima kasih 😊`;

        const whatsappUrl = `https://wa.me/6288210938143‬?text=${encodeURIComponent(message)}`;

        // Open WhatsApp
        window.open(whatsappUrl, '_blank');

        // Close modal
        document.body.removeChild(modal);
        document.head.removeChild(styleSheet);

        // Show success message
        showSuccessMessage();
    });
}

// Success message function
function showSuccessMessage() {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <div class="success-content">
            <i class="fas fa-check-circle"></i>
            <h3>Order Berhasil!</h3>
            <p>Anda akan diarahkan ke WhatsApp untuk melanjutkan pembayaran.</p>
        </div>
    `;

    const successStyles = `
        .success-message {
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(45deg, #4CAF50, #45a049);
            color: white;
            padding: 1.5rem;
            border-radius: 15px;
            box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
            z-index: 10001;
            animation: slideInRight 0.5s ease;
        }

        .success-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .success-content i {
            font-size: 2rem;
            margin-bottom: 0.5rem;
        }

        .success-content h3 {
            margin-bottom: 0.5rem;
        }

        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = successStyles;
    document.head.appendChild(styleSheet);

    document.body.appendChild(successDiv);

    // Remove after 5 seconds
    setTimeout(() => {
        if (document.body.contains(successDiv)) {
            document.body.removeChild(successDiv);
            document.head.removeChild(styleSheet);
        }
    }, 5000);
}

// Particle effect function
function createParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particles';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;

    document.body.appendChild(particleContainer);

    // Create particles
    for (let i = 0; i < 50; i++) {
        createParticle(particleContainer);
    }

    function createParticle(container) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 215, 0, 0.6);
            border-radius: 50%;
            animation: float ${Math.random() * 3 + 2}s linear infinite;
        `;

        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 2 + 's';

        container.appendChild(particle);

        // Remove and recreate particle after animation
        setTimeout(() => {
            if (container.contains(particle)) {
                container.removeChild(particle);
                createParticle(container);
            }
        }, 5000);
    }

    // Add particle animation CSS
    const particleStyles = `
        @keyframes float {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = particleStyles;
    document.head.appendChild(styleSheet);
}

// Package tab switching function
function showPackages(type) {
    // Hide all package grids
    const packageGrids = document.querySelectorAll('.packages-grid');
    packageGrids.forEach(grid => {
        grid.classList.remove('active');
    });

    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected package grid
    const targetGrid = document.getElementById(type + '-packages');
    if (targetGrid) {
        targetGrid.classList.add('active');
    }

    // Add active class to clicked tab
    const activeTab = document.querySelector(`[onclick="showPackages('${type}')"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
}

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Add loading effect to buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('package-btn') || e.target.classList.contains('cta-button')) {
        const button = e.target;
        const originalText = button.innerHTML;

        button.innerHTML = '<div class="loading"></div> Processing...';
        button.disabled = true;

        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
        }, 1000);
    }
});
