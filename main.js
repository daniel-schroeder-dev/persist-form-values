let userData = JSON.parse(window.localStorage.getItem('userData')) || {};
const inputs = Array.from(document.querySelectorAll('input, textarea'));

inputs.forEach((input) => input.value = userData[input.name] || '');

document.addEventListener('input', function(e) {
  userData[e.target.name] = e.target.value;
  window.localStorage.setItem('userData', JSON.stringify(userData));
});
