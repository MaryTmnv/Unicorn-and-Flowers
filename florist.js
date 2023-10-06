let menuLinks = document.querySelectorAll('.nav-item');
// Проходим по каждой ссылке и добавляем обработчик события на клик
menuLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Отменяем стандартное действие перехода по ссылке

    // Получаем ID целевой секции из атрибута href ссылки
    let targetId = this.getAttribute('href');

    // Получаем координаты верхней границы целевой секции
    let targetSection = document.querySelector(targetId);
    let targetSectionTop = targetSection.getBoundingClientRect().top;

    // Прокручиваем страницу до целевой секции
    window.scrollTo({
      top: targetSectionTop,
      behavior: 'smooth' // Добавляем плавную анимацию прокрутки
    });
  });
});

let showWorks = document.getElementById('showcase-btn');
showWorks.addEventListener('click', function(e) {
    e.preventDefault(); // Отменяем стандартное действие перехода по ссылке

    // Получаем ID целевой секции из атрибута href ссылки
    let targetId = this.getAttribute('href');

    // Получаем координаты верхней границы целевой секции
    let targetSection = document.querySelector(targetId);
    let targetSectionTop = targetSection.getBoundingClientRect().top;

    // Прокручиваем страницу до целевой секции
    window.scrollTo({
      top: targetSectionTop,
      behavior: 'smooth' // Добавляем плавную анимацию прокрутки
    });
  });