class API {
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
                body: JSON.stringify(clientData)
            }
            const response = await fetch(`${this.apiUrl}/clients`, options)
            return await response.json()
        } catch (e) {
            console.error(e)
        }
    }

    async fetchOrders(clientId) {
        try {
            const res = await fetch(`${this.apiUrl}/orders`)
            const allOrders = await res.json();
            return allOrders.filter(order => order.clientId === clientId)
        } catch (e) {
            console.error(e)
            return []
        }
    }

    async addOrder(clientId, orderData) {
        try {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData)
            }
            const res = await fetch(`${this.apiUrl}/orders`, options)
            return await res.json()
        } catch (e) {
            console.error(e)
        }
    }
}