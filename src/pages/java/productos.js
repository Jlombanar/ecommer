
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const categoryFilter = document.getElementById("category-filter");
  const priceFilter = document.getElementById("price-filter");
  const sortFilter = document.getElementById("sort-filter");
  const productsGrid = document.getElementById("products-grid");

  const products = Array.from(productsGrid.getElementsByClassName("product-card"));

  // Función para actualizar los productos según filtros y búsqueda
  function filterProducts() {
    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedPrice = priceFilter.value;
    const sortBy = sortFilter.value;

    let filtered = products;

    // --- FILTRO POR BÚSQUEDA ---
    if (searchText.trim() !== "") {
      filtered = filtered.filter((product) => {
        const name = product.querySelector("h3").textContent.toLowerCase();
        const desc = product.querySelector("p").textContent.toLowerCase();
        return name.includes(searchText) || desc.includes(searchText);
      });
    }

    // --- FILTRO POR CATEGORÍA ---
    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.dataset.category === selectedCategory
      );
    }

    // --- FILTRO POR PRECIO ---
    if (selectedPrice) {
      filtered = filtered.filter((product) => {
        const price = parseInt(product.dataset.price);
        if (selectedPrice.includes("-")) {
          const [min, max] = selectedPrice.split("-").map(Number);
          return price >= min && price <= max;
        } else if (selectedPrice.includes("+")) {
          const min = parseInt(selectedPrice);
          return price >= min;
        }
        return true;
      });
    }

    // --- ORDENAMIENTO ---
    filtered.sort((a, b) => {
      const priceA = parseInt(a.dataset.price);
      const priceB = parseInt(b.dataset.price);
      const nameA = a.querySelector("h3").textContent.trim();
      const nameB = b.querySelector("h3").textContent.trim();

      switch (sortBy) {
        case "price-asc":
          return priceA - priceB;
        case "price-desc":
          return priceB - priceA;
        case "name":
          return nameA.localeCompare(nameB);
        case "newest":
          // Si tuvieras una fecha podrías usarla aquí
          return Math.random() - 0.5; // orden aleatorio
        default:
          return 0;
      }
    });

    // --- LIMPIAR Y MOSTRAR ---
    productsGrid.innerHTML = "";
    if (filtered.length > 0) {
      filtered.forEach((p) => productsGrid.appendChild(p));
    } else {
      productsGrid.innerHTML = `
        <div class="col-span-full text-center text-gray-500 py-12 text-lg">
          No se encontraron productos con los criterios seleccionados 😢
        </div>
      `;
    }
  }

  // --- EVENTOS ---
  searchInput.addEventListener("input", filterProducts);
  categoryFilter.addEventListener("change", filterProducts);
  priceFilter.addEventListener("change", filterProducts);
  sortFilter.addEventListener("change", filterProducts);

  // Inicializar
  filterProducts();
});

// ==========================
// BOTONES DE COMPRAR Y DETALLES
// ==========================
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart-btn")) {
    const name = e.target.dataset.product;
    const price = parseInt(e.target.dataset.price);
    const id = e.target.dataset.id;

    alert(`✅ Producto agregado al carrito:\n${name} - $${price.toLocaleString()}`);
  }

  if (e.target.classList.contains("ver-detalles-btn")) {
    const productId = e.target.dataset.productId;
    alert(`🔍 Mostrando detalles del producto: ${productId}`);
  }
});
