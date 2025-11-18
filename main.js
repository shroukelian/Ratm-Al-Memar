
// main.js (Excerpt to confirm functionality)

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const navWrapper = document.querySelector('.main-nav-wrapper');
    const header = document.querySelector('header');

    if (hamburger && navWrapper) {
        hamburger.addEventListener('click', () => {
            navWrapper.classList.toggle('is-open');
            hamburger.classList.toggle('is-active');
            // document.body.classList.toggle('no-scroll'); // إذا كنت ترغب بمنع التمرير
        });
    }

    // ... (rest of main.js code) ...
});
// main.js

document.addEventListener('DOMContentLoaded', function() {
    
    // ... (Mobile Menu Toggle and other functions remain) ...

    // 2. Mobile Dropdown Toggle (Services Menu)
    const servicesToggle = document.querySelector('.services-dropdown-toggle');
    const submenu = document.querySelector('.services-submenu');
    
    // التأكد من وجود العنصر وقابلية الشاشة للجوال (اختياري لكن أفضل)
    if (servicesToggle && submenu && window.matchMedia("(max-width: 992px)").matches) {
        
        servicesToggle.addEventListener('click', (event) => {
            
            // منع الانتقال إلى رابط # (في حالة النقر على الرابط نفسه)
            if (event.target.tagName === 'A' || event.target.closest('a')) {
                 event.preventDefault();
            }
            
            // تبديل عرض القائمة الفرعية
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            
            // تبديل الكلاس الخاص بتدوير الأيقونة
            servicesToggle.classList.toggle('is-open');
        });
    }

    // ... (rest of main.js code) ...
});