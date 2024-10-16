class API {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    async fetchClients() {
        try {
            const response = await fetch(`${this.apiUrl}/clients`);
            return await response.json();
        } catch (error) {
            console.error('Помилка при отриманні клієнтів:', error);
            return [];
        }
    }

    async addClient(clientData) {
        try {
            const response = await fetch(`${this.apiUrl}/clients`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(clientData),
            });
            return await response.json();
        } catch (error) {
            console.error('Помилка при додаванні клієнта:', error);
        }
    }

    async fetchOrders(clientId) {
        try {
            const response = await fetch(`${this.apiUrl}/orders`);
            const allOrders = await response.json();
            return allOrders.filter(value => value.clientId === clientId)
        } catch (error) {
            console.error('Помилка при отриманні замовлень:', error);
            return [];
        }
    }

    async addOrder(clientId, orderData) {
        try {
            const response = await fetch(`${this.apiUrl}/orders`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });
            return await response.json();
        } catch (error) {
            console.error('Помилка при додаванні замовлення:', error);
        }
    }
}
