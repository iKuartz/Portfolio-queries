window.onload = function getInputs() {
  let lStorage = {};

  const nameInput = document.getElementById('name-input');
  const emailInput = document.getElementById('small-inputs');
  const messageInput = document.getElementById('big-input');

  if (localStorage.getItem('form')) {
    lStorage = JSON.parse(localStorage.getItem('form'));

    nameInput.value = lStorage.name;
    emailInput.value = lStorage.email;
    messageInput.value = lStorage.message;
  }

  nameInput.addEventListener('change', (event) => {
    lStorage = { ...lStorage, name: event.target.value };
    localStorage.setItem('form', JSON.stringify(lStorage));
  });

  emailInput.addEventListener('change', (event) => {
    lStorage = { ...lStorage, email: event.target.value };
    localStorage.setItem('form', JSON.stringify(lStorage));
  });

  messageInput.addEventListener('change', (event) => {
    lStorage = { ...lStorage, message: event.target.value };
    localStorage.setItem('form', JSON.stringify(lStorage));
  });
};
