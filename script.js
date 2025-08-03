// Simple contact form handler (no backend)
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thank you for your message! We will get in touch soon.");
      form.reset();
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const carouselTrack = document.getElementById("auto-carousel");

  const imagePaths = [
    "gallery/gallery1.jpg",
    "gallery/gallery2.jpg",
    "gallery/gallery3.jpg",
    "gallery/gallery4.jpg",
    "gallery/gallery5.jpg",
    "gallery/gallery6.jpg",
    "gallery/gallery7.jpg",
    "gallery/gallery8.jpg",
    "gallery/gallery9.jpg",
    "gallery/gallery10.jpg",
    "gallery/gallery11.jpg",
    "gallery/gallery12.jpg",
  ];

  imagePaths.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Gallery Photo";
    img.classList.add("carousel-image");
    carouselTrack.appendChild(img);
  });

  // Função para rolar automaticamente
  let scrollPosition = 0;
  setInterval(() => {
    scrollPosition += 300; // ajuste conforme o tamanho das imagens
    if (scrollPosition >= carouselTrack.scrollWidth - carouselTrack.clientWidth) {
      scrollPosition = 0;
    }
    carouselTrack.scrollTo({
      left: scrollPosition,
      behavior: "smooth"
    });
  }, 3000); // a cada 3 segundos
});