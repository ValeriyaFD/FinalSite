function swiperBrand () {
    new Swiper('.brand-swiper', {
      cssMode: 'true',
      pagination: {
        el: '.brand-pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          enabled: true,
          slidesPerView: 1.15,
          spaceBetween: 16,
        },
        768: {
          enabled: false,
          slidesPerView: 'auto',
          spaceBetween: 'auto',
        }
      }
    });
  }

function swiperRepair () {
    new Swiper('.repair-swiper', {
      cssMode: 'true',
      pagination: {
        el: '.pagination-repair',
        clickable: true,
      },
      breakpoints: {
        320: {
          enabled: true,
          slidesPerView: 1.15,
          spaceBetween: 16,
        },
        768: {
          enabled: false,
          slidesPerView: 'auto',
          spaceBetween: 'auto',
        }
      }
    });
  }

function swiperPrice () {
    new Swiper('.price-swiper', {
        cssMode: 'true',
        pagination: {
        el: '.pagination-price',
        clickable: true,
        },
        breakpoints: {
        320: {
            enabled: true,
            slidesPerView: 1.15,
            spaceBetween: 16,
        },
        768: {
            enabled: false,
            slidesPerView: 'auto',
            spaceBetween: 'auto',
        }
        }
    });
}
swiperBrand();
swiperRepair();
swiperPrice();