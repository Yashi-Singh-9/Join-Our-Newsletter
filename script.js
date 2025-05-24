document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email');
  const errorSpan = document.querySelector('.error');
  const spamSpan = document.querySelector('.spam');
  const subscribeBtn = document.querySelector('button');

  let timerId = null; // store timeout ID

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }

  subscribeBtn.addEventListener('click', function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();

    // Clear previous timer if any (reset timer)
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }

    if (!email) {
      errorSpan.textContent = 'Email address is required.';
      spamSpan.textContent = '';
      spamSpan.style.color = '';
    } else if (!validateEmail(email)) {
      errorSpan.textContent = 'Please enter a valid email address.';
      spamSpan.textContent = '';
      spamSpan.style.color = '';
    } else {
      errorSpan.textContent = '';
      emailInput.value = '';
      spamSpan.textContent = 'Thanks for subscribing!';
      spamSpan.style.color = 'green';

      // Set timer to clear success message after 2 seconds
      timerId = setTimeout(() => {
        spamSpan.textContent = '';
        spamSpan.style.color = '';
        timerId = null;
      }, 2000);
    }
  });
});
