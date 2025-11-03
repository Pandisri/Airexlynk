// // Counter animation with symbol support
// const counters = document.querySelectorAll('.count');

// counters.forEach(counter => {
//   counter.innerText = '0';

//   const updateCount = () => {
//     const target = parseInt(counter.getAttribute('data-target'));
//     const symbol = counter.getAttribute('data-symbol') || '';
//     let current = parseInt(counter.innerText.replace(/\D/g, '')) || 0;
//     const increment = Math.ceil(target / 100); // adjust speed

//     if (current < target) {
//       current += increment;
//       counter.innerText = current + symbol;
//       setTimeout(updateCount, 30);
//     } else {
//       counter.innerText = target + symbol;
//     }
//   };

//   // Trigger when visible
//   const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         updateCount();
//         observer.unobserve(entry.target);
//       }
//     });
//   }, { threshold: 1.0 });

//   observer.observe(counter);
// });



// // const flagDots = document.querySelectorAll('.flag-dots .dot');
// // const flagGroups = document.querySelectorAll('.flag-group');

// // flagDots.forEach(dot => {
// //   dot.addEventListener('click', () => {
// //     const index = parseInt(dot.getAttribute('data-index'));

// //     // remove active from all
// //     flagDots.forEach(d => d.classList.remove('active'));
// //     flagGroups.forEach(g => g.classList.remove('active'));

// //     // activate the selected
// //     dot.classList.add('active');
// //     flagGroups[index].classList.add('active');
// //   });
// // });


// // const flagGroups = document.querySelectorAll('.flag-group');
// // const dotContainer = document.querySelector('.dot-container');

// // function updateFlagDots() {
// //   dotContainer.innerHTML = '';

// //   const isMobile = window.innerWidth <= 767;
// //   const totalDots = flagGroups.length;

// //   for (let i = 0; i < totalDots; i++) {
// //     const dot = document.createElement('span');
// //     dot.classList.add('dot');
// //     dot.setAttribute('data-index', i);
// //     if (i === 0) dot.classList.add('active');
// //     dot.addEventListener('click', () => {
// //       document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
// //       document.querySelectorAll('.flag-group').forEach(g => g.classList.remove('active'));

// //       dot.classList.add('active');
// //       flagGroups[i].classList.add('active');
// //     });
// //     dotContainer.appendChild(dot);
// //   }
// // }

// // // Initial setup
// // updateFlagDots();

// // // Rebuild dots on resize
// // window.addEventListener('resize', () => {
// //   updateFlagDots();
// // });


// function createFlagGroups() {
//   const isMobile = window.innerWidth <= 767;
//   const flags = Array.from(document.querySelectorAll(".flag-carousel .flag"));
//   const groupSize = isMobile ? 2 : 4;

//   const wrapper = document.querySelector(".flag-group-wrapper");
//   const dotsContainer = document.querySelector(".flag-dots");

//   wrapper.innerHTML = "";
//   dotsContainer.innerHTML = "";

//   let groupCount = 0;

//   for (let i = 0; i < flags.length; i += groupSize) {
//     const group = document.createElement("div");
//     group.classList.add("flag-group");
//     if (groupCount === 0) group.classList.add("active");

//     for (let j = i; j < i + groupSize && j < flags.length; j++) {
//       group.appendChild(flags[j]);
//     }

//     wrapper.appendChild(group);

//     // Dot creation
//     const dot = document.createElement("span");
//     dot.classList.add("dot");
//     dot.setAttribute("data-index", groupCount);
//     if (groupCount === 0) dot.classList.add("active");

//     dot.addEventListener("click", () => {
//       document.querySelectorAll(".flag-group").forEach(g => g.classList.remove("active"));
//       document.querySelectorAll(".dot").forEach(d => d.classList.remove("active"));

//       group.classList.add("active");
//       dot.classList.add("active");
//     });

//     dotsContainer.appendChild(dot);
//     groupCount++;
//   }
// }

// window.addEventListener("load", createFlagGroups);
// window.addEventListener("resize", createFlagGroups);




// // document.addEventListener("DOMContentLoaded", function () {
// //   const track = document.querySelector(".testimonial-track");
// //   const cards = document.querySelectorAll(".testimonial-card");
// //   const dotsContainer = document.querySelector(".dots");
// //   const prevBtn = document.querySelector(".prev");
// //   const nextBtn = document.querySelector(".next");

// //   let index = 0;

// //   // Generate dots
// //   cards.forEach((_, i) => {
// //     const dot = document.createElement("span");
// //     dot.classList.add("dot");
// //     if (i === 0) dot.classList.add("active");
// //     dot.addEventListener("click", () => moveToSlide(i));
// //     dotsContainer.appendChild(dot);
// //   });

