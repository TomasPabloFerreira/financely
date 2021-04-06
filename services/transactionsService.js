const transactions = [
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 1 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 2 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 3 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 4 },
	{ date: '2020-01-01', type: 'Outcome', category: 'Freelance', amount: 10000, id: 5 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 6 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 7 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 8 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 9 },
	{ date: '2020-01-01', type: 'Outcome', category: 'Freelance', amount: 5, id: 10 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 11 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 12 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 13 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 14 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 15 },
	{ date: '2020-01-01', type: 'Outcome', category: 'Freelance', amount: 10000, id: 16 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 17 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 18 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 19 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 20 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 21 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 22 },
]

const transactionsService = {
	getTransactions: async () => {
		return new Promise(r => setTimeout(() => r(transactions), 1000))
	},
	removeTransaction: async id => {
		return new Promise(r => setTimeout(() => r(true), 1000))
	},
	editTransaction: async id => {
		return new Promise(r => setTimeout(() => r(true), 1000))
	},
	addTransaction: async id => {
		return new Promise(r => setTimeout(() => r(true), 1000))
	}
}

export default transactionsService
