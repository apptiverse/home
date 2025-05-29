// 네비게이션 관련
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // 스크롤 시 네비게이션 배경 변경
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });

    // 햄버거 메뉴 토글
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // 네비게이션 링크 클릭 시 부드러운 스크롤
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }

            // 모바일에서 메뉴 닫기
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// 스크롤 인디케이터 클릭
document.querySelector('.scroll-indicator').addEventListener('click', function() {
    const aboutSection = document.querySelector('#about');
    const offsetTop = aboutSection.offsetTop - 80;
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
});

// CTA 버튼 이벤트
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.cta-buttons .btn');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent.includes('Games') || this.textContent.includes('Explore')) {
                const gamesSection = document.querySelector('#games');
                const offsetTop = gamesSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            } else if (this.textContent.includes('About')) {
                const aboutSection = document.querySelector('#about');
                const offsetTop = aboutSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// 스크롤 애니메이션
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

// 애니메이션 대상 요소들 관찰
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.about-card, .game-category, .contact-info, .contact-form');
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// 플로팅 요소들 마우스 인터랙션
document.addEventListener('DOMContentLoaded', function() {
    const floatingElements = document.querySelectorAll('.element');
    
    floatingElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
            this.style.transform = 'scale(1.2)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
            this.style.transform = 'scale(1)';
        });
    });
});

// 폼 처리
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 폼 데이터 수집
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // 간단한 유효성 검사
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // 이메일 유효성 검사
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // 성공 메시지 (실제 서버 연동 시 이 부분을 수정)
            alert('Message sent successfully! We will get back to you soon.');
            this.reset();
        });
    }
});

// 카드 호버 효과 개선
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.about-card, .game-category');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// 텍스트 타이핑 효과 (히어로 섹션)
document.addEventListener('DOMContentLoaded', function() {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const originalText = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            heroSubtitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // 페이지 로드 후 1초 뒤에 타이핑 시작
    setTimeout(typeWriter, 1000);
});

// 스무스 스크롤 폴리필 (구형 브라우저 지원)
if (!('scrollBehavior' in document.documentElement.style)) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/iamdustan/smoothscroll@master/src/smoothscroll.js';
    document.head.appendChild(script);
}

// 페이지 로딩 애니메이션
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// 소셜 링크 클릭 이벤트
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.querySelector('span').textContent;
            
            switch(platform) {
                case 'GitHub':
                    window.open('https://github.com', '_blank');
                    break;
                case 'Discord':
                    alert('Discord server coming soon!');
                    break;
                case 'Email':
                    window.location.href = 'mailto:contact@apptiverse.com';
                    break;
            }
        });
    });
});

// 게임 카테고리 클릭 시 더 자세한 정보 모달 (간단한 구현)
document.addEventListener('DOMContentLoaded', function() {
    const gameCategories = document.querySelectorAll('.game-category');
    
    gameCategories.forEach(category => {
        category.addEventListener('click', function() {
            const categoryType = this.querySelector('h3').textContent;
            alert(`More detailed information about ${categoryType} games coming soon!`);
        });
    });
});

// 패럴랙스 효과 (플로팅 요소들)
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.element');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.2);
        const yPos = -(scrolled * speed);
        element.style.transform += ` translateY(${yPos}px)`;
    });
});

// 키보드 네비게이션 지원
document.addEventListener('keydown', function(e) {
    // ESC 키로 모바일 메뉴 닫기
    if (e.key === 'Escape') {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// 성능 최적화: 스크롤 이벤트 쓰로틀링
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// 스크롤 이벤트에 쓰로틀링 적용
window.addEventListener('scroll', throttle(function() {
    // 스크롤 관련 처리들...
}, 100)); 