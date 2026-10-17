let idleTimer;
let warningTimer;
let countdown = 10;

function resetTimers() {
  clearTimeout(idleTimer);
  clearTimeout(warningTimer);
  hidePopup();

  idleTimer = setTimeout(showWarningPopup, 50000); // 50 sec idle warning
}

function showWarningPopup() {
  showPopup();

  let interval = setInterval(() => {
    countdown--;
    updateCountdown(countdown);

    if (countdown <= 0) {
      clearInterval(interval);
      logoutUser();
    }
  }, 1000);
}

function staySignedIn() {
  countdown = 10;
  resetTimers();
  refreshSession(); // API call
}

function logoutUser() {
  window.location.href = "/logout";
}

// Track activity
["mousemove", "keydown", "click", "scroll", "touchstart"].forEach(event => {
  document.addEventListener(event, resetTimers);
});

resetTimers();