class Order {
    constructor(id, status = 'new', clientId) {
        this.id = id;
        this.products = [];
        this.status = status;
        this.totalPrice = 0;
        this.clientId = clientId;

    }

    addProduct(product) {
        this.products.push(product)
        this.calculateTotal()
    }

    removeProduct(productId) {
        this.products = this.products.filter(product => product.id !== productId)
        this.calculateTotal()
    }


    calculateTotal() {
        this.totalPrice = this.products.reduce((sum, product) => sum + product.price, 0)
    }

    updateStatus(newStatus) {
        this.status = newStatus
    }
}