class CrmManager {
    constructor(apiUrl) {
        this.api = new API(apiUrl)
        this.clients = []
        this.currentClient = null
        this.init();
    }

    async init() {
        this.clients = await this.api.fetchClients()
        this.renderClients()
        this.setupEventListeners()
    }

    renderClients() {
        const clientList = document.getElementById('clientList')
        clientList.innerHTML = ''
        this.clients.forEach(client => {
            const li = document.createElement('li');
            li.textContent = client.name;
            li.addEventListener('click', () => {
                this.selectClient(client)
            })
            clientList.appendChild(li)
        })
    }

    selectClient(client) {
        this.currentClient = client;
        console.log(client)
        this.renderOrders(client.id)
    }

    async renderOrders(clientId) {
        const orders = await this.api.fetchOrders(clientId)
        const orderSection = document.getElementById('order-section')
        orderSection.innerHTML = `<h3>Замовлення клієнта: ${this.currentClient.name}</h3>`
        orders.forEach(order => {
            const orderDiv = document.createElement('div')
            orderDiv.textContent = `Замовлення №${order.id} - Статус: ${order.status} - Вартість: ${order.totalPrice} $`
            orderSection.appendChild(orderDiv)
        })
    }

    setupEventListeners() {
        document.getElementById('addClientBtn').addEventListener('click', () => {
            const clientName = document.getElementById('clientName').value;
            if (clientName) {
                const newClient = new Client(Date.now(), clientName)
                this.api.addClient(newClient).then(savedClient => {
                    this.clients.push(savedClient)
                    this.renderClients()
                })
            }
        })
    }
}

const crmManager = new CrmManager('http://localhost:3000')