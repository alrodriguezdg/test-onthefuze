//ANIMATIONS
gsap.registerPlugin(ScrollTrigger);

const titles = Array.from(document.querySelectorAll("h1, h2, h3, h4, h5"));
const paragraphs = Array.from(document.querySelectorAll("p"));
const medias = Array.from(document.querySelectorAll(".animate"));
const icons = Array.from(document.querySelectorAll(".icon-st"));
const buttons = Array.from(document.querySelectorAll(".btn"));
const cards = Array.from(document.querySelectorAll(".card"));

var btn = document.getElementsByClassName("btn");
var card = document.getElementsByClassName("card");
var icon = document.getElementsByClassName("icon");
var media = document.getElementsByClassName("animate");

//responsive
let mm = gsap.matchMedia();

mm.add("(min-width: 992px)", () => {
  document.body.onload = function () {
    titles.forEach((title) => {
      gsap
        .timeline({
          default: { ease: "power2.easeOut", duration: 1 },
          scrollTrigger: {
            trigger: title,
            start: "top top+=100%",
            end: "bottom",
            toggleActions: "play pause none reverse",
          },
        })
        .fromTo(title, { opacity: 0, y: 100 }, { opacity: 1, y: 0 });
    });

    paragraphs.forEach((p) => {
      gsap
        .timeline({
          default: { ease: "power2.easeOut", duration: 1 },
          scrollTrigger: {
            trigger: p,
            start: "top top+=100%",
            end: "bottom",
            toggleActions: "play pause none reverse",
          },
        })
        .fromTo(p, { opacity: 0, y: 100 }, { opacity: 1, y: 0 });
    });

    buttons.forEach((btn) => {
      gsap
        .timeline({
          default: { ease: "power2.easeOut", duration: 1 },
          scrollTrigger: {
            trigger: btn,
            start: "top top+=100%",
            end: "bottom",
            toggleActions: "play pause none reverse",
          },
        })
        .fromTo(btn, { opacity: 0, y: 100 }, { opacity: 1, y: 0 });
    });

    medias.forEach((media) => {
      gsap
        .timeline({
          default: { ease: "expo", duration: 3, delay: 2 },
          scrollTrigger: {
            trigger: media,
            start: "top top+=90%",
            end: "bottom",
            toggleActions: "play pause none reverse",
          },
        })
        .fromTo(media, { opacity: 0, y: 300 }, { opacity: 1, y: 0 });
    });

    icons.forEach((icon) => {
      gsap
        .timeline({
          default: { ease: "expo", duration: 3, delay: 2 },
          scrollTrigger: {
            trigger: icon,
            start: "top top+=100%",
            end: "bottom",
            toggleActions: "play pause none reverse",
          },
        })
        .fromTo(icon, { opacity: 0, y: 300 }, { opacity: 1, y: 0 });
    });

    cards.forEach((card) => {
      gsap
        .timeline({
          default: { ease: "expo", duration: 3, delay: 2 },
          scrollTrigger: {
            trigger: card,
            start: "top top+=80%",
            end: "bottom",
            toggleActions: "play pause none reverse",
          },
        })
        .fromTo(card, { opacity: 0, y: 300 }, { opacity: 1, y: 0 });
    });
  };
});

/*FIXED MENU*/

let scrollHeader = window.scrollY;
const header = document.querySelector("header");
const headerHeight = header.offsetHeight;

const addClass = () => header.classList.add("fixed");
const removeClass = () => header.classList.remove("fixed");

window.addEventListener("scroll", function () {
  scrollHeader = window.scrollY;

  if (scrollHeader >= headerHeight) {
    addClass();
  } else {
    removeClass();
  }

  console.log(scrollHeader);
});

//DATEPICKER

var toggleCalendar = document.getElementById("openCalendar");

const picker = datepicker("#datepicker", {
  formatter: (input, date, instance) => {
    const value = date.toLocaleDateString();
    input.value = value; // => '1/1/2099'
  },
});
toggleCalendar.addEventListener("click", (e) => {
  e.stopPropagation();

  // Toggle the calendar.
  const isHidden = picker.calendarContainer.classList.contains("qs-hidden");
  picker[isHidden ? "show" : "hide"]();
});
