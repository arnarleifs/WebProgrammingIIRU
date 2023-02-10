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
    setTimeout(resolve, 5000, "5 seconds");
  }),
  new Promise((resolve, reject) => {
    setTimeout(reject, 10000, "10 seconds");
  }),
];

const getBunnyCard = (identifier, index) => {
  return document.querySelector(`.demonstration-card.${identifier} .bunny-section .bunny-card:nth-child(${index})`);
};

const manipulateBunnyCard = (bunnyCard, updateFn) => {
  const bunny = bunnyCard.querySelector('.bunny');
  const bunnyMessage = bunnyCard.querySelector('.bunny-message');

  updateFn(bunny, bunnyMessage);
}

const manipulateBunnyCards = (bunnyCards, updateFn) => {
  bunnyCards.forEach(bunnyCard => {
    manipulateBunnyCard(bunnyCard, updateFn);
  });
}

const showMessageAndAnimate = (bunnyCard, value, elapsedTimeInSeconds) => {
  manipulateBunnyCard(bunnyCard, (bunny, bunnyMessage) => {
    bunny.classList.add('peeking');
    bunnyMessage.innerHTML = `Downloading ${value}. The elapsed time in seconds: ${elapsedTimeInSeconds}`;
  });
};

const resetBunnyCards = (identifier) => {
  const bunnyCards = document.querySelectorAll(`.demonstration-card.${identifier} .bunny-section .bunny-card`);

  manipulateBunnyCards(bunnyCards, (bunny, bunnyMessage) => {
    bunny.classList.remove('peeking', 'hurt', 'out-of-race');
    bunnyMessage.innerHTML = "";
  });
};

