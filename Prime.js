document.querySelectorAll('.question').forEach(question => {
    question.addEventListener('click', function () {
        const paragraph = this.nextElementSibling;
        const plusIcon = this.querySelector('.plus');
        const minusIcon = this.querySelector('.minus');

        if (paragraph.classList.contains('expanded')) {
            paragraph.classList.remove('expanded');
            plusIcon.style.visibility = 'visible';
            minusIcon.style.visibility = 'hidden';
        } else {
            document.querySelectorAll('p.expanded').forEach(p => {
                p.classList.remove('expanded');
                p.previousElementSibling.querySelector('.plus').style.visibility = 'visible';
                p.previousElementSibling.querySelector('.minus').style.visibility = 'hidden';
            });
            paragraph.classList.add('expanded');
            plusIcon.style.visibility = 'hidden';
            minusIcon.style.visibility = 'visible';
        }
    });
});
