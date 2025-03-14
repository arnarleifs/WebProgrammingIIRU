document.addEventListener('DOMContentLoaded', function () {
  const state = {
    app: document.getElementById('app'),
    modal: document.getElementById('todo-modal'),
    data: [
      {
        id: 1,
        name: 'Finish Project Proposal',
        description: 'Research and outline project proposal',
        completed: false
      },
      {
        id: 2,
        name: 'Call Dad for Birthday',
        description: 'Buy a birthday gift and call dad to give.',
        completed: true
      },
      {
        id: 3,
        name: 'Grocery Shopping',
        description: 'Buy milk, eggs, and fresh fruits.',
        completed: false
      },
      {
        id: 4,
        name: 'Attend Sprint Daily meeting',
        description: 'Attend meeting and discuss issues of the day.',
        completed: true
      },
      {
        id: 5,
        name: 'Read Chapter 6 in Lord of the Flies',
        description: 'Read chapter for upcoming book club.',
        completed: false
      },
    ]
  };

  function registerRemoveHandlers() {
    const todoItems = Array.from(state.app.querySelectorAll('.todo-item'));
    todoItems.forEach(i => {
      const removeButton = i.querySelector('.remove-btn');
      const id = parseInt(i.dataset["id"]);

      removeButton.addEventListener('click', function () {
        state.data = state.data.filter(d => d.id !== id);
        render();
      });
    });
  }

  function populateModal(item) {
    const nameInput = state.modal.querySelector('input[name="name"]');
    const descriptionInput = state.modal.querySelector('input[name="description"]');

    nameInput.value = item.name;
    descriptionInput.value = item.description;
  }

  function onModalSubmit(cb) {
    const submitButton = state.modal.querySelector('.submit-btn');
    submitButton.addEventListener('click', (e) => {
      cb(e);
      submitButton.removeEventListener('click', this);
    });
  }

  function registerUpdateHandlers() {
    const todoItems = Array.from(state.app.querySelectorAll('.todo-item'));
    todoItems.forEach(i => {
      const updateButton = i.querySelector('.update-btn');
      const id = parseInt(i.dataset["id"]);
      const item = state.data.find(t => t.id === id);

      updateButton.addEventListener('click', function () {
        populateModal(item);
        onModalSubmit(() => {
          const nameInput = state.modal.querySelector('input[name="name"]');
          const descriptionInput = state.modal.querySelector('input[name="description"]');

          state.data = state.data.map(d => {
            if (d.id === id) {
              return {
                ...d,
                name: nameInput.value,
                description: descriptionInput.value
              }
            }

            return d;
          });

          UIkit.modal(state.modal).hide();
          render();
        });
      });
    });
  }

  function registerAddHandler() {
    const addButton = document.getElementById('add-btn');
    addButton.addEventListener('click', function () {
      populateModal({
        name: '',
        description: ''
      });

      onModalSubmit(() => {
        const nameInput = state.modal.querySelector('input[name="name"]');
        const descriptionInput = state.modal.querySelector('input[name="description"]');
        const nextId = Math.max(...state.data.map(d => d.id)) + 1;

        const newItem = {
          id: nextId,
          name: nameInput.value,
          description: descriptionInput.value,
          completed: false
        };

        state.data = [
          ...state.data,
          newItem
        ];

        UIkit.modal(state.modal).hide();
        render();
      });
    });
  }

  function renderTodoItems() {
    const todoMarkup = state.data.map(d => `
      <div data-id=${d.id} class="todo-item uk-card uk-card-default uk-card-body uk-width-1-2@m">
          <h3 class="uk-card-title">${d.name}</h3>
          <p>${d.description}</p>
          ${d.completed ? '<span style="color: green;" class="uk-margin-small-right" uk-icon="check"></span> Completed' : '<span style="color: red;" class="uk-margin-small-right" uk-icon="close"></span> Not completed'}
          <div class="uk-align-right">
            <button class="update-btn uk-button uk-button-default" uk-toggle="target: #todo-modal" type="button">Update</button>
            <button class="remove-btn uk-button uk-button-danger">Remove</button>
          </div>
      </div>
    `);

    state.app.innerHTML = todoMarkup.join('');
  }

  function render() {
    renderTodoItems();
    registerRemoveHandlers();
    registerUpdateHandlers();
  }

  // Initial render
  render();
  registerAddHandler();
});