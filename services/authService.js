const authService = {
	login: async (email, password) => {
		console.log({ email, password })
		const token = '123-123-123-123-123-213'
		return new Promise(r => setTimeout(() => r({ token }), 1000))
	},
	register: async (data) => {
		console.log(data)
		const token = '123-123-123-123-123-213'
		return new Promise(r => setTimeout(() => r({ token }), 1000))
	}
}

export default authService
