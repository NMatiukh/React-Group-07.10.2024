class Api {
    constructor(apiUrl) {
        this.apiUrl = apiUrl
    }

    async fetchClients() {
        try {
            const response = await fetch(`${this.apiUrl}/clients`)
            return await response.json()
        } catch (e) {
            console.error(e)
            return []
        }
    }

    async addClient(clientData) {
        try {
            
            
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(clientData),
            };
            
            const response = await fetch(`${this.apiUrl}/clients`, options)
            return await response.json()
        } catch (e) {
            console.error(e)
        }
    }

    async fetchOrders(clientId) {
        try {
            const response = await fetch(`${this.apiUrl}/orders`)
            const allOrders = await response.json();
            return allOrders.filter(order => order.clientId === clientId)
        } catch (e) {
            console.error(e)
            return []
        }
    }

    async addOrder(orderData) {
        try {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData),
            };

            const response = await fetch(`${this.apiUrl}/orders`, options)
            return await response.json()
        } catch (e) {
            console.error(e)
        }
    }

    async deleteClient(clientId) {
        try {
            const options = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            console.log(typeof clientId);
            const numСlientId = Number(clientId);
            const response = await fetch(`${this.apiUrl}/clients/${numСlientId}`, options);
            
            
            return await response.json()
        } catch (e) {
            console.error(e);
        }
    }

}