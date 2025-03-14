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
  if (
    !state.infoSectionDisplayed &&
    scrollPosition > state.infoSectionScrollBreakpoint
  ) {
    const infoSectionItems = document.querySelectorAll('.info-section-item');

    infoSectionItems.forEach((elem, idx) => {
      elem.style.animationDelay = `${idx}s`;
      elem.classList.add('from-top');
    });

    state.infoSectionDisplayed = true;
  }
}

function showShoutOutSection(scrollPosition, startPosition, childNumberIndex) {
  if (
    !state.shoutOutSectionDisplayed[childNumberIndex] &&
    scrollPosition > startPosition
  ) {
    const shoutOutItem = document.querySelectorAll('.shout-out-section')[childNumberIndex];
    const img = shoutOutItem.querySelector('img');
    const textSection = shoutOutItem.querySelector('.shout-out-section-info');

    if (childNumberIndex === 0) {
      img.classList.add('from-left');
    } else {
      img.classList.add('from-right');
    }
    
    textSection.classList.add('from-top');

    state.shoutOutSectionDisplayed[childNumberIndex] = true;
  }
}

function updateScrollDisplay(scrollPosition) {
  document.querySelector(".current-scroll").innerHTML = scrollPosition;
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
