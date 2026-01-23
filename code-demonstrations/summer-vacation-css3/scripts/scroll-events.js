const state = {
  infoSectionDisplayed: false,
  shoutOutSectionDisplayed: [false, false],
  infoSectionScrollBreakpoint: 0,
  firstShoutOutSectionScrollBreakpoint: 0,
  secondShoutOutSectionScrollBreakpoint: 0,
};

document.addEventListener("DOMContentLoaded", () => {
  const infoSection = document.querySelector(".info-section");
  const firstShoutOutSection =
    document.querySelectorAll(".shout-out-section")[0];
  const secondShoutOutSection =
    document.querySelectorAll(".shout-out-section")[1];

  setScrollBreakpoint("infoSectionScrollBreakpoint", infoSection);
  setScrollBreakpoint(
    "firstShoutOutSectionScrollBreakpoint",
    firstShoutOutSection
  );
  setScrollBreakpoint(
    "secondShoutOutSectionScrollBreakpoint",
    secondShoutOutSection
  );
});

function setScrollBreakpoint(key, elem) {
  state[key] = elem.offsetTop - elem.offsetHeight;
}

function showInfoSection(scrollPosition) {
  if (!state.infoSectionDisplayed && scrollPosition > state.infoSectionScrollBreakpoint) {
    const infoSections = document.querySelectorAll('.features__item');
    infoSections.forEach((elem, idx) => {
      elem.classList.add('from-top');
      const animationDelay = idx === 0 ? 0 : idx / 2;
      elem.style.animationDelay = `${animationDelay}s`;
    });

    state.infoSectionDisplayed = true;
  }
}

function showShoutOutSection(scrollPosition, startPosition, childNumberIndex) {
  if (scrollPosition > startPosition && !state.shoutOutSectionDisplayed[childNumberIndex]) {
    const promotionImage = document.querySelectorAll('.promo__image')[childNumberIndex];
    const promotionContent = document.querySelectorAll('.promo__content')[childNumberIndex];

    const animationClass = childNumberIndex === 0 ? 'from-left' : 'from-right';

    promotionImage.classList.add(animationClass);
    promotionContent.classList.add('from-top');

    state.shoutOutSectionDisplayed[childNumberIndex] = true;
  }
}

function updateScrollDisplay(scrollPosition) {
  document.querySelector(".scroll-tracker").innerHTML = scrollPosition;
}

document.addEventListener("scroll", function (e) {
  const scrollPosition = window.scrollY;

  window.requestAnimationFrame(function () {
    updateScrollDisplay(scrollPosition);
    showInfoSection(scrollPosition);
    showShoutOutSection(
      scrollPosition,
      state.firstShoutOutSectionScrollBreakpoint,
      0
    );
    showShoutOutSection(
      scrollPosition,
      state.secondShoutOutSectionScrollBreakpoint,
      1
    );
  });
});
