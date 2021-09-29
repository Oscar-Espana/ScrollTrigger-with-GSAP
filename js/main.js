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
    }
  });

  gsap.set(".part4", {y: "-547px"});
  gsap.set(".part5", {y: "-722px"});
  gsap.set(".part6", {y: "-842px"});
  
}

window.addEventListener("load", function () {
  init();
});
