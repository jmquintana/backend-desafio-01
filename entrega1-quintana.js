class ProductManager {
	constructor() {
		this.products = [];
	}

	getProducts = () => {
		return this.products;
	};

	addProduct = (title, description, price, thumbnail, code, stock) => {
		const product = {
			id: this.products.length + 1,
			title,
			description,
			price,
			thumbnail,
			code,
			stock: this.getStock(code) + stock,
		};

		const productIndex = this.products.findIndex(
			(product) => product.code === code
		);

		if (productIndex === -1) {
			return this.products.push(product);
		} else {
			console.error("Duplicate product: not added to the list.");
			return "Duplicate product";
		}
	};

	getProductById = (productId) => {
		const productIndex = this.products.findIndex(
			(product) => product.id === productId
		);

		if (productIndex === -1) {
			// console.error("Product not found");
			return "Product not found";
		} else {
			return this.products[productIndex];
		}
	};

	getStock = (productCode) => {
		const productIndex = this.products.findIndex(
			(product) => product.code === productCode
		);

		if (productIndex === -1) {
			return 0;
		} else {
			return this.products[productIndex].stock;
		}
	};
}

let kiosko = new ProductManager();
console.log("TEST 01 - Get Products (vacío):", kiosko.getProducts());

kiosko.addProduct(
	"producto prueba",
	"Este es un producto prueba",
	200,
	"Sin imagen",
	"abc123",
	25
);
console.log("TEST 02 - Get Products (1 producto):", kiosko.getProducts());

console.log(
	"TEST 03 - Add Duplicate Product:",
	kiosko.addProduct(
		"producto prueba",
		"Este es un producto prueba",
		200,
		"Sin imagen",
		"abc123",
		25
	)
);
console.log("TEST 04 - Get Products:", kiosko.getProducts());
console.log("TEST 05 - Get Product By Id = 3:", kiosko.getProductById(3));
console.log("TEST 06 - Get Product By Id = 1:", kiosko.getProductById(1));
