class Box01 {
  constructor() {
    console.log('window width', Utils.getWindowWidth());

    const box = document.querySelector('.box');

    if (box) box.addEventListener('click', console.log);
    else console.warn("Couldn't find box!");

    if (box) {
      this.swiperInstance = new Swiper(box, {
        loop: true,
      });
    }
  }
}
