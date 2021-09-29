gsap.registerPlugin(ScrollTrigger);

function init() {
  gsap.set(".part3", {
    y: () => {
      return -(document.querySelector(".pen-top").clientHeight -22);
    },
    scrollTrigger: {
        id: "pen-body",
        trigger: ".part3", //trigger to part3 selector
        start: "top bottom-=270p", // start the trigger 
        end: `+=${(document.querySelector(".pen-top").clientHeight -22)}`, // end the trigger when it finish the heigth of pen-top selector
        pin: true,
        markers: true //show lines to know where start and end the markers
    }
  });
}

window.addEventListener("load", function () {
  init();
});