const getElapsedTimeInSeconds = (startDate) => {
  const endDate = new Date();
  return (endDate - startDate) / 1000;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById(PromiseDemonstrations.Simple).addEventListener('click', () => {
    resetBunnyCards(PromiseDemonstrations.Simple);
    const startDate = new Date();

    const promise = new Promise((resolve, reject) => {
      setTimeout(resolve, 2000, 'Simple promise');
    });

    promise.then(data => {
      const elapsedTimeInSeconds = getElapsedTimeInSeconds(startDate);

      const bunnyCard = getBunnyCard(PromiseDemonstrations.Simple, 1);
      showMessageAndAnimate(bunnyCard, data, elapsedTimeInSeconds);
    }).catch(reason => {
      const bunnyCard = getBunnyCard(PromiseDemonstrations.Simple, 1);
      manipulateBunnyCard(bunnyCard, (bunny, bunnyMessage) => {
        bunny.classList.add('hurt');
        bunnyMessage.innerHTML = `Promise was rejected: ${reason}.`;
      });
    });
  });

  document.getElementById(PromiseDemonstrations.All).addEventListener('click', () => {
    resetBunnyCards(PromiseDemonstrations.All);
    const startDate = new Date();

    Promise.all(getPromises()).then(values => {
      const elapsedTimeInSeconds = getElapsedTimeInSeconds(startDate);

      values.forEach((value, idx) => {
        const bunnyCard = getBunnyCard(PromiseDemonstrations.All, idx + 1);
        showMessageAndAnimate(bunnyCard, value, elapsedTimeInSeconds);
      });
    }).catch(reason => {
      const elapsedTimeInSeconds = getElapsedTimeInSeconds(startDate);
      const bunnyCards = document.querySelectorAll(`.demonstration-card.${PromiseDemonstrations.All} .bunny-section .bunny-card`);
      
      manipulateBunnyCards(bunnyCards, (bunny, bunnyMessage) => {
        bunny.classList.add("hurt");
        bunnyMessage.innerHTML = `Promise rejected: ${reason}. Elapsed time in seconds: ${elapsedTimeInSeconds}`;
      });
    });
  });

  document.getElementById(PromiseDemonstrations.AllSettled).addEventListener('click', () => {
    resetBunnyCards(PromiseDemonstrations.AllSettled);
    const startDate = new Date();

    Promise.allSettled(getPromises()).then(promises => {
      const elapsedTimeInSeconds = getElapsedTimeInSeconds(startDate);

      promises.forEach((promise, idx) => {
        const bunnyCard = getBunnyCard(PromiseDemonstrations.AllSettled, idx + 1);

        if (promise.status === 'fulfilled') {
          showMessageAndAnimate(bunnyCard, promise.value, elapsedTimeInSeconds);
        } else {
          manipulateBunnyCard(bunnyCard, (bunny, bunnyMessage) => {
            bunny.classList.add('hurt');
            bunnyMessage.innerHTML = `Promise was rejected: ${promise.reason}. Time elapsed: ${elapsedTimeInSeconds}`;
          });
        }
      });
    });
  });

  document.getElementById(PromiseDemonstrations.Race).addEventListener('click', () => {
    resetBunnyCards(PromiseDemonstrations.Race);
    const startDate = new Date();

    Promise.race(getPromises()).then(value => {
      const elapsedTimeInSeconds = getElapsedTimeInSeconds(startDate);
      const bunnyCard = getBunnyCard(PromiseDemonstrations.Race, 1);
      showMessageAndAnimate(bunnyCard, value, elapsedTimeInSeconds);

      const bunnyCards = document.querySelectorAll(`.demonstration-card.${PromiseDemonstrations.Race} .bunny-section .bunny-card:not(:first-child)`);

      manipulateBunnyCards(bunnyCards, (bunny, bunnyMessage) => {
        bunny.classList.add('out-of-race');
        bunnyMessage.innerHTML = `Out of race! Elapsed time: ${elapsedTimeInSeconds}`;
      });
    }, (error) => {
      const elapsedTimeInSeconds = getElapsedTimeInSeconds(startDate);
      const bunnyCard = getBunnyCard(PromiseDemonstrations.Race, 1);
      manipulateBunnyCard(bunnyCard, (bunny, bunnyMessage) => {
        bunny.classList.add('hurt');
        bunnyMessage.innerHTML = `Promise was rejected: ${error}. Elapsed time in seconds: ${elapsedTimeInSeconds}`;
      });
      const bunnyCards = document.querySelectorAll(`.demonstration-card.${PromiseDemonstrations.Race} .bunny-section .bunny-card:not(:first-child)`);
      manipulateBunnyCards(bunnyCards, (bunny, bunnyMessage) => {
        bunny.classList.add('out-of-race');
        bunnyMessage.innerHTML = `Out of race! Elapsed time: ${elapsedTimeInSeconds}`;
      });
    });
  });

  document.getElementById(PromiseDemonstrations.Any).addEventListener('click', () => {
    resetBunnyCards(PromiseDemonstrations.Any);
    const startDate = new Date();

    Promise.any(getPromises()).then(value => {
      const elapsedTimeInSeconds = getElapsedTimeInSeconds(startDate);
      const bunnyCard = getBunnyCard(PromiseDemonstrations.Any, 1);
      showMessageAndAnimate(bunnyCard, value, elapsedTimeInSeconds);

      const bunnyCards = document.querySelectorAll(`.demonstration-card.${PromiseDemonstrations.Any} .bunny-section .bunny-card:not(:first-child)`);

      manipulateBunnyCards(bunnyCards, (bunny, bunnyMessage) => {
        bunny.classList.add('out-of-race');
        bunnyMessage.innerHTML = `Out of race! Elapsed time: ${elapsedTimeInSeconds}`;
      });
    }).catch(error => {
      const elapsedTimeInSeconds = getElapsedTimeInSeconds(startDate);
      const bunnyCards = document.querySelectorAll(`.demonstration-card.${PromiseDemonstrations.Any} .bunny-section .bunny-card`);
      manipulateBunnyCards(bunnyCards, (bunny, bunnyMessage) => {
        bunny.classList.add('hurt');
        bunnyMessage.innerHTML = `Promises were rejected: ${error}. Elapsed time in seconds: ${elapsedTimeInSeconds}`;
      })
    });
  });

  document.getElementById(PromiseDemonstrations.ForAwait).addEventListener('click', async () => {
    resetBunnyCards(PromiseDemonstrations.ForAwait);
    const startDate = new Date();
    let number = 1;
    try {
      for await (const promise of getPromises()) {
        const elapsedTimeInSeconds = getElapsedTimeInSeconds(startDate);
        const bunnyCard = getBunnyCard(PromiseDemonstrations.ForAwait, number++);
        showMessageAndAnimate(bunnyCard, promise, elapsedTimeInSeconds);
      }
    } catch (err) {
      const bunnyCards = document.querySelectorAll(`.demonstration-card.${PromiseDemonstrations.ForAwait} .bunny-section .bunny-card:nth-child(n+${number})`);
      const elapsedTimeInSeconds = getElapsedTimeInSeconds(startDate);
      manipulateBunnyCards(bunnyCards, (bunny, bunnyMessage) => {
        bunny.classList.add('hurt');
        bunnyMessage.innerHTML = `Promise was rejected: ${err}. Elapsed time in seconds: ${elapsedTimeInSeconds}`;
      });
    }
    
  });
});