gsap.registerPlugin(ScrollTrigger);

function getTopPartsHeight() {
    return (document.querySelector(".pen-top").clientHeight -22)
}

function init() {
  gsap.set(".part3", {
    y: () => {
      return -getTopPartsHeight();
    },
    scrollTrigger: {
        id: "pen-body",
        trigger: ".part3", //trigger to part3 selector
        start: "top bottom-=270p", // start the trigger 
        end: `+=${getTopPartsHeight()}`, // end the trigger when it finish the heigth of pen-top selector
        pin: true,
        pinSpacing: false,
        markers: true //show lines to know where start and end the markers
    }
  });
}

window.addEventListener("load", function () {
  init();
});
