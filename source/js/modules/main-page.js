const mainLoader = document.querySelector('.main-loader');
const mainContent = document.querySelector('.main-content');
const headerLogoLink = document.querySelector('.header__logo-link');
const mainContentAdditional = document.querySelector('.main-content__additional');

const showContent = () => {
  mainLoader.classList.add('main-loader--hidden');
  document.querySelector('body').classList.remove('body-modal');
  if (mainContent) {
    mainContent.classList.remove('main-content--before-shown');
  }
};

const initMainPage = () => {
  document.addEventListener('click', function (evt) {
    if (mainLoader && (mainLoader === evt.target || mainLoader.contains(evt.target))) {
      showContent();
    }

    if (mainContentAdditional && !(mainLoader && (mainLoader === evt.target || mainLoader.contains(evt.target))) && !(headerLogoLink && (headerLogoLink === evt.target || headerLogoLink.contains(evt.target)))) {
      mainContentAdditional.classList.toggle('main-content__additional--out');
    }
  });

  document.addEventListener('keydown', function (evt) {
    if (mainLoader && evt.code === 'Enter') {
      showContent();
    }
  });
};

export {initMainPage};
