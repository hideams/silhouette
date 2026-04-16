document.addEventListener("DOMContentLoaded", () => {
    console.log("Silhouette Dashboard Loaded...");

    // تحريك دائرة الإنجاز عند التحميل
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        // حساب الإزاحة (440 هو محيط الدائرة التقريبي)
        // 85% كفاءة = إزاحة 66
        setTimeout(() => {
            progressBar.style.strokeDashoffset = '66';
        }, 500);
    }

    // إضافة تأثيرات عند تمرير الماوس على بطاقات المشاريع
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.transition = '0.3s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});
