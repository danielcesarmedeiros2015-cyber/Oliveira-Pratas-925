// ==========================================
// BANCO DE DADOS DE PRODUTOS (OLIVEIRA PRATAS 925)
// ==========================================
const PRODUCTS = [
    {
        id: 1,
        name: "Corrente Grumet 3mm",
        price: 150.00,
        category: "CORRENTES",
        image: "Corrente Grumet 3mm 70cm.jpg",
        description: "Corrente modelo Grumet fina em Prata 925 legítima. Alta durabilidade e brilho intenso."
    },
    {
        id: 2,
        name: "Corrente Grumet 10mm",
        price: 250.00,
        category: "CORRENTES",
        image: "Corrente Grumet 10mm 70cm.jpg",
        description: "Estilo marcante e pesado, ideal para quem busca destaque."
    },
    {
        id: 3,
        name: "Pulseira Grumet Masculina",
        price: 110.00,
        category: "PULSEIRAS",
        image: "pulseira8,2mm.jpg",
        description: "Pulseira masculina grossa e resistente em Prata 925."
    },
    {
        id: 4,
        name: "Pulseira Esteira 2,4mm",
        price: 99.00,
        category: "PULSEIRAS",
        image: "pulseira esteira 2,4mm.jpg",
        description: "Pulseira confortável, elegante e sofisticada."
    },
    {
        id: 5,
        name: "Bracelete Fio Torcido Prata 925",
        price: 130.00,
        category: "BRACELETES",
        image: "Bracelete fio Torçido prata 925.png",
        description: "Bracelete elegante com acabamento torcido."
    },
    {
        id: 6,
        name: "Piercing Pedrinha de Nariz",
        price: 30.00,
        category: "PIERCINGS",
        image: "Piercing Pedrinha nariz na Prata 925.webp",
        description: "Piercing ponto de luz para nariz em Prata 925."
    }
];

// ==========================================
// Lógica do Carrinho e Interface
// ==========================================
let cart = [];

document.addEventListener("DOMContentLoaded", () => {
    loadProducts("TODOS");
    updateCartCount();
});

function loadProducts(filterCategory) {
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
            <div class="product-img-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-img" onerror="this.src='https://via.placeholder.com/300?text=Indisponivel'">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
                <button class="add-cart-btn" onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
            </div>
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

function openCartModal() {
    const modal = document.getElementById("cartModal");
    const container = document.getElementById("cart-items-container");
    const totalEl = document.getElementById("cart-total-price");
    
    if (!modal || !container) return;

    container.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = `<p style="text-align: center; color: var(--text-secondary);">Seu carrinho está vazio.</p>`;
    } else {
        cart.forEach(item => {
            total += item.price * item.quantity;
            const itemDiv = document.createElement("div");
            itemDiv.className = "cart-item";
            itemDiv.innerHTML = `
                <img src="${item.image}" class="cart-item-img">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">R$ ${item.price.toFixed(2).replace('.', ',')} x ${item.quantity}</div>
                </div>
            `;
            container.appendChild(itemDiv);
        });
    }

    totalEl.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    modal.classList.add("active");
}

function closeCartModal() {
    const modal = document.getElementById("cartModal");
    if (modal) modal.classList.remove("active");
}

function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    let message = "Olá! Gostaria de fazer o seguinte pedido na Oliveira Pratas 925:\n\n";
    let total = 0;

    cart.forEach(item => {
        message += `- ${item.quantity}x ${item.name} (R$ ${(item.price * item.quantity).toFixed(2)})\n`;
        total += item.price * item.quantity;
    });

    message += `\n*Total: R$ ${total.toFixed(2)}*`;

    const encoded = encodeURIComponent(message);
    // Substitua pelo seu número de WhatsApp com DDD (Ex: 5511999999999)
    window.open(`https://wa.me/5599999999999?text=${encoded}`, '_blank');
}

function showNotification(msg) {
    const div = document.createElement("div");
    div.textContent = msg;
    div.style.cssText = "position: fixed; bottom: 20px; right: 20px; background: #fff; color: #000; padding: 12px 20px; border-radius: 8px; z-index: 3000; font-size: 14px; font-weight: 600; box-shadow: 0 4px 15px rgba(0,0,0,0.3);";
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 3000);
}