// //   const dots = document.querySelectorAll(".dot");

// //   function moveToSlide(i) {
// //     if (i < 0) i = cards.length - 1;
// //     if (i >= cards.length) i = 0;
// //     index = i;
// //     track.style.transform = `translateX(-${index * 100}%)`;

// //     dots.forEach(dot => dot.classList.remove("active"));
// //     dots[index].classList.add("active");
// //   }

// //   prevBtn.addEventListener("click", () => {
// //     moveToSlide(index - 1);
// //   });

// //   nextBtn.addEventListener("click", () => {
// //     moveToSlide(index + 1);
// //   });
// // });

// document.addEventListener("DOMContentLoaded", function () {
//   const track = document.querySelector(".testimonial-track");
//   const cards = document.querySelectorAll(".testimonial-card");
//   const dotsContainer = document.querySelector(".dots");
//   const prevBtn = document.querySelector(".prev");
//   const nextBtn = document.querySelector(".next");

//   let index = 0;
//   let cardsPerSlide = window.innerWidth <= 767 ? 1 : 2;
//   let totalSlides = Math.ceil(cards.length / cardsPerSlide);

//   // Function to generate correct dots
//   function createDots() {
//     dotsContainer.innerHTML = "";
//     for (let i = 0; i < totalSlides; i++) {
//       const dot = document.createElement("span");
//       dot.classList.add("dot");
//       if (i === 0) dot.classList.add("active");
//       dot.addEventListener("click", () => moveToSlide(i));
//       dotsContainer.appendChild(dot);
//     }
//   }

//   // Move track based on slide index
//   // function moveToSlide(i) {
//   //   if (i < 0) i = totalSlides - 1;
//   //   if (i >= totalSlides) i = 0;
//   //   index = i;
//   //   track.style.transform = `translateX(-${index * 100}%)`;

//   //   document.querySelectorAll(".dot").forEach(dot => dot.classList.remove("active"));
//   //   if (document.querySelectorAll(".dot")[index]) {
//   //     document.querySelectorAll(".dot")[index].classList.add("active");
//   //   }
//   // }





//   function moveToSlide(i) {
//   if (i < 0) i = totalSlides - 1;
//   if (i >= totalSlides) i = 0;
//   index = i;

//   const cardWidth = cards[0].offsetWidth;
//   const gap = 20; // If margin between cards is 20px
//   const offset = index * (cardWidth * cardsPerSlide + gap * (cardsPerSlide - 1));
//   track.style.transform = `translateX(-${offset}px)`;

//   document.querySelectorAll(".dot").forEach(dot => dot.classList.remove("active"));
//   if (document.querySelectorAll(".dot")[index]) {
//     document.querySelectorAll(".dot")[index].classList.add("active");
//   }
// }



//   // Recalculate on window resize
//   function updateSlides() {
//     cardsPerSlide = window.innerWidth <= 767 ? 1 : 2;
//     totalSlides = Math.ceil(cards.length / cardsPerSlide);
//     createDots();
//     moveToSlide(0); // reset to first slide
//   }

//   prevBtn.addEventListener("click", () => {
//     moveToSlide(index - 1);
//   });

//   nextBtn.addEventListener("click", () => {
//     moveToSlide(index + 1);
//   });

//   window.addEventListener("resize", updateSlides);

//   // Initial setup
//   updateSlides();
// });






// // FAQ Accordion
// const faqItems = document.querySelectorAll('.faq-item');

// faqItems.forEach((item) => {
//   const btn = item.querySelector('.toggle-btn');
//   btn.addEventListener('click', () => {
//     faqItems.forEach((el) => {
//       if (el !== item) {
//         el.classList.remove('active');
//         el.querySelector('.toggle-btn').textContent = '+';
//       }
//     });

//     const isActive = item.classList.contains('active');
//     item.classList.toggle('active');
//     btn.textContent = isActive ? '+' : '−';
//   });
// });


// // Contact Form Submit

// const contactForm = document.getElementById("contactForm");
// if (contactForm) {
//   contactForm.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const formData = new FormData(contactForm);

//     fetch("https://formsubmit.co/muthukumarpl57@gmail.com", {
//       method: "POST",
//       headers: {
//         'Accept': 'application/json'
//       },
//       body: formData
//     })
//       .then(response => {
//         if (response.ok) {
//           const toastEl = document.getElementById('successToast');
//           const toast = new bootstrap.Toast(toastEl);
//           toast.show();
//           contactForm.reset();

