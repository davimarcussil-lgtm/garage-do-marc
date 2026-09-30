// Garage do Marc — interações leves da página

document.addEventListener('DOMContentLoaded', function () {

  // Ano atual no rodapé
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Botão "voltar ao topo": aparece após rolar a página
  var backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    var toggleBackToTop = function () {
      if (window.scrollY > 480) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    };
    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    toggleBackToTop();
  }

  // Fecha o link do header quando clicado (evita comportamento estranho no mobile)
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = link.getAttribute('href');
      if (targetId.length > 1) {
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

});
