const link = document.getElementById('go');

const checkConform = (event) => {
  event.preventDefault();
  if (confirm('Are you sure?') === true) {
    window.location.href = 'http://google.co.th';
  } else {
    window.location.href = '';
  }
};

link.addEventListener('click', checkConform);
