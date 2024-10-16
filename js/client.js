class Client {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.orders = [];
    }

    addOrder(order) {
        this.orders.push(order);
    }

    removeOrder(orderId) {
        this.orders = this.orders.filter(order => order.id !== orderId);
    }
}
