document.addEventListener('DOMContentLoaded', () => {
  // Create confetti particles
  const confettiContainer = document.querySelector('.confetti-container');
  const confettiColors = ['#ff4081', '#3f51b5', '#4caf50', '#ff9800', '#9c27b0', '#00bcd4'];
  const confettiCount = 100;
  
  for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.top = -20 + 'px';
      confettiContainer.appendChild(confetti);
  }
  
  // Initialize animations
  startAnimations();
  
  // Replay button event listener
  document.querySelector('.replay-btn').addEventListener('click', startAnimations);
});

function startAnimations() {
  // Reset animations
  gsap.set('.title', { opacity: 0, y: -50 });
  gsap.set('.message-text', { opacity: 0, y: 20 });
  gsap.set('.cake', { opacity: 0, scale: 0.5 });
  gsap.set('.balloon', { y: 300 });
  gsap.set('.replay-btn', { opacity: 0 });
  
  // GSAP Timeline
  const tl = gsap.timeline();
  
  // Title animation with GSAP
  tl.to('.title', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'back.out(1.7)'
  });
  
  // Balloon animations with GSAP
  tl.to('.balloon', {
      y: -300,
      duration: 2,
      stagger: 0.2,
      ease: 'power1.out'
  }, '-=0.5');
  
  // Add some balloon sway
  gsap.to('.balloon', {
      x: '+=20',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.1
  });
  
  // Cake animation with GSAP
  tl.to('.cake', {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'elastic.out(1, 0.5)'
  }, '-=1');
  
  // Flame animation with GSAP
  gsap.to('.flame', {
      scaleY: 1.2,
      scaleX: 0.8,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
  });
  
  // Message text animation with GSAP
  tl.to('.message-text', {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.5,
      ease: 'power2.out'
  }, '-=0.5');
  
  // Show replay button
  tl.to('.replay-btn', {
      opacity: 1,
      duration: 0.5
  }, '+=1');
  
  // Confetti animation with Anime.js
  const confettiElements = document.querySelectorAll('.confetti');
  
  anime({
      targets: confettiElements,
      opacity: [0, 1],
      delay: anime.stagger(10),
      translateY: function() {
          return anime.random(100, 500);
      },
      translateX: function() {
          return anime.random(-100, 100);
      },
      rotate: function() {
          return anime.random(0, 360);
      },
      scale: function() {
          return anime.random(0.5, 1.5);
      },
      duration: function() {
          return anime.random(1000, 3000);
      },
      easing: 'easeOutExpo',
      complete: function(anim) {
          // Reset confetti for next animation
          anime({
              targets: confettiElements,
              opacity: 0,
              duration: 500,
              easing: 'easeOutExpo'
          });
      }
  });
  
  // Additional decorative animations with Anime.js
  anime({
      targets: '.card',
      boxShadow: [
          '0 10px 30px rgba(0, 0, 0, 0.3)',
          '0 15px 40px rgba(255, 64, 129, 0.4)',
          '0 10px 30px rgba(0, 0, 0, 0.3)'
      ],
      duration: 2000,
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: true
  });
}import gsap from "gsap"
import anime from "animejs/lib/anime.es.js"

document.addEventListener("DOMContentLoaded", () => {
  // Create confetti particles
  createConfetti()

  // Create balloons
  createBalloons()

  // Initialize animations
  startAnimations()

  // Replay button event listener
  document.querySelector(".replay-btn").addEventListener("click", startAnimations)

  // Celebrate button event listener
  document.querySelector(".celebrate-btn").addEventListener("click", celebrate)
})

function createConfetti() {
  const confettiContainer = document.querySelector(".confetti-container")
  const confettiColors = ["#ff4081", "#3f51b5", "#4caf50", "#ff9800", "#9c27b0", "#00bcd4", "#ffeb3b", "#e91e63"]
  const confettiCount = 150

  // Clear existing confetti
  confettiContainer.innerHTML = ""

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div")
    confetti.classList.add("confetti")

    // Randomly choose shape: square, circle, or triangle
    const shapeType = Math.floor(Math.random() * 3)
    if (shapeType === 0) {
      // Square (default)
      confetti.style.borderRadius = "0"
    } else if (shapeType === 1) {
      // Circle
      confetti.style.borderRadius = "50%"
    } else {
      // Triangle
      confetti.style.width = "0"
      confetti.style.height = "0"
      confetti.style.borderLeft = "10px solid transparent"
      confetti.style.borderRight = "10px solid transparent"
      confetti.style.borderBottom = "20px solid " + confettiColors[Math.floor(Math.random() * confettiColors.length)]
      confetti.style.backgroundColor = "transparent"
    }

    if (shapeType !== 2) {
      confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)]
    }

    confetti.style.left = Math.random() * 100 + "%"
    confetti.style.top = -20 + "px"
    confettiContainer.appendChild(confetti)
  }
}