//           const modal = bootstrap.Modal.getInstance(document.getElementById("contactModal"));
//           if (modal) modal.hide();
//         } else {
//           alert("❌ Oops! Something went wrong. Please try again.");
//         }
//       })
//       .catch(error => {
//         alert("❌ Error sending message. Please check your connection.");
//       });
//   });
// }



// Counter animation with symbol support
const counters = document.querySelectorAll('.count');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCount = () => {
    const target = parseInt(counter.getAttribute('data-target'));
    const symbol = counter.getAttribute('data-symbol') || '';
    let current = parseInt(counter.innerText.replace(/\D/g, '')) || 0;
    const increment = Math.ceil(target / 100); // adjust speed

    if (current < target) {
      current += increment;
      counter.innerText = current + symbol;
      setTimeout(updateCount, 30);
    } else {
      counter.innerText = target + symbol;
    }
  };

  // Trigger when visible
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateCount();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 1.0 });

  observer.observe(counter);
});


// 🚩 FLAG GROUP AUTO CAROUSEL
 function createFlagGroups() {
    const isMobile = window.innerWidth <= 767;
    const flags = Array.from(document.querySelectorAll(".flag-carousel .flag"));
    const groupSize = isMobile ? 2 : 4;

    const wrapper = document.querySelector(".flag-group-wrapper");
    const dotsContainer = document.querySelector(".flag-dots");

    wrapper.innerHTML = "";
    dotsContainer.innerHTML = "";

    let groupCount = 0;

    for (let i = 0; i < flags.length; i += groupSize) {
      const group = document.createElement("div");
      group.classList.add("flag-group");
      if (groupCount === 0) group.classList.add("active");

      for (let j = i; j < i + groupSize && j < flags.length; j++) {
        group.appendChild(flags[j]);
      }

      wrapper.appendChild(group);

      const dot = document.createElement("span");
      dot.classList.add("dot");
      dot.setAttribute("data-index", groupCount);
      if (groupCount === 0) dot.classList.add("active");

      dot.addEventListener("click", () => switchToGroup(groupCount));

      dotsContainer.appendChild(dot);
      groupCount++;
    }

    return groupCount;
  }

  function switchToGroup(index) {
    const groups = document.querySelectorAll(".flag-group");
    const dots = document.querySelectorAll(".flag-dots .dot");

    groups.forEach(g => g.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    if (groups[index]) groups[index].classList.add("active");
    if (dots[index]) dots[index].classList.add("active");
  }

  let currentGroup = 0;
  let totalGroups = 0;

  function rotateFlagGroups() {
    currentGroup = (currentGroup + 1) % totalGroups;
    switchToGroup(currentGroup);
  }

  function setupFlagSlider() {
    totalGroups = createFlagGroups();
    currentGroup = 0;
  }

  window.addEventListener("load", () => {
    setupFlagSlider();
    setInterval(rotateFlagGroups, 3000);
  });

  window.addEventListener("resize", () => {
    setupFlagSlider();
  });
  
//  TESTIMONIAL CAROUSEL (if using)
document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".testimonial-track");
  const cards = document.querySelectorAll(".testimonial-card");
  const dotsContainer = document.querySelector(".dots");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let index = 0;
  let cardsPerSlide = window.innerWidth <= 767 ? 1 : 2;
  let totalSlides = Math.ceil(cards.length / cardsPerSlide);

  function createDots() {
    dotsContainer.innerHTML = "";
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => moveToSlide(i));
      dotsContainer.appendChild(dot);
    }
  }

  function moveToSlide(i) {
    if (i < 0) i = totalSlides - 1;
    if (i >= totalSlides) i = 0;
    index = i;

    const cardWidth = cards[0].offsetWidth;
    const gap = 20;
    const offset = index * (cardWidth * cardsPerSlide + gap * (cardsPerSlide - 1));
    track.style.transform = `translateX(-${offset}px)`;

    document.querySelectorAll(".dot").forEach(dot => dot.classList.remove("active"));
    if (document.querySelectorAll(".dot")[index]) {
      document.querySelectorAll(".dot")[index].classList.add("active");
    }
  }

  function updateSlides() {
    cardsPerSlide = window.innerWidth <= 767 ? 1 : 2;
    totalSlides = Math.ceil(cards.length / cardsPerSlide);
    createDots();
    moveToSlide(0);
  }

  prevBtn?.addEventListener("click", () => moveToSlide(index - 1));
  nextBtn?.addEventListener("click", () => moveToSlide(index + 1));
  window.addEventListener("resize", updateSlides);
  updateSlides();
});


