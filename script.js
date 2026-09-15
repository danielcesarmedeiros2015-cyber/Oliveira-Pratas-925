// ==========================================
// BANCO DE DADOS DE PRODUTOS (OLIVEIRA PRATAS 925)
// ==========================================
const PRODUCTS = [
    {
        id: 1,
        name: "Corrente Grumet 3mm",
        price: 150.00,
        category: "CORRENTES",
        image: "corrente_grumet_3mm.jpg",
        isBestSeller: true,
        description: "Corrente modelo Grumet fina em Prata 925 legítima. Alta durabilidade e brilho intenso."
    },
    {
        id: 2,
        name: "Corrente Perna de Grilo",
        price: 180.00,
        category: "CORRENTES",
        image: "corrente_perna_de_grilo.jpg",
        isBestSeller: false,
        description: "Estilo único e moderno, ideal para o dia a dia."
    },
    {
        id: 3,
        name: "Pulseira Grumet Masculina",
        price: 110.00,
        category: "PULSEIRAS MASCULINAS",
        image: "pulseira8,2mm.jpg",
        isBestSeller: true,
        description: "Pulseira masculina grossa e resistente em Prata 925."
    },
    {
        id: 4,
        name: "Pulseira Cama 2,4mm",
        price: 99.00,
        category: "PULSEIRAS MASCULINAS",
        image: "pulseira cama 2,4mm.jpg",
        isBestSeller: true,
        description: "Pulseira confortável e sofisticada."
    },
    {
        id: 5,
        name: "Bracelete Fio Torcido Prata 925",
        price: 130.00,
        category: "BRACELETES",
        image: "Bracelete fio Torçido prata 925.png",
        isBestSeller: false,
        description: "Bracelete elegante com acabamento torcido."
    },
    {
        id: 6,
        name: "Piercing Pedrinha de Nariz",
        price: 30.00,
        category: "PIERCINGS",
        image: "Piercing Pedrinha nariz em Prata 925.webp",
        isBestSeller: true,
        description: "Piercing ponto de luz para nariz em Prata 925."
    }
];

// ==========================================
// Lógica do Carrinho e Interface
// ==========================================
let cart = [];

document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
    updateCartCount();
});

function loadProducts(filterCategory = "TODOS") {
    const grid = document.getElementById("product-grid");
    if (!grid) return;
    
    grid.innerHTML = "";

    const filtered = filterCategory === "TODOS" 
        ? PRODUCTS 
        : PRODUCTS.filter(p => p.category === filterCategory);

    filtered.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300?text=Imagem+Indisponivel'">
            <h3>${product.name}</h3>
            <p class="price">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
            <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
        `;
        grid.appendChild(card);
    });
}

function filterProducts(category) {
    loadProducts(category);
}

function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartCount();
    showNotification(`${product.name} adicionado ao carrinho!`);
}

function updateCartCount() {
    const countEl = document.getElementById("cart-count");
    if (countEl) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        countEl.textContent = totalItems;
    }
}

function showNotification(msg) {
    // Cria um alerta simples na tela
    const div = document.createElement("div");
    div.className = "toast-notification";
    div.textContent = msg;
    div.style.cssText = "position: fixed; bottom: 20px; right: 20px; background: #000; color: #fff; padding: 12px 20px; border-radius: 5px; z-index: 1000; font-size: 14px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);";
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 3000);
}
