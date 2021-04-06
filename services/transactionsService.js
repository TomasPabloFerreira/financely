const transactions = [
	{ "amount": 100, "category": { "key": "Freelance", "label": "Freelance", }, "date": new Date(), "description": "123123",
		"id": 1, "title": "123", "type": { "key": "Income", "label": "Income", },
	},
	{ "amount": 100, "category": { "key": "Freelance", "label": "Freelance", }, "date": new Date(), "description": "123123",
		"id": 2, "title": "123", "type": { "key": "Income", "label": "Income", },
	},
	{ "amount": 100, "category": { "key": "Freelance", "label": "Freelance", }, "date": new Date(), "description": "123123",
		"id": 3, "title": "123", "type": { "key": "Income", "label": "Income", },
	},
	{ "amount": 100, "category": { "key": "Freelance", "label": "Freelance", }, "date": new Date(), "description": "123123",
		"id": 4, "title": "123", "type": { "key": "Outcome", "label": "Outcome", },
	},
	{ "amount": 100, "category": { "key": "Freelance", "label": "Freelance", }, "date": new Date(), "description": "123123",
		"id": 5, "title": "123", "type": { "key": "Outcome", "label": "Outcome", },
	},
	{ "amount": 100, "category": { "key": "Freelance", "label": "Freelance", }, "date": new Date(), "description": "123123",
		"id": 6, "title": "123", "type": { "key": "Outcome", "label": "Outcome", },
	},
	{ "amount": 100, "category": { "key": "Freelance", "label": "Freelance", }, "date": new Date(), "description": "123123",
		"id": 7, "title": "123", "type": { "key": "Outcome", "label": "Outcome", },
	},
	{ "amount": 100, "category": { "key": "Freelance", "label": "Freelance", }, "date": new Date(), "description": "123123",
		"id": 8, "title": "123", "type": { "key": "Income", "label": "Income", },
	},
	{ "amount": 100, "category": { "key": "Freelance", "label": "Freelance", }, "date": new Date(), "description": "123123",
		"id": 9, "title": "123", "type": { "key": "Income", "label": "Income", },
	},
	{ "amount": 100, "category": { "key": "Freelance", "label": "Freelance", }, "date": new Date(), "description": "123123",
		"id": 10, "title": "123", "type": { "key": "Income", "label": "Income", },
	},
	{ "amount": 100, "category": { "key": "Freelance", "label": "Freelance", }, "date": new Date(), "description": "123123",
		"id": 11, "title": "123", "type": { "key": "Income", "label": "Income", },
	},
	{ "amount": 100, "category": { "key": "Freelance", "label": "Freelance", }, "date": new Date(), "description": "123123",
		"id": 12, "title": "123", "type": { "key": "Income", "label": "Income", },
	},
	{ "amount": 100, "category": { "key": "Freelance", "label": "Freelance", }, "date": new Date(), "description": "123123",
		"id": 13, "title": "123", "type": { "key": "Income", "label": "Income", },
	},
]

const transactionsService = {
	getTransactions: async () => {
		return new Promise(r => setTimeout(() => r(transactions), 1000))
	},
	removeTransaction: async id => {
		return new Promise(r => setTimeout(() => r(true), 200))
	},
	editTransaction: async id => {
		return new Promise(r => setTimeout(() => r(true), 200))
	},
	addTransaction: async id => {
		return new Promise(r => setTimeout(() => r(true), 200))
	}
}

export default transactionsService
