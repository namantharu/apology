  const music = document.getElementById('bgMusic');
  const trigger = document.querySelector('body');

  trigger.addEventListener('click', () => {
    music.play().catch((e) => {
      console.error("Audio playback failed:", e);
    });
  });

  // Content list for next button
  const qaData = [
    {
      title: "SoRRy :(",
      text: "I'm sorry. I didn’t mean to hurt you 💔"
    },
    {
      title: "Forgive me 💖",
      text: "I hope we can make peace... Never should have said that 💕"
    },
    {
      title: "Let's talk?",
      text: "If you're ready, I'm here to talk and fix things 🤝"
    },
    {
      text: "From Naman",
      title: "To Gracy"
    }
  ];

  let currentIndex = 0;
  const qaSection = document.getElementById('qaSection');
  const qaTitle = qaSection.querySelector('h2');
  const qaText = qaSection.querySelector('.qa-item p');
  const nextBtn = document.getElementById('nextBtn');

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % qaData.length; // loop back
    qaTitle.textContent = qaData[currentIndex].title;
    qaText.textContent = qaData[currentIndex].text;
  });

