const searchEl = document.querySelector('.sub-menu .search')

const searchInputEl = searchEl.querySelector('input')


searchEl.addEventListener('click', (el) => {
  searchInputEl.focus()
})

searchInputEl.addEventListener('focus',
  () => {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
  })

searchInputEl.addEventListener('blur',
  () => {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
  })


const badgeEl = document.querySelector('header .badges');

const upPageEl = document.querySelector('#to-top');


upPageEl.addEventListener('click',()=>{
  gsap.to(window, .7 , {
    scrollTo:0
  })
})
window.addEventListener('scroll', _.throttle(() => {
  if (window.scrollY > 500) {
    //배지 숨기기  
    // badgeEl.style.display = 'none';
    //gsap.to(요소,지속시간,옵션)
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: "none"
    });

    gsap.to(upPageEl,0.2,{
      x : 0
    });

  } else {
    //배지 보이기
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: "block"
    });

    gsap.to(upPageEl,0.2,{
      x: 100
    });
  }
}, 300))

//_.throttle 이라는 함수를 사용하여
//지연 호출하게 사용하는 lodash 함수이다.


const fadeEls = document.querySelectorAll(".visual .fade-in");

fadeEls.forEach((item, index) => {
  gsap.to(item, 1, {
    delay: .5 * (index + 1),
    opacity: 1
  })
})



// SWIPER
const swiper = new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
})


const promotionSwiper = new Swiper('.promotion .swiper-container', {
  direction: 'horizontal',
  slidesPerView: 3, //한번에 보여지는 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기,
  loop: true,
  autoplay: {
    delay: 5000 //3000 default
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
})


new Swiper('.awards .swiper-container',{
  direction : 'horizontal',
  autoplay: true,
  loop: true,
  spaceBetween : 30,
  slidesPerView : 5,
  navigation:{
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})


const promotionEl = document.querySelector('.promotion');

const promotionToggleEl = document.querySelector('.toggle-promotion')


let isHidePromotion = false;

promotionToggleEl.addEventListener('click', () => {
  isHidePromotion = !isHidePromotion

  if (isHidePromotion) {
    //숨김처리 진행
    promotionEl.classList.add('hide')
  } else {
    //숨김 해제
    promotionEl.classList.remove('hide')
  }
})


function floatingObject(selector, delay, size) {
  gsap.to(selector, makeRandom(1.5, 2.5), {
    y: size,
    repeat: -1, //무함 반복
    yoyo: true,
    ease: Power1.easeInOut,
    delay: makeRandom(0, delay),
  })
}

document.querySelectorAll('.floating').forEach((item, index) => {
  console.log(item)
  floatingObject(`.${item.classList[1]}`, 1, 3)
})


function makeRandom(min, max) {
  return parseFloat((Math.random() * ((max - min) + min).toFixed(2)))
}



const spyEls = document.querySelectorAll('section.scroll-spy');


spyEls.forEach((item, index) => {
  new ScrollMagic
    .Scene({
      triggerElement: item, //보여짐 여부를 감시할 요소를 지정
      triggerHook: 0.8
    })
    .setClassToggle(item,'show')
    .addTo(new ScrollMagic.Controller());
})



document.querySelector('.this-year').textContent = new Date().getFullYear()