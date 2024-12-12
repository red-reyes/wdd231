document.addEventListener('DOMContentLoaded', async () => {
    const directory = document.getElementById('product-directory');
    const gridViewBtn = document.getElementById('gridview');
    const listViewBtn = document.getElementById('listview');
    const allBtn = document.getElementById('all-btn');
    const kidsBtn = document.getElementById('kids-btn');
    const teensBtn = document.getElementById('teens-btn');
    const adultsBtn = document.getElementById('adults-btn');

    // Fetch JSON data
    const response = await fetch('data/products.json');
    const products = await response.json();

    let isGrid = true; // Default to grid view

    // Render products
    const renderProducts = (products, isGrid) => {
        directory.innerHTML = products.map(product => `
             <div class="${isGrid ? 'product-card' : 'product-list'}">
                <img src="${product.image}" alt="${product.name}" />
                <h3>${product.name}</h3>
                <p>${product.sizes}</p>
                <p>${product.prices}</p>
            </div>
        `).join('');
    };
    // Initially render all products in grid view
    renderProducts(products, isGrid);

    // Filter products by category
    const filterProducts = (category) => {
        const filteredProducts = category === "all" 
            ? products 
            : products.filter(product => product.category === category);
        renderProducts(filteredProducts, isGrid);
    };

    // Event listeners for filter buttons
    allBtn.addEventListener("click", () => filterProducts("all"));
    kidsBtn.addEventListener("click", () => filterProducts("1"));
    teensBtn.addEventListener("click", () => filterProducts("2"));
    adultsBtn.addEventListener("click", () => filterProducts("3"));

    // Toggle to grid view
    gridViewBtn.addEventListener('click', () => {
        isGrid = true;
        renderProducts(products, isGrid);
    });

    // Toggle to list view
    listViewBtn.addEventListener('click', () => {
        isGrid = false;
        renderProducts(products, isGrid);
    });
});
