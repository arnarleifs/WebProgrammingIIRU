const PromiseDemonstrations = {
  Simple: "promise-simple",
  All: "promise-all",
  AllSettled: "promise-all-settled",
  Race: "promise-race",
  Any: "promise-any",
  ForAwait: "for-await",
};

const getPromises = () => [
  new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "1 second");
  }),
  new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "2 seconds");
  }),
  new Promise((resolve, reject) => {
    setTimeout(reject, 5000, "5 seconds");
  }),
  new Promise((resolve, reject) => {
    setTimeout(resolve, 10000, "10 seconds");
  }),
];

function getBunnyCard(identifier, index) {
  return document.querySelector(
    `.demonstration-card.${identifier} .bunny-section .bunny-card:nth-child(${index})`
  );
}

function manipulateBunnyCard(bunnyCard, updateFn) {
  const bunny = bunnyCard.querySelector(".bunny");
  const bunnyMessage = bunnyCard.querySelector(".bunny-message");

  updateFn(bunny, bunnyMessage);
}

function manipulateBunnyCards(bunnyCards, updateFn) {
  bunnyCards.forEach((bunnyCard) => manipulateBunnyCard(bunnyCard, updateFn));
}

function showMessageAndAnimate(bunnyCard, promiseValue, elapsedTimeInSeconds) {
  manipulateBunnyCard(bunnyCard, function (bunny, bunnyMessage) {
    bunny.classList.add("peeking");
    bunnyMessage.innerHTML = `Returning '${promiseValue}'. The elapsed time was: ${elapsedTimeInSeconds} seconds.`;
  });
}

