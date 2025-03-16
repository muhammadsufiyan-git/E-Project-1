document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.hidden');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.remove('hidden');
            element.classList.add('slide-up');
        }, index * 200); 
    });
});

// Toggle sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
}

// Toggle search bar
function toggleSearch() {
    const searchBar = document.getElementById('searchBar');
    searchBar.style.display = searchBar.style.display === 'block' ? 'none' : 'block';
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('active');
}

function toggleSearch() {
    const searchBar = document.getElementById('searchBar');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    if (searchBar.style.display === 'block') {
        searchBar.style.display = 'none';
        overlay.classList.remove('active');
    } else {
        searchBar.style.display = 'block';
        overlay.classList.add('active');
    }

    overlay.onclick = function () {
        searchBar.style.display = 'none';
        overlay.classList.remove('active');
    };
}


let currentIndex = 0;
const reviewsWrapper = document.querySelector('.reviews-wrapper');
const totalReviews = document.querySelectorAll('.review').length;

function moveSlider() {
    currentIndex = (currentIndex + 1) % totalReviews;
    updateSliderPosition();
}

function updateSliderPosition() {
    const newTransformValue = -currentIndex * 100;
    reviewsWrapper.style.transform = `translateX(${newTransformValue}%)`;
}

setInterval(moveSlider, 3000);

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".product-card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        { threshold: 0.3 }
    );

    cards.forEach((card) => {
        observer.observe(card);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.hidden');

    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.remove('hidden');
            element.classList.add('slide-up');
        }, index * 200);
    });
});

const products = {
    glasses1: {
        title: "Oval Flat Lens Sunglasses",
        img: "https://klasie-store-demo.myshopify.com/cdn/shop/products/product60.jpg?v=1704550117",
        price: "$89.00",
        desc: "These stylish oval flat lens sunglasses are perfect for sunny days."
    },
    glasses2: {
        title: "Nina Cat Eye Sunglasses",
        img: "https://klasie-store-demo.myshopify.com/cdn/shop/products/product59.jpg?v=1704550114",
        price: "$145.00",
        desc: "Elegant cat-eye sunglasses for a chic look."
    },
    glasses3: {
        title: "Clubmaster Square Sunglasses",
        img: "https://klasie-store-demo.myshopify.com/cdn/shop/products/product56.jpg?v=1704550108",
        price: "$430.00",
        desc: "Classic square sunglasses for a timeless look."
    },
    glasses4: {
        title: "Clubmaster Square Prescription",
        img: "https://klasie-store-demo.myshopify.com/cdn/shop/products/product47.jpg?v=1704550096",
        price: "$212.00",
        desc: "Prescription sunglasses with a square frame."
    },
    glasses5: {
        title: "Octagonal Flat Lens Sunglasses",
        img: "https://klasie-store-demo.myshopify.com/cdn/shop/products/product39.jpg?v=1704550075",
        price: "$32.00",
        desc: "Unique octagonal sunglasses for a modern look."
    },
    glasses6: {
        title: "Clubround Round Sunglasses",
        img: "https://klasie-store-demo.myshopify.com/cdn/shop/products/product31.jpg?v=1704550061",
        price: "$42.00",
        desc: "Round sunglasses for a retro vibe."
    },
    glasses7: {
        title: "Prescription Eyeglass Frames",
        img: "https://klasie-store-demo.myshopify.com/cdn/shop/products/product40.jpg?v=1704550079",
        price: "$22.00",
        desc: "Stylish prescription eyeglass frames."
    },
    glasses8: {
        title: "Double Round Sunglasses",
        img: "https://klasie-store-demo.myshopify.com/cdn/shop/products/product25.jpg?v=1704550053",
        price: "$21.00",
        desc: "Double round sunglasses for a unique look."
    },
    glasses9: {
        title: "Hexagonal Sunglasses",
        img: "https://klasie-store-demo.myshopify.com/cdn/shop/products/product59.jpg?v=1704550114",
        price: "$12.00",
        desc: "Hexagonal sunglasses for a bold statement."
    },
    glasses10: {
        title: "Liteforce Square Sunglasses",
        img: "https://klasie-store-demo.myshopify.com/cdn/shop/products/product39.jpg?v=1704550075",
        price: "$80.00",
        desc: "Lightweight square sunglasses for comfort."
    },
    glasses11: {
        title: "Gradient Aviator Sunglasses",
        img: "https://klasie-store-demo.myshopify.com/cdn/shop/products/product13.jpg?v=1704550029",
        price: "$211.00",
        desc: "Gradient aviator sunglasses for a stylish look."
    },
    glasses12: {
        title: "Aviator Sunglasses",
        img: "https://klasie-store-demo.myshopify.com/cdn/shop/products/product39.jpg?v=1704550075",
        price: "$312.00",
        desc: "Classic aviator sunglasses for a timeless style."
    },

    // Lenses Products
    lenses1: {
        title: "Blue Light Lenses",
        img: "https://ainak.pk/wp-content/uploads/2024/09/freshkon-mosaic.jpg",
        price: "$79.00",
        desc: "These blue light lenses reduce eye strain from screens."
    },
    lenses2: {
        title: "Anti-Reflective Lenses",
        img: "https://ainak.pk/wp-content/uploads/2024/09/freshkon-mosaic-1-copy.webp",
        price: "$99.00",
        desc: "Reduce glare with these anti-reflective lenses."
    },
    lenses3: {
        title: "Transition Lenses",
        img: "https://ainak.pk/wp-content/uploads/2024/09/freshlook-copy-2.jpg",
        price: "$149.00",
        desc: "Lenses that adjust to light conditions."
    },
    lenses4: {
        title: "Multifocal Lenses",
        img: "https://ainak.pk/wp-content/uploads/2024/09/freshlook-oneday.jpg",
        price: "$249.00",
        desc: "Seamless vision correction for all distances."
    },
    lenses5: {
        title: "Polarized Lenses",
        img: "https://ainak.pk/wp-content/uploads/2024/09/bella-diamond-aseel-new.webp",
        price: "$89.00",
        desc: "Polarized lenses for reduced glare."
    },
    lenses6: {
        title: "Photochromic Lenses",
        img: "https://ainak.pk/wp-content/uploads/2024/09/bella-glow.jpg",
        price: "$129.00",
        desc: "Lenses that darken in sunlight."
    },
    lenses7: {
        title: "UV Protection Lenses",
        img: "https://ainak.pk/wp-content/uploads/2024/09/avaira-vitality-toric-1.webp",
        price: "$59.00",
        desc: "Lenses with 100% UV protection."
    },
    lenses8: {
        title: "High-Index Lenses",
        img: "https://ainak.pk/wp-content/uploads/2024/09/bella-elite-copy-2.jpg",
        price: "$199.00",
        desc: "Thin and lightweight high-index lenses."
    },
    lenses9: {
        title: "Anti-Fog Lenses",
        img: "https://ainak.pk/wp-content/uploads/2024/09/one-day-1-scaled-1.webp",
        price: "$69.00",
        desc: "Lenses that prevent fogging."
    },
    lenses10: {
        title: "Scratch-Resistant Lenses",
        img: "https://ainak.pk/wp-content/uploads/2024/09/bella-diamond-box-copy-6.jpg",
        price: "$79.00",
        desc: "Durable scratch-resistant lenses."
    },
    lenses11: {
        title: "Blue Light Blocking Lenses",
        img: "https://ainak.pk/wp-content/uploads/2024/09/bella-natural-copy-3-1.jpg",
        price: "$89.00",
        desc: "Lenses that block harmful blue light."
    },
    lenses12: {
        title: "Progressive Lenses",
        img: "https://ainak.pk/wp-content/uploads/2024/09/acuvue-1day.jpg",
        price: "$299.00",
        desc: "Progressive lenses for seamless vision."
    }
};