//  FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach((item) => {
  const btn = item.querySelector('.toggle-btn');
  btn.addEventListener('click', () => {
    faqItems.forEach((el) => {
      if (el !== item) {
        el.classList.remove('active');
        el.querySelector('.toggle-btn').textContent = '+';
      }
    });

    const isActive = item.classList.contains('active');
    item.classList.toggle('active');
    btn.textContent = isActive ? '+' : '−';
  });
});



  const scrollBtn = document.getElementById("scrollToggleBtn");
  let atTop = true;

  // Show/hide button on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  // Scroll toggle behavior
  scrollBtn.addEventListener("click", () => {
    if (atTop) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      scrollBtn.innerText = "↓";
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      scrollBtn.innerText = "↑";
    }
    atTop = !atTop;
  });






  const openPrivacyBtn = document.getElementById("openPrivacy");
  const openTermsBtn = document.getElementById("openTerms");
  const modal = document.getElementById("privacyModal");
  const closeBtn = document.getElementById("closeModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalContent = document.getElementById("modalContent");

  const privacyPoints = [
    "We only collect essential information needed for delivery.",
    "Your personal details are never shared or sold to third parties.",
    "All your data is stored securely using encryption protocols.",
    "We ensure full confidentiality of documents and parcels.",
    "You can request access or deletion of your data anytime.",
    "We use general data insights to enhance your experience - never to invade it.",
    "Only authorized staff can access your personal delivery information.",
    "We’ll only reach out when needed - no spam, just updates you asked for.",
    "We don’t track your location without clear permission.",
    "Our cookies are simple - just for smooth site experience, nothing extra.",
  ];

  const termsPoints = [
  "Our service is available for both domestic and international shipments.",
  "We are not responsible for delays caused by external factors.",
  "Prohibited items must not be shipped through our service.",
  "Pickup and delivery times are indicative and not guaranteed.",
  "Users must ensure that parcels are packed safely and securely.",
  "We reserve the right to refuse or cancel any shipment at our discretion.",
  "All charges must be paid in full before the shipment is dispatched.",
  "Customers are responsible for providing accurate recipient information.",
  "We are not liable for damages caused due to improper packaging.",
  "By using our service, you agree to comply with all applicable laws."
];


  // Reusable function to show modal with dynamic content
  function showModal(title, points) {
    modalTitle.innerText = title;
    modalContent.innerHTML = points.map(p => `<li>${p}</li>`).join('');
    modal.style.display = "flex";
  }

  openPrivacyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showModal("Privacy Policy", privacyPoints);
  });

  openTermsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showModal("Terms & Conditions", termsPoints);
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });




// ✅ Contact Form Submit
// const contactForm = document.getElementById("courierForm");
// if (contactForm) {
//   contactForm.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const formData = new FormData(contactForm);

//     fetch("https://formsubmit.co/airexlynk@gmail.com", {
//       method: "POST",
//       headers: {
//         'Accept': 'application/json'
//       },
//       body: formData
//     })
//     .then(response => {
//       if (response.ok) {
//         const toastEl = document.getElementById('successToast');
//         const toast = new bootstrap.Toast(toastEl);
//         toast.show();
//         contactForm.reset();

//         const modal = bootstrap.Modal.getInstance(document.getElementById("contactModal"));
//         if (modal) modal.hide();
//       } else {
//         alert("❌ Oops! Something went wrong. Please try again.");
//       }
//     })
//     .catch(() => {
//       alert("❌ Error sending message. Please check your connection.");
//     });
//   });





 const intlBtn = document.getElementById("internationalBtn");
  const domBtn = document.getElementById("domesticBtn");
  const header = document.getElementById("headerText");
  const form = document.getElementById("courierForm");
  const thankyou = document.getElementById("thankyouPopup");

  intlBtn.addEventListener("click", () => {
    intlBtn.classList.add("active");
    domBtn.classList.remove("active");
    header.innerHTML = `
      <h5>Door-to-door pickup & drop service from Chennai to anywhere in the world.</h5>
      <p>Enter your pickup and delivery details to schedule a hassle-free door-to-door courier from Chennai across the world.</p>
    `;
  });

  domBtn.addEventListener("click", () => {
    domBtn.classList.add("active");
    intlBtn.classList.remove("active");
    header.innerHTML = `
      <h5>Door-to-door pickup & drop service from Chennai to anywhere in India.</h5>
      <p>Enter your pickup and delivery details to schedule a hassle-free door-to-door courier from Chennai across India.</p>
    `;
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.style.display = "none";
    thankyou.style.display = "block";
  });