function resetBunnyCards(identifier) {
  const bunnyCards = document.querySelectorAll(
    `.demonstration-card.${identifier} .bunny-section .bunny-card`
  );
  manipulateBunnyCards(bunnyCards, (bunny, bunnyMessage) => {
    bunny.classList.remove("peeking", "hurt", "out-of-race");
    bunnyMessage.innerHTML = "";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Simple promise
  document
    .getElementById(PromiseDemonstrations.Simple)
    .addEventListener("click", function () {
      resetBunnyCards(PromiseDemonstrations.Simple);
      const startDate = new Date();
      const promise = new Promise((resolve) => {
        setTimeout(resolve, 2000, "Simple promise");
      });

      promise.then((value) => {
        const endDate = new Date();
        const elapsedTimeInSeconds = (endDate - startDate) / 1000;
        const bunnyCard = getBunnyCard(PromiseDemonstrations.Simple, 1);
        showMessageAndAnimate(bunnyCard, value, elapsedTimeInSeconds);
      });
    });

  // Promise.all
  document
    .getElementById(PromiseDemonstrations.All)
    .addEventListener("click", function () {
      resetBunnyCards(PromiseDemonstrations.All);
      const startDate = new Date();

      Promise.all(getPromises())
        .then((values) => {
          const endDate = new Date();
          const elapsedTimeInSeconds = (endDate - startDate) / 1000;
          values.forEach((value, idx) => {
            const bunnyCard = getBunnyCard(PromiseDemonstrations.All, idx + 1);
            showMessageAndAnimate(bunnyCard, value, elapsedTimeInSeconds);
          });
        })
        .catch((reason) => {
          const endDate = new Date();
          const elapsedTimeInSeconds = (endDate - startDate) / 1000;
          const bunnyCards = document.querySelectorAll(
            `.demonstration-card.${PromiseDemonstrations.All} .bunny-section .bunny-card`
          );

          manipulateBunnyCards(bunnyCards, function (bunny, bunnyMessage) {
            bunny.classList.add("hurt");
            bunnyMessage.innerHTML = `A promise was rejected: '${reason}'. Time elapsed: ${elapsedTimeInSeconds} seconds.`;
          });
        });
    });

  // Promise.allSettled
  document
    .getElementById(PromiseDemonstrations.AllSettled)
    .addEventListener("click", function () {
      resetBunnyCards(PromiseDemonstrations.AllSettled);
      const startDate = new Date();

      Promise.allSettled(getPromises()).then((promises) => {
        const endDate = new Date();
        const elapsedTimeInSeconds = (endDate - startDate) / 1000;

        promises.forEach((promise, idx) => {
          const bunnyCard = getBunnyCard(
            PromiseDemonstrations.AllSettled,
            idx + 1
          );

          if (promise.status === "fulfilled") {
            showMessageAndAnimate(
              bunnyCard,
              promise.value,
              elapsedTimeInSeconds
            );
          }

          if (promise.status === "rejected") {
            manipulateBunnyCard(bunnyCard, (bunny, bunnyMessage) => {
              bunny.classList.add("hurt");
              bunnyMessage.innerHTML = `A promise was rejected: '${promise.reason}'. Time elapsed: ${elapsedTimeInSeconds} seconds.`;
            });
          }
        });
      });
    });

  // Promise.race
  document
    .getElementById(PromiseDemonstrations.Race)
    .addEventListener("click", function () {
      resetBunnyCards(PromiseDemonstrations.Race);
      const startDate = new Date();

      Promise.race(getPromises()).then(
        // On resolved
        (value) => {
          const endDate = new Date();
          const elapsedTimeInSeconds = (endDate - startDate) / 1000;
          const bunnyCard = getBunnyCard(PromiseDemonstrations.Race, 1);
          showMessageAndAnimate(bunnyCard, value, elapsedTimeInSeconds);

          const bunnyCards = document.querySelectorAll(
            `.demonstration-card.${PromiseDemonstrations.Race} .bunny-section .bunny-card:not(:first-child)`
          );

          manipulateBunnyCards(bunnyCards, (bunny, bunnyMessage) => {
            bunny.classList.add("out-of-race");
            bunnyMessage.innerHTML = `Out of race! Time elapsed: ${elapsedTimeInSeconds} seconds.`;
          });
        },
        // On rejected
        (reason) => {
          const endDate = new Date();
          const elapsedTimeInSeconds = (endDate - startDate) / 1000;
          const bunnyCard = getBunnyCard(PromiseDemonstrations.Race, 1);
          manipulateBunnyCard(bunnyCard, (bunny, bunnyMessage) => {
            bunny.classList.add("hurt");
            bunnyMessage.innerHTML = `A promise was rejected: '${reason}'. Time elapsed: ${elapsedTimeInSeconds} seconds.`;
          });

          const bunnyCards = document.querySelectorAll(
            `.demonstration-card.${PromiseDemonstrations.Race} .bunny-section .bunny-card:not(:first-child)`
          );

          manipulateBunnyCards(bunnyCards, (bunny, bunnyMessage) => {
            bunny.classList.add("out-of-race");
            bunnyMessage.innerHTML = `Out of race! Time elapsed: ${elapsedTimeInSeconds} seconds.`;
          });
        }
      );
    });

  // Promise.any
  document
    .getElementById(PromiseDemonstrations.Any)
    .addEventListener("click", function () {
      resetBunnyCards(PromiseDemonstrations.Any);
      const startDate = new Date();

      Promise.any(getPromises())
        .then((value) => {
          const endDate = new Date();
          const elapsedTimeInSeconds = (endDate - startDate) / 1000;
          const bunnyCard = getBunnyCard(PromiseDemonstrations.Any, 1);
          showMessageAndAnimate(bunnyCard, value, elapsedTimeInSeconds);

          const bunnyCards = document.querySelectorAll(
            `.demonstration-card.${PromiseDemonstrations.Any} .bunny-section .bunny-card:not(:first-child)`
          );

          manipulateBunnyCards(bunnyCards, (bunny, bunnyMessage) => {
            bunny.classList.add("out-of-race");
            bunnyMessage.innerHTML = `Out of race! Time elapsed: ${elapsedTimeInSeconds} seconds.`;
          });
        })
        .catch((error) => {
          const endDate = new Date();
          const elapsedTimeInSeconds = (endDate - startDate) / 1000;
          const bunnyCards = document.querySelectorAll(
            `.demonstration-card.${PromiseDemonstrations.Any} .bunny-section .bunny-card`
          );
          manipulateBunnyCards(bunnyCards, (bunny, bunnyMessage) => {
            bunny.classList.add("hurt");
            bunnyMessage.innerHTML = `A promise was rejected: '${error}'. Time elapsed: ${elapsedTimeInSeconds} seconds.`;
          });
        });
    });

  // for ... await
  document
    .getElementById(PromiseDemonstrations.ForAwait)
    .addEventListener("click", async function () {
      resetBunnyCards(PromiseDemonstrations.ForAwait);
      let number = 1;
      const startDate = new Date();

      try {
        for await (const promise of getPromises()) {
          const endDate = new Date();
          const elapsedTimeInSeconds = (endDate - startDate) / 1000;
          const bunnyCard = getBunnyCard(
            PromiseDemonstrations.ForAwait,
            number++
          );
          showMessageAndAnimate(bunnyCard, promise, elapsedTimeInSeconds);
        }
      } catch (err) {
        const endDate = new Date();
        const elapsedTimeInSeconds = (endDate - startDate) / 1000;
        const bunnyCards = document.querySelectorAll(
          `.demonstration-card.${PromiseDemonstrations.ForAwait} .bunny-section .bunny-card:nth-child(n+${number})`
        );

        manipulateBunnyCards(bunnyCards, (bunny, bunnyMessage) => {
          bunny.classList.add("hurt");
          bunnyMessage.innerHTML = `A promise was rejected: '${err}'. Time elapsed: ${elapsedTimeInSeconds} seconds.`;
        });
      }
    });
});