function showProductDetails(productId) {
    const product = products[productId];
    if (product) {
        document.getElementById('product-details-img').src = product.img;
        document.getElementById('product-details-title').innerText = product.title;
        document.getElementById('product-details-price').innerText = product.price;
        document.getElementById('product-details-description').innerText = product.desc;
        document.getElementById('product-details-section').classList.add('active');
    }
}

function goBack() {
    document.getElementById('product-details-section').classList.remove('active');
}

function showPaymentSection() {
    document.getElementById('payment-section').classList.remove('hidden-section');
}
function showSection(sectionId) {
    document.getElementById('glasses-section').classList.add('hidden-section');
    document.getElementById('lenses-section').classList.add('hidden-section');
    document.getElementById('product-details-section').classList.add('hidden-section');
    document.getElementById('payment-section').classList.add('hidden-section');
    document.getElementById(sectionId).classList.remove('hidden-section');
}

showSection('glasses-section');

function showPaymentSection() {
    document.getElementById('product-details-section').classList.remove('active');
    document.getElementById('payment-section').classList.add('active');
}

function goBackToProductDetails() {
    document.getElementById('payment-section').classList.remove('active');
    document.getElementById('product-details-section').classList.add('active');
}

function goBack() {
    document.getElementById('product-details-section').classList.remove('active');
    document.getElementById('payment-section').classList.remove('active');
}

function handlePayNow(event) {
    event.preventDefault();

    setTimeout(() => {
        alert("Payment successful! Redirecting to the main page...");
        document.getElementById('payment-section').classList.remove('active');
        showSection('glasses-section');
    }, 1000);
}

document.querySelector("#payment-section form").addEventListener("submit", handlePayNow);
