const btnVerTodos = document.querySelector('.parceiros-footer div');
const listParceiros = document.querySelector('.parceiros ul.list-2');
const btn_menos = document.querySelector('.btn_menos');

if (btnVerTodos && listParceiros && btn_menos) {
  btnVerTodos.addEventListener('click', () => {
    listParceiros.classList.add('mostrar');
    btnVerTodos.style.display = 'none';
    btn_menos.classList.add('mostrar');
  });

  btn_menos.addEventListener('click', () => {
    listParceiros.classList.remove('mostrar');
    btnVerTodos.style.display = 'block';
    btn_menos.classList.remove('mostrar');
  });
}
