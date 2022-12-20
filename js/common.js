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



  document.querySelector('.this-year').textContent = new Date().getFullYear()