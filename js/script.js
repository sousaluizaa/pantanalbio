let currentBox = 0;
const boxes = document.querySelectorAll('.interactive-box');
const backgrounds = [
  'url("C:/Users/Aluno/Desktop/geografia/public/imagens/fundo-1.avif")',
  'url("C:/Users/aluno/Desktop/geografia/public/imagens/fundo-2.avif")',
  'url("C:/Users/aluno/Desktop/geografia/public/imagens/fundo-3.jpg")',
  'url("C:/Users/aluno/Desktop/geografia/public/imagens/fundo-2.avif")',
  'url("C:/Users/aluno/Desktop/geografia/public/imagens/fundo-7.jpg")',
  'url("C:/Users/aluno/Desktop/geografia/public/imagens/fundo-5.jpg")',
  'url("C:/Users/aluno/Desktop/geografia/public/imagens/fundo-7.jpg")',
  'url("C:/Users/aluno/Desktop/geografia/public/imagens/fundo-7.jpg")',
  'url("C:\Users\Aluno\Desktop\geografia\public\imagens\silhouette-leafless-trees-near-water-with-sun-shining-through-branches_181624-4415")',
];

function showBox(index) {
  boxes.forEach((box, i) => {
    box.style.display = i === index ? 'block' : 'none';
  });

  // Altera o background da página de acordo com o índice da caixa atual
  document.body.style.backgroundImage = backgrounds[index];
}

function previousBox() {
  currentBox = Math.max(currentBox - 1, 0);
  showBox(currentBox);
}

function nextBox() {
  currentBox = Math.min(currentBox + 1, boxes.length - 1);
  showBox(currentBox);
}

// Exibe a primeira caixa inicialmente
showBox(currentBox);

