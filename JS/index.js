const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 10000,
  },
  zoom: {
    maxRatio: 5,
  }


});


const gallerySwiper = new Swiper('.gallery-swiper', {
  loop: false,
  navigation: {
    nextEl: '.gallery__button-right',
    prevEl: '.gallery__button-left',
  },

  pagination: {
    el: '.swiper-pagination-fraction',
    type: 'fraction',
  },



  breakpoints: {
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 50
    },
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 34
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0
    }
  },
});
let choicesItem;
const element = document.querySelector('.js-choice');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  
});
const choicesElement = document.querySelector(`.choices__item--choice[data-id="1"]`)
choicesElement.style.display = 'none';
element.addEventListener('choice',function(e) {
  choicesItem = e.detail.choice;
  setTimeout(()=>{
    const choicesElement = document.querySelector(`.choices__item--choice[data-id="${choicesItem.id}"]`)
    choicesElement.style.display = 'none';
  },0)
  
  console.log(choicesItem, 'choice');
})

const items = document.querySelectorAll('.events__item');
const btn = document.querySelector('.events__btn');
btn.addEventListener('click', function()  {
  items.forEach(i => {
    i.style.display = "block";
  })
  this.style.display = "none"
})

$(function () {
  $("#accordion").accordion({
    collapsible: true,
    heightStyle: "content"
  });
});

// $(function () {
//   $("#accordion-checkbox").accordion({
//     collapsible: true
//   });
// });




let publicationSwiper;

function swiperPublicationInit () {
  if(window.outerWidth <= 570) {
    // console.log('pub', publicationSwiper.el);
    if(publicationSwiper && publicationSwiper.el && publicationSwiper.el.classList.contains('swiper-initialized')) {
      console.log('dest', publicationSwiper.classList)
      publicationSwiper.destroy();
    } 
  } else if((!publicationSwiper || !publicationSwiper.el) || !publicationSwiper.el.classList.contains('swiper-initialized')) {
    publicationSwiper = new Swiper('.swiper-publication', {
      // Optional parameters
      loop: false,
      navigation: {
        nextEl: '.publication__button-right',
        prevEl: '.publication__button-left',
      },
    
      pagination: {
        el: '.swiper-publication-fraction',
        type: 'fraction',
      },
    
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50,
    
      breakpoints: {
        1200: {
          slidesPerView: 3,
          grid: {
            rows: 1
          },
          spaceBetween: 50
        },
        500: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          grid: {
            rows: 1
          },
          spaceBetween: 34
        },
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          grid: {
            rows: 1
          },
          spaceBetween: 10
        }
      },
    
    });
  }
}
swiperPublicationInit();



const projectsnSwiper = new Swiper('.swiper-projects', {
  // Optional parameters
  loop: false,
  navigation: {
    nextEl: '.projects__button-right',
    prevEl: '.projects__button-left',
  },

  spaceBetween: 50,

  breakpoints: {
    1201: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    },
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 42
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 10
    }
  },

  
});


// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.76, 37.64],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 12

  }, {
    autoFitToViewport: 'always'

  });


  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/Placemark.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-3, -42]
  });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
}

document.querySelectorAll(".catalog__item").forEach(item => {
  item.addEventListener("click", function () {
    let btn = this;
    btn.classList.add("item-active");
    document.querySelectorAll(".catalog__item").forEach(el => (el != btn) ? el.classList.remove("item-active") : false);
  })
})


var selector = document.getElementById("input-tel");

var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 10
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.Inputmask.unmaskedvalue()
        return Number(phone) && phone.lenght === 10
      }
    },
    mail: {
      required: true,
      email: true
    },
  },
  messages: {
    name: 'Недопустимый формат',
    tel: 'Недопустимый формат',
  },

});



document.querySelectorAll(".hero__item-btn").forEach(item => {
  item.addEventListener("click", function () {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".btn-list");

    document.querySelectorAll(".hero__item-btn").forEach(el => {
      if (el != btn) {
        el.classList.remove("button-active");
      }
    });

    document.querySelectorAll(".btn-list").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("btn-list-active");
      }
    })
    dropdown.classList.toggle("btn-list-active");
    btn.classList.toggle("button-active")
  })
})


document.addEventListener("click", function (e) {
  let target = e.target;
  if (!target.closest(".hero__list")) {
    document.querySelectorAll(".btn-list").forEach(el => {
      el.classList.remove("btn-list-active");
    })
    document.querySelectorAll(".hero__item-btn").forEach(el => {
      el.classList.remove("button-active");
    });
  }
})


