// Saves options to chrome.storage
const saveOptions = () => {
  const likeSpeed = (parseFloat(document.getElementById('speed').value) * 1000);

  chrome.storage.sync.set(
    { likeSpeed: likeSpeed },
    () => {
      // Update status to let user know options were saved.
      const status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(() => {
        status.textContent = '';
      }, 750);
    }
  );
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
  chrome.storage.sync.get(
    { likeSpeed: '250' },
    (items) => {
      document.getElementById('speed').value = items.likeSpeed;
    }
  );
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
