class Box01 {
  constructor() {
    console.log('window width', Utils.getWindowWidth());

    const box = document.querySelector('.box');

    box.addEventListener('click', console.log);
  }
}