$(document).ready(function () {
  const flags = Array.from(document.querySelectorAll('.catalog__button'));
  const flagsContentsAll = Array.from(document.querySelectorAll(`.catalog *`));

  const Contents = Array.from(document.querySelectorAll(`.catalog [data-flag="it"]`));

  Contents.forEach(i => {
    i.classList.add("catalog-active")
  })
  flags.forEach(item => {

    item.addEventListener("click", function (e) {
      $("#accordion").accordion('option', 'active', false);

      const type = e.target.dataset.flag
      const flagsContents = Array.from(document.querySelectorAll(`.catalog [data-flag="${type}"]`));

      //  const currentContent = flagsContents.find(i=>i.dataset.flag === type)
      flagsContentsAll.forEach(i => {
        i.classList.remove("catalog-active")
      })
      flagsContents.forEach(i => {
        i.classList.add("catalog-active")
      })
    })
  })

})
  


document.querySelectorAll('.catalog__artist').forEach(function(tabs) {
  tabs.addEventListener('click', function(event){
    const path = event.target.dataset.path;
    console.log(path);
    document.querySelectorAll('.artist-plagIn').forEach(function(tabContent){
      if(tabContent.dataset.target === path) {
        tabContent.classList.add('catalog-active');
      } else {
        tabContent.classList.remove('catalog-active');
      }
    })
  

  })
})



 
    

tippy('.tooltip-one', {
  content: 'Пример современных тенденций - современная методология разработки',
});

tippy('.tooltip-two', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
});

tippy('.tooltip-three', {
  content: 'В стремлении повысить качество',
});


document.querySelector(".burger").addEventListener('click', function () {
  document.querySelector('.overlay').classList.add('is-active')
  document.body.style.overflowY = 'hidden';
})

document.querySelector(".overlay-x").addEventListener('click', function () {
  document.querySelector('.overlay').classList.remove('is-active')
  document.body.style.overflowY = 'initial';
})




const activeSearchClass = 'input-wrapper--visible';
const searches = document.querySelectorAll('.header__nav-input-wrapper');
const searchButtons = document.querySelectorAll('.header__loupe');

searchButtons.forEach(buttonSearch => {
  buttonSearch.addEventListener('click', (e) => {
    searches.forEach(s => {
      if (!s.classList.contains(activeSearchClass)) {
        s.classList.add(activeSearchClass)
      }
    });

    const search = e.path.find((i) => i.classList.contains('header__nav-input-wrapper'));
    
    search.classList.remove(activeSearchClass);
  })
})

document.querySelectorAll('.header__cross').forEach(cross => {
  cross.addEventListener('click', (e) => {
  console.log('x', e )
  searches.forEach(s => {
    if (!s.classList.contains(activeSearchClass)) {
      s.classList.add(activeSearchClass)
    }
  });

  const search = e.path.find((i) => i.classList.contains('header__nav-input-wrapper'));
  
  search.classList.remove(activeSearchClass);
})
})

const eventsSwiper = document.querySelector(".swiper-events");
let eventsSlider;

function initSlider () {
  console.log(window.outerWidth);
  if(window.outerWidth <= 570) {
    console.dir(eventsSwiper);
    if(eventsSwiper.classList.contains('swiper-initialized')) {
      return
    }
    eventsSlider = new Swiper( eventsSwiper, {
      // Optional parameters
      loop: false,
      pagination: {
        el: '.eventsSwiper-pagination',
        clickable: true
      },
    
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50,
    
      breakpoints: {

        769: {
          slidesPerView: 3,
          grid: {
            rows: 1
          },
          spaceBetween: 27
        },
        576: {
          slidesPerView: 2,
          grid: {
            rows: 1
          },
          spaceBetween: 34
        },
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          grid: {
            rows: 1
          },
          spaceBetween: 0
        }
      },
    })
  } else if(eventsSwiper.classList.contains('swiper-initialized')) {
    eventsSlider.destroy();
  }
}

initSlider();

window.addEventListener("resize", () => {
  initSlider();
  swiperPublicationInit();
});


let btnCheckbox = document.querySelector(".checkbox-title");
let checkboxWrapper =  document.querySelector('.checkbox-wrapper');
btnCheckbox.addEventListener('click', function() {
  checkboxWrapper.classList.toggle('checkbox-wrapper-active');
  document.querySelector('.checkbox-title-arrow').classList.toggle('arrow-rotate');
  
  document.querySelectorAll(".checkbox").forEach(el => {
    el.classList.toggle('active');
    let checkbox = el.querySelector('.check');

    if(checkbox.checked) {
      el.classList.add('active');
    }

  })
});

document.querySelectorAll('.checkbox__label').forEach(el => {
  el.addEventListener('click', function(e) {
    let label = e.target;
    if(!checkboxWrapper.classList.contains('checkbox-wrapper-active')) {
      label.classList.remove('active');
      label.parentElement.classList.remove('active');
    }
    
  })
})

document.querySelectorAll('.checkbox__cross').forEach(el => {
  el.addEventListener('click', function(e){
    if(!checkboxWrapper.classList.contains('checkbox-wrapper-active')) {
      el.parentElement.parentElement.classList.remove('active');
    }
  })
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.overlay').classList.remove('is-active');
      document.body.style.overflowY = 'initial';

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


