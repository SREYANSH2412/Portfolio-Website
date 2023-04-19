'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}




// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

// ---------------------------------------------------------------------------

  // $(document).ready(function() {
  //   anime({
  //     targets: '.art-preloader .art-preloader-content',
  //     opacity: [0, 1],
  //     delay: 200,
  //     duration: 600,
  //     easing: 'linear',
  //     complete: function(anim) {

  //     }
  //   });
  //   anime({
  //     targets: '.art-preloader',
  //     opacity: [1, 0],
  //     delay: 2200,
  //     duration: 400,
  //     easing: 'linear',
  //     complete: function(anim) {
  //       $('.art-preloader').css('display', 'none');
  //     }
  //   });
  // });

  // var bar = new ProgressBar.Line(preloader, {
  //   strokeWidth: 1.7,
  //   easing: 'easeInOut',
  //   duration: 1400,
  //   delay: 750,
  //   trailWidth: 1.7,
  //   svgStyle: {
  //     width: '100%',
  //     height: '100%'
  //   },
  //   step: (state, bar) => {
  //     bar.setText(Math.round(bar.value() * 100) + ' %');
  //   }
  // });

  // bar.animate(1);


  // var bar = new ProgressBar.Circle(circleprog1, {
  //   strokeWidth: 7,
  //   easing: 'easeInOut',
  //   duration: 1400,
  //   delay: 2500,
  //   trailWidth: 7,
  //   step: function(state, circle) {
  //     var value = Math.round(circle.value() * 100);
  //     if (value === 0) {
  //       circle.setText('');
  //     } else {
  //       circle.setText(value);
  //     }
  //   }
  // });

  // bar.animate(1);

  // var bar = new ProgressBar.Circle(circleprog2, {
  //   strokeWidth: 7,
  //   easing: 'easeInOut',
  //   duration: 1400,
  //   delay: 2600,
  //   trailWidth: 7,
  //   step: function(state, circle) {
  //     var value = Math.round(circle.value() * 100);
  //     if (value === 0) {
  //       circle.setText('');
  //     } else {
  //       circle.setText(value);
  //     }
  //   }
  // });

  // bar.animate(0.75);

  // var bar = new ProgressBar.Circle(circleprog3, {
  //   strokeWidth: 7,
  //   easing: 'easeInOut',
  //   duration: 1400,
  //   delay: 2700,
  //   trailWidth: 7,
  //   step: function(state, circle) {
  //     var value = Math.round(circle.value() * 100);
  //     if (value === 0) {
  //       circle.setText('');
  //     } else {
  //       circle.setText(value);
  //     }
  //   }
  // });

  // bar.animate(0.6);

  // var bar = new ProgressBar.Line(lineprog1, {
  //   strokeWidth: 1.72,
  //   easing: 'easeInOut',
  //   duration: 1400,
  //   delay: 2800,
  //   trailWidth: 1.72,
  //   svgStyle: {
  //     width: '100%',
  //     height: '100%'
  //   },
  //   step: (state, bar) => {
  //     bar.setText(Math.round(bar.value() * 100) + ' %');
  //   }
  // });

  // bar.animate(.9);

  // var bar = new ProgressBar.Line(lineprog2, {
  //   strokeWidth: 1.72,
  //   easing: 'easeInOut',
  //   duration: 1400,
  //   delay: 2900,
  //   trailWidth: 1.72,
  //   svgStyle: {
  //     width: '100%',
  //     height: '100%'
  //   },
  //   step: (state, bar) => {
  //     bar.setText(Math.round(bar.value() * 100) + ' %');
  //   }
  // });

  // bar.animate(.95);

  // var bar = new ProgressBar.Line(lineprog3, {
  //   strokeWidth: 1.72,
  //   easing: 'easeInOut',
  //   duration: 1400,
  //   delay: 3000,
  //   trailWidth: 1.72,
  //   svgStyle: {
  //     width: '100%',
  //     height: '100%'
  //   },
  //   step: (state, bar) => {
  //     bar.setText(Math.round(bar.value() * 100) + ' %');
  //   }
  // });

  // bar.animate(.75);

  // var bar = new ProgressBar.Line(lineprog4, {
  //   strokeWidth: 1.72,
  //   easing: 'easeInOut',
  //   duration: 1400,
  //   delay: 3100,
  //   trailWidth: 1.72,
  //   svgStyle: {
  //     width: '100%',
  //     height: '100%'
  //   },
  //   step: (state, bar) => {
  //     bar.setText(Math.round(bar.value() * 100) + ' %');
  //   }
  // });

  // bar.animate(.65);

  // var bar = new ProgressBar.Line(lineprog5, {
  //   strokeWidth: 1.72,
  //   easing: 'easeInOut',
  //   duration: 1400,
  //   delay: 3200,
  //   trailWidth: 1.72,
  //   svgStyle: {
  //     width: '100%',
  //     height: '100%'
  //   },
  //   step: (state, bar) => {
  //     bar.setText(Math.round(bar.value() * 100) + ' %');
  //   }
  // });

  // bar.animate(.85);
