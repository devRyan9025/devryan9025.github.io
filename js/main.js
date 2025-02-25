function toggleMenu() {
  const navMenuEl = document.getElementById('nav__menu');
  navMenuEl.classList.toggle('show');
}

function handleFloatingButton() {
  const floatingButtonEl = document.getElementById('floating-button');
  floatingButtonEl.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth',
    });
  });
}

function init() {
  const navToggleEl = document.getElementById('nav-toggle');
  navToggleEl.addEventListener('click', () => {
    // Menu Toggle
    toggleMenu();
  });

  const navLinkListEl = document.querySelectorAll('.nav__link');
  navLinkListEl.forEach((el) => el.addEventListener('click', toggleMenu));

  handleFloatingButton();
}

init();

const options = {
  threshold: 1,
};

/* 해당 요소를 감지하여 특별한 효과를 주고 싶을 때, 사용 */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const sectionId = entry.target.id;
    if (entry.isIntersecting) {
      document
        .querySelector(`.nav__link[href*=${sectionId}]`)
        .classList.add('active-link');

      const itemsEl = document.querySelectorAll(
        `.nav__link:not([href*=${sectionId}])`,
      );
      itemsEl.forEach((el) => el.classList.remove('active-link'));
    }
  });
}, options);

const sectionListEl = document.querySelectorAll('.section');
sectionListEl.forEach((el) => observer.observe(el));

/* Scroll Reveal Animation 적용 */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
});

scrollReveal.reveal('.home__data,.about__img,.skills__text');
scrollReveal.reveal('.home__img,.about__data,.skills__img', { delay: 400 });
scrollReveal.reveal('.skills__data,.work__link, .contact__input', {
  interval: 200,
});

/* TypeIt 라이브러리 적용 */

const typeIt = new TypeIt(`#typeit`, {
  speed: 70,
  startDelay: 1300,
  waitUnitVisible: true,
});

typeIt
  .type('안녕하세요!<br/>')
  .type(
    '<strong class="home__title-color">프론트엔드 새싹 개발자</strong><br/>',
  )
  .type('<strong class="home__title-color">devRyan</strong>입니다!')
  .delete(11, { delay: 300 })
  .type('<strong class="home__title-color">라이언</strong>입니다!')
  .go();

/* 이메일 클라이언트 열기 */
const contactFormEl = document.getElementById('contactForm');

contactFormEl.addEventListener('submit', function (event) {
  event.preventDefault();

  // 폼 하위 정보를 갖고
  const name = contactFormEl.name.value;
  const subject = contactFormEl.subject.value;
  const message = contactFormEl.message.value;
  const to = 'devryan9025@naver.com';

  // 이메일 클라이언트 열기
  location.href =
    'mailto:' +
    encodeURIComponent(to) +
    '?subject=' +
    encodeURIComponent(`[${name}님 문의] ${subject}`) +
    '&body=' +
    encodeURIComponent(message);
});
