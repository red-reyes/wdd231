document.addEventListener('DOMContentLoaded', async () => {
    const directory = document.getElementById('product-directory');

    const kidsBtn = document.getElementById('kids-btn');
    const teensBtn = document.getElementById('teens-btn');
    const adultsBtn = document.getElementById('adults-btn');

    // Modal elements
    const modal = document.createElement('div');
    modal.id = 'image-modal';
    modal.innerHTML = `
        <div id="modal-content">
            <span id="close-modal">&times;</span>
            <img id="modal-image" src="" alt="Enlarged Image" />
        </div>
    `;
    document.body.appendChild(modal);

    const closeModal = document.getElementById('close-modal');
    const modalImage = document.getElementById('modal-image');

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fetch JSON data
    const response = await fetch('data/products.json');
    const products = await response.json();

    // Render products
    const renderProducts = (products) => {
        directory.innerHTML = products.map(product => {
            const images = Array.isArray(product.image)
                ? product.image.map(img => `<img class="product-image" src="${img}" alt="${product.name}" />`).join('')
                : `<img class="product-image" src="${product.image}" alt="${product.name}" />`;

            return `
                <div class="product-card">
                    <div class="product-images">
                        ${images}
                    </div>
                    <h3>${product.name}</h3>
                    <p>Sizes: ${product.sizes}</p>
                    <p>Prices: ${product.prices}</p>
                </div>
            `;
        }).join('');

        // Add event listeners to images
        const productImages = document.querySelectorAll('.product-image');
        productImages.forEach(image => {
            image.addEventListener('click', () => {
                modalImage.src = image.src;
                modal.style.display = 'block';
            });
        });
    };

    // Filter products by category
    const filterProducts = (category) => {
        const filteredProducts = category === "all"
            ? products
            : products.filter(product => product.category === category);
        renderProducts(filteredProducts);
    };

    // Initially render only "Kids" products
    filterProducts("1");

    // Event listeners for filter buttons
    kidsBtn.addEventListener("click", () => filterProducts("1"));
    teensBtn.addEventListener("click", () => filterProducts("2"));
    adultsBtn.addEventListener("click", () => filterProducts("3"));
});