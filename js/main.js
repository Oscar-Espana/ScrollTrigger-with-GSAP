gsap.registerPlugin(ScrollTrigger);

function getTopPartsHeight() {
  return document.querySelector(".pen-top").clientHeight - 22;
}

function init() {
  gsap.set(".part3", {
    y: () => {
      return -getTopPartsHeight();
    },
    scrollTrigger: {
      id: "pen-body",
      trigger: ".part3", //trigger to part3 selector
      start: "top bottom-=270px", // start the trigger
      end: `+=${getTopPartsHeight()}`, // end the trigger when it finish the heigth of pen-top selector
      pin: true,
      pinSpacing: false,
    },
  });

  //add class to all parts to reveal the text
  const allParts = gsap.utils.toArray(".part");

  allParts.forEach((part, index) => {
    let startPosition = "top center";

    if (index === 2) {
      startPosition = `top+=${getTopPartsHeight()} center`;
    }
    gsap.set(part, {
      scrollTrigger: {
        id: `${part.getAttribute("class")}`,
        trigger: part,
        start: startPosition,
        toggleClass: "fade-in",
      },
    });
  });

  const partTopOffsets = [547, 722, 842];

  function fixPart(element, offset, index) {
    gsap.set(element, { y: -offset });

    //tween the tip of the pen back to 0
    gsap.to(element, {
      y: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".pen-body", //trigger to pen-body selector
        start: "top bottom-=640p", // start the trigger
        end: `+=${offset}`, // end the trigger when it finish the heigth of pen-top selector
        scrub: true,
      },
    });
  }

  gsap.utils.toArray([".part4", ".part5", ".part6"]).forEach((part, index) => {
    fixPart(part, partTopOffsets[index], index);
  });
}

window.addEventListener("load", function () {
  init();
});