// Modificar la función createBalloons para mejorar la distribución
function createBalloons() {
  const balloonContainer = document.querySelector(".balloon-container")
  const balloonColors = ["#ff4081", "#3f51b5", "#4caf50", "#ff9800", "#9c27b0", "#00bcd4", "#ffeb3b", "#e91e63"]
  const balloonCount = 15

  // Clear existing balloons
  balloonContainer.innerHTML = ""

  for (let i = 0; i < balloonCount; i++) {
    const balloon = document.createElement("div")
    balloon.classList.add("balloon")
    balloon.style.backgroundColor = balloonColors[Math.floor(Math.random() * balloonColors.length)]

    // Distribuir los globos más hacia los lados
    const leftPosition = Math.random() * 100
    // Evitar que los globos se concentren en el centro
    balloon.style.left = leftPosition < 40 || leftPosition > 60 ? leftPosition + "%" : leftPosition < 50 ? "30%" : "70%"

    balloon.style.bottom = -100 + "px"
    balloon.style.transform = `scale(${Math.random() * 0.5 + 0.7})`
    balloonContainer.appendChild(balloon)
  }
}

// Modificar la función startAnimations para ajustar la posición de los globos
function startAnimations() {
  // Reset animations
  gsap.set(".title", { opacity: 0, y: -50 })
  gsap.set(".message-text", { opacity: 0, y: 20 })
  gsap.set(".cake", { opacity: 0, scale: 0.5 })
  gsap.set(".balloon", { y: 300 })
  gsap.set(".replay-btn", { opacity: 0 })
  gsap.set(".celebrate-btn", { opacity: 0 })
  gsap.set(".sparkles", { opacity: 0, scale: 0 })

  // GSAP Timeline
  const tl = gsap.timeline()

  // Sparkles animation
  tl.to(".sparkles", {
    opacity: 1,
    scale: 1,
    duration: 0.5,
    stagger: 0.2,
    ease: "back.out(1.7)",
  })

  // Title animation with GSAP
  tl.to(
    ".title",
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "back.out(1.7)",
    },
    "-=0.3",
  )

  // Balloon animations with GSAP (just a few balloons for initial animation)
  // Modificado para que los globos no tapen el texto
  tl.to(
    ".balloon:nth-child(-n+5)",
    {
      y: -200, // Reducido para que no suban tanto
      x: (i, el) => {
        // Mover los globos más hacia los lados
        return i % 2 === 0 ? 50 : -50
      },
      duration: 2,
      stagger: 0.2,
      ease: "power1.out",
    },
    "-=0.5",
  )

  // Add some balloon sway
  gsap.to(".balloon", {
    x: "+=30", // Aumentado para que se muevan más a los lados
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: 0.1,
  })

  // Cake animation with GSAP
  tl.to(
    ".cake",
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "elastic.out(1, 0.5)",
    },
    "-=1",
  )

  // Flame animation with GSAP
  gsap.to(".flame", {
    scaleY: 1.2,
    scaleX: 0.8,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  })

  // Message text animation with GSAP
  tl.to(
    ".message-text",
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.5,
      ease: "power2.out",
    },
    "-=0.5",
  )

  // Show buttons
  tl.to(
    ".celebrate-btn",
    {
      opacity: 1,
      duration: 0.5,
    },
    "+=0.5",
  )

  tl.to(
    ".replay-btn",
    {
      opacity: 1,
      duration: 0.5,
    },
    "-=0.3",
  )

  // Card tilt effect - desactivar en móviles
  const card = document.querySelector(".card")

  // Comprobar si es un dispositivo móvil
  const isMobile = window.matchMedia("(max-width: 768px)").matches

  if (!isMobile) {
    card.addEventListener("mousemove", (e) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 25
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25
      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    })

    card.addEventListener("mouseenter", () => {
      card.style.transition = "none"
    })

    card.addEventListener("mouseleave", () => {
      card.style.transition = "all 0.5s ease"
      card.style.transform = "rotateY(0deg) rotateX(0deg)"
    })
  }

  // Additional decorative animations with Anime.js
  anime({
    targets: ".card",
    boxShadow: [
      "0 20px 60px rgba(0, 0, 0, 0.4), 0 0 30px rgba(255, 64, 129, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.5)",
      "0 20px 60px rgba(0, 0, 0, 0.4), 0 0 50px rgba(63, 81, 181, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.5)",
      "0 20px 60px rgba(0, 0, 0, 0.4), 0 0 30px rgba(255, 64, 129, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.5)",
    ],
    duration: 3000,
    easing: "easeInOutQuad",
    direction: "alternate",
    loop: true,
  })

  // Sparkle rotation
  anime({
    targets: ".sparkles",
    rotate: "1turn",
    duration: 10000,
    loop: true,
    easing: "linear",
  })
}

