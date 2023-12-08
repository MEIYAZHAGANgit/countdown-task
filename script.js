function startCountdown() {
    let count = 10;

    function updateCountdown() {
      document.getElementById('countdown').innerText = count;

      if (count === 0) {
        clearInterval(countdownInterval);
        document.getElementById('message').innerText = 'Happy Independence Day!';
      }

      count--;
    }

    updateCountdown(); 

    const countdownInterval = setInterval(updateCountdown, 1000);
  }

  
  window.onload = startCountdown;