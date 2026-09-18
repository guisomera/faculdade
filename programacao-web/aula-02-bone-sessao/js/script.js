document.addEventListener('DOMContentLoaded', function () {
  const imagens = [
    "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200",
    "https://images.unsplash.com/photo-1516820580870-3f66c730d990?q=80&w=1200",
    "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1200"
  ];
  let indice = 0;

  const carrosselImg = document.getElementById('carrossel-img');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');

  function mostrarSlide(novoIndice) {
    indice = (novoIndice + imagens.length) % imagens.length;
    if (carrosselImg) {
      carrosselImg.src = imagens[indice];
    }
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', function () {
      mostrarSlide(indice - 1);
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', function () {
      mostrarSlide(indice + 1);
    });
  }

  // Botões "Garanta o Seu Agora" / "Comprar Agora" que rolam até a seção de compra
  document.querySelectorAll('.scroll-comprar').forEach(function (botao) {
    botao.addEventListener('click', function () {
      const secaoComprar = document.getElementById('comprar');
      if (secaoComprar) {
        secaoComprar.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