// Modificar la función celebrate para ajustar la posición de los globos
function celebrate() {
  // Create more confetti for celebration
  createConfetti()

  // Create more balloons
  createBalloons()

  // Confetti animation with Anime.js
  const confettiElements = document.querySelectorAll(".confetti")

  anime({
    targets: confettiElements,
    opacity: [0, 1],
    delay: anime.stagger(10),
    translateY: () => anime.random(100, 800),
    translateX: () => anime.random(-100, 100),
    rotate: () => anime.random(0, 360),
    scale: () => anime.random(0.5, 1.5),
    duration: () => anime.random(1000, 3000),
    easing: "easeOutExpo",
    complete: (anim) => {
      // Fade out confetti gradually
      anime({
        targets: confettiElements,
        opacity: 0,
        delay: anime.stagger(10),
        duration: 1000,
        easing: "easeOutExpo",
      })
    },
  })

  // Balloon celebration animation - modificado para distribuir mejor
  const balloons = document.querySelectorAll(".balloon")

  gsap.to(balloons, {
    y: -800,
    x: (i, el) => {
      // Distribuir los globos más hacia los lados durante la celebración
      return i % 2 === 0 ? gsap.utils.random(50, 150) : gsap.utils.random(-150, -50)
    },
    duration: 4,
    stagger: 0.1,
    ease: "power1.out",
  })

  // Add celebration effects
  const tl = gsap.timeline()

  // Flash effect on card
  tl.to(".card", {
    boxShadow:
      "0 20px 60px rgba(0, 0, 0, 0.4), 0 0 100px rgba(255, 64, 129, 0.6), inset 0 0 30px rgba(255, 255, 255, 0.8)",
    duration: 0.2,
  })

  tl.to(".card", {
    boxShadow:
      "0 20px 60px rgba(0, 0, 0, 0.4), 0 0 30px rgba(255, 64, 129, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.5)",
    duration: 0.2,
  })

  // Cake jump
  tl.to(
    ".cake",
    {
      y: -20,
      duration: 0.3,
      repeat: 3,
      yoyo: true,
    },
    "-=0.4",
  )

  // Title celebration effect
  tl.to(
    ".title",
    {
      scale: 1.1,
      color: "#ff4081",
      textShadow: "0 0 10px rgba(255, 64, 129, 0.8)",
      duration: 0.3,
      repeat: 1,
      yoyo: true,
    },
    "-=0.8",
  )

  // Sparkles burst
  gsap.to(".sparkles", {
    scale: 2,
    opacity: 0.8,
    duration: 0.5,
    stagger: 0.1,
    repeat: 1,
    yoyo: true,
  })

  // Create firework effect
  createFireworks()
}

function createFireworks() {
  const fireworksContainer = document.querySelector(".confetti-container")
  const fireworksCount = 5

  for (let i = 0; i < fireworksCount; i++) {
    // Create firework center
    const firework = document.createElement("div")
    firework.style.position = "absolute"
    firework.style.width = "5px"
    firework.style.height = "5px"
    firework.style.borderRadius = "50%"
    firework.style.backgroundColor = "#fff"
    firework.style.boxShadow = "0 0 10px 5px rgba(255, 255, 255, 0.8)"
    firework.style.left = Math.random() * 80 + 10 + "%"
    firework.style.top = Math.random() * 80 + 10 + "%"
    firework.style.zIndex = "10"
    fireworksContainer.appendChild(firework)

    // Animate firework
    gsap.to(firework, {
      scale: 0,
      opacity: 1,
      duration: 0.2,
      onComplete: () => {
        // Create particles
        createFireworkParticles(firework.style.left, firework.style.top)
        firework.remove()
      },
    })
  }
}

function createFireworkParticles(x, y) {
  const fireworksContainer = document.querySelector(".confetti-container")
  const particleCount = 30
  const colors = ["#ff4081", "#3f51b5", "#4caf50", "#ff9800", "#9c27b0", "#ffeb3b"]

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div")
    particle.style.position = "absolute"
    particle.style.width = "4px"
    particle.style.height = "4px"
    particle.style.borderRadius = "50%"
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    particle.style.boxShadow = `0 0 6px 2px ${particle.style.backgroundColor}`
    particle.style.left = x
    particle.style.top = y
    particle.style.zIndex = "9"
    fireworksContainer.appendChild(particle)

    // Random direction
    const angle = Math.random() * Math.PI * 2
    const distance = Math.random() * 100 + 50
    const xEnd = `calc(${x} + ${Math.cos(angle) * distance}px)`
    const yEnd = `calc(${y} + ${Math.sin(angle) * distance}px)`

    // Animate particle
    gsap.to(particle, {
      left: xEnd,
      top: yEnd,
      opacity: 0,
      duration: Math.random() * 0.8 + 0.6,
      ease: "power1.out",
      onComplete: () => {
        particle.remove()
      },
    })
  }
}
