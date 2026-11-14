/* Mobile navigation and current footer year. */
(function(){
  const menuButton = document.querySelector('[data-menu-toggle]');
  const siteNav = document.querySelector('[data-site-nav]');
  if(menuButton && siteNav){
    menuButton.addEventListener('click', function(){
      const open = siteNav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Close Navigation' : 'Open Navigation');
    });
    siteNav.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click', function(){
        siteNav.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open Navigation');
      });
    });
    document.addEventListener('keydown', function(event){
      if(event.key === 'Escape'){
        siteNav.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded','false');
      }
    });
  }
  const y=document.querySelector('[data-year]');
  if(y){y.textContent=String(new Date().getFullYear());}
})();
