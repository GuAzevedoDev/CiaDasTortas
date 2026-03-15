const avaliacoesList = document.getElementById('avaliacoes-list');
const btnPrev = document.getElementById('prev-avaliacoes');
const btnNext = document.getElementById('next-avaliacoes');
const barraProgresso = document.querySelector('.avaliacoes-progresso');

if (avaliacoesList && btnPrev && btnNext && barraProgresso) {
  // Configuração
  const scrollAmount = 350; // Largura do card + gap (320 + 30)
  
  // Atualizar a barra de progresso baseada no scroll
  const updateProgress = () => {
    const maxScrollLeft = avaliacoesList.scrollWidth - avaliacoesList.clientWidth;
    const currentScroll = avaliacoesList.scrollLeft;
    
    // Calcular a porcentagem do scroll (evitar divisão por 0 caso não haja scroll)
    const scrollPercentage = maxScrollLeft > 0 ? (currentScroll / maxScrollLeft) * 100 : 100;
    
    // A barra começa com pelo menos 20% (ou proporcional ao tamanho visível)
    const baseWidth = 30; // 30% minimo
    const progressWidth = baseWidth + (scrollPercentage / 100) * (100 - baseWidth);
    
    barraProgresso.style.width = `${progressWidth}%`;
  };
  
  // Event Listeners
  btnNext.addEventListener('click', () => {
    avaliacoesList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  btnPrev.addEventListener('click', () => {
    avaliacoesList.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  // Atualizar progresso quando ocorre o scroll (manual ou via botão)
  avaliacoesList.addEventListener('scroll', updateProgress);
  
  // Atualizar progresso inicial
  updateProgress();
  
  // Recalcular no redimensionamento da janela
  window.addEventListener('resize', updateProgress);
}
