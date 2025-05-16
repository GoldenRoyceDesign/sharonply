
const products = [
    {
        title: "Plywood",
        desc: "Premium quality plywood for long-lasting durability.",
        image: "assets/images/default-product.png"
    },
    {
        title: "Prelam",
        desc: "Stylish and ready-to-use prelam boards.",
        image: "assets/images/product1.png"
    },
    {
        title: "Teak",
        desc: "Natural teak wood sheets for elegant finish.",
        image: "assets/images/product2.png"
    },
    {
        title: "Veneer",
        desc: "Decorative veneer sheets in various patterns.",
        image: "assets/images/product3.png"
    },
    {
        title: "Door",
        desc: "Sturdy and aesthetic ready-made doors.",
        image: "assets/images/product4.png"
    }
];

function changeProduct(index) {
  document.getElementById("product-title").textContent = products[index].title;
  document.getElementById("product-desc").textContent = products[index].desc;
  document.getElementById("product-image").src = products[index].image;

  // Remove active from all
  document.querySelectorAll('.tab-card').forEach((card, i) => {
    card.classList.toggle("active", i === index);
  });
}




const testimonials = document.querySelectorAll('.testimonial-wrapper');
  const dots = document.querySelectorAll('.slider-dots');

  function showTestimonial(index) {
    testimonials.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });

    // update all dot groups
    dots.forEach(dot => dot.classList.remove('active'));
    const groups = document.querySelectorAll('.testimonial-wrapper')[index].querySelectorAll('.slider-dots');
    groups[index].classList.add('active');
  }

  // Stop video on modal close
  ['video1', 'video2', 'video3'].forEach(id => {
    const iframe = document.getElementById(id);
    const modal = document.getElementById(iframe.closest('.modal').id);
    modal.addEventListener('hidden.bs.modal', () => {
      iframe.src = iframe.src;
    });
  });


document.addEventListener("DOMContentLoaded", function () {

    const track = document.getElementById("videoTrack");
    const cards = document.querySelectorAll(".video-card");
    const visibleCount = 4;
    let currentIndex = 0;

    window.slideVideos = function (direction) {
      const cardWidth = cards[0].offsetWidth + 16; // 16px = card margin
      const maxIndex = cards.length - visibleCount;

      currentIndex += direction;
      if (currentIndex < 0) currentIndex = 0;
      if (currentIndex > maxIndex) currentIndex = maxIndex;

      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    };
  });


   function openYouTubeModal(videoUrl) {
    const iframe = document.getElementById('galleryModalIframe');
    iframe.src = videoUrl + "?autoplay=1";  // autoplay when opened
    const modal = new bootstrap.Modal(document.getElementById('galleryVideoModal'));
    modal.show();

    // Stop video when modal is closed
    document.getElementById('galleryVideoModal').addEventListener('hidden.bs.modal', () => {
      iframe.src = '';
    });
  }