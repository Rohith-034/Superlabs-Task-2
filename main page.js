document.addEventListener('DOMContentLoaded', () => {
    const startSellingButtons = [
        document.getElementById('btnStartSelling'),
        document.getElementById('fixedStartSelling'),
        document.getElementById('footerStartSelling'),
    ];
    const chatConsultantBtn = document.getElementById('btnChatConsultant');
    const fixedCustomerServiceBtn = document.getElementById('fixedCustomerService');

    startSellingButtons.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                alert('Thank you for your interest! The selling process will begin shortly.');
            });
        }
    });

    if (chatConsultantBtn) {
        chatConsultantBtn.addEventListener('click', () => {
            alert('Connecting you to a consultant now...');
        });
    }

    if (fixedCustomerServiceBtn) {
        fixedCustomerServiceBtn.addEventListener('click', () => {
            alert('Customer service will be with you shortly.');
        });
    }
    const statNumbers = document.querySelectorAll('.stat-number');
    let countersActivated = false;
    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const countUp = (el, target, duration = 4000) => {
        let start = 0;
        const startTime = performance.now();
        const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const value = Math.floor(progress * target);
            el.textContent = formatNumber(value);
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = formatNumber(target);
            }
        };
        requestAnimationFrame(step);
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersActivated) {
                statNumbers.forEach(el => {
                    const target = parseInt(el.dataset.target, 10);
                    countUp(el, target);
                });
                countersActivated = true;
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.5, 
    });
    const heroStatsSection = document.querySelector('.hero-stats');
    if (heroStatsSection) {
        observer.observe(heroStatsSection);
    }
});
