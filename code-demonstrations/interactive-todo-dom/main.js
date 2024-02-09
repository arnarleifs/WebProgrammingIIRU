document.addEventListener("DOMContentLoaded", function () {
  const state = {
    todoContainer: document.getElementById("todo-container"),
    modal: document.getElementById("modal"),
    data: [
      {
        id: 1,
        name: "Finish Project Proposal",
        description:
          "Research and outline project proposal for upcoming client meeting",
        completed: false,
      },
      {
        id: 2,
        name: "Call Mom for Birthday",
        description:
          "Buy a birthday gift and call mom to wish her a happy birthday.",
        completed: true,
      },
      {
        id: 3,
        name: "Grocery Shopping",
        description: "Buy milk, eggs, and fresh vegetables for the week.",
        completed: false,
      },
      {
        id: 4,
        name: "Attend Team meeting",
        description:
          "Participate in the weekly team meeting to discuss project updates.",
        completed: true,
      },
      {
        id: 5,
        name: "Read Chapter 3 of Lord of the Flies",
        description:
          "Set aside some time to read the next chapter of the novel for the book club.",
        completed: false,
      },
    ],
  };

  function setupRemoveHandlers() {
    // Convert from NodeList to Array
    const todoItems = Array.from(document.querySelectorAll(".todo-item"));
    todoItems.forEach((t) => {
      const id = t.dataset["id"];
      const removeButton = t.querySelector(".uk-button.uk-button-danger");

      removeButton.addEventListener("click", function () {
        state.data = state.data.filter((d) => d.id !== parseInt(id));
        render();
      });
    });
  }

  function setupUpdateHandlers() {
    const todoItems = Array.from(document.querySelectorAll(".todo-item"));
    todoItems.forEach((t) => {
      const id = t.dataset["id"];
      const item = state.data.find((t) => t.id === parseInt(id));
      const updateButton = t.querySelector(".uk-button.uk-button-default");

      updateButton.addEventListener("click", function () {
        state.modal.style.visibility = "visible";
        populateModal("Update item", item);
        onModalSubmit(function () {
          const nameInput = state.modal.querySelector(
            '.modal-body input[name="name"]'
          );
          const descriptionInput = state.modal.querySelector(
            '.modal-body input[name="description"]'
          );

          state.data = state.data.map((t) => {
            if (t.id === parseInt(id)) {
              return {
                ...t,
                name: nameInput.value,
                description: descriptionInput.value,
              };
            }
            return t;
          });

          state.modal.style.visibility = "hidden";
          render();
        });
      });
    });
  }

  function setupAddHandler() {
    const addButton = document.querySelector(
      "body > .uk-button.uk-button-secondary.uk-button-large"
    );

    addButton.addEventListener("click", function () {
      state.modal.style.visibility = "visible";
      populateModal("Add item");
      onModalSubmit(function () {
        const nextId = Math.max(...state.data.map((d) => d.id)) + 1;
        const nameInput = state.modal.querySelector(
          '.modal-body input[name="name"]'
        );
        const descriptionInput = state.modal.querySelector(
          '.modal-body input[name="description"]'
        );

        state.data = [
          ...state.data,
          {
            id: nextId,
            name: nameInput.value,
            description: descriptionInput.value,
            completed: false,
          },
        ];

        render();
        state.modal.style.visibility = "hidden";
      });
    });
  }

  function populateModal(title, todoItem) {
    const bodyMarkup = `<form>
      <div class="uk-margin">
        <input
          name="name"
          class="uk-input"
          type="text"
          placeholder="Name"
          value="${todoItem?.name ?? ""}"
          aria-label="Input"
        />
      </div>
      <div class="uk-margin">
        <input
          name="description"
          class="uk-input"
          type="text"
          placeholder="Description"
          value="${todoItem?.description ?? ""}"
          aria-label="Input"
        />
      </div>
    </form>`;

    const footerMarkup = `
      <div class="uk-align-right">
        <button class="uk-button uk-button-default">Cancel</button>
        <button class="uk-button uk-button-primary">Submit</button>
      </div>
    `;

    state.modal.querySelector(".modal-header").innerHTML = title;
    state.modal.querySelector(".modal-body").innerHTML = bodyMarkup;
    state.modal.querySelector(".modal-footer").innerHTML = footerMarkup;

    const modalCloseButton = state.modal.querySelector(
      ".modal-footer button.uk-button-default"
    );
    modalCloseButton.addEventListener("click", function () {
      state.modal.style.visibility = "hidden";
    });
  }

  function onModalSubmit(cb) {
    state.modal
      .querySelector(".modal-footer button.uk-button-primary")
      .addEventListener("click", cb);
  }

  function generateTodoMarkup(d) {
    return `<div data-id="${
      d.id
    }" class="todo-item uk-card uk-card-default uk-card-body uk-width-1-2@m">
      <h3 class="uk-card-title">${d.name}</h3>
      <p>${d.description}</p>
      <p>
        ${
          d.completed
            ? '<span style="color: green;" uk-icon="icon: check; ratio: 2"></span> Finished'
            : '<span style="color: red;" uk-icon="icon: close; ratio: 2"></span> Not finished'
        }
      </p>
      <div class="uk-align-right">
        <button class="uk-button uk-button-default">Update</button>
        <button class="uk-button uk-button-danger">Remove</button>
      </div>
    </div>`;
  }

  function renderTodoList() {
    const todoMarkup = state.data.map((d) => generateTodoMarkup(d)).join("");
    state.todoContainer.innerHTML = todoMarkup;
  }

  // Render loop
  function render() {
    renderTodoList();
    setupRemoveHandlers();
    setupUpdateHandlers();
  }

  setupAddHandler();
  // Initial render
  render();
});
