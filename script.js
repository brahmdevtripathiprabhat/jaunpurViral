document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.count');
  
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
  
        const speed = 200; // Change this value to adjust the counting speed
        const increment = target / speed;
  
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 30); // Adjust timeout for smoother/slower animation
        } else {
          counter.innerText = target;
        }
      };
  
      updateCount();
    });
  });
  