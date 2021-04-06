import { useState, useEffect } from 'react'

const useCRUD = (serviceGet, serviceAdd, serviceEdit, serviceRemove) => {

	const [state, setState] = useState([])
	const [loading, setLoading] = useState(false)

	const handleError = e => {
		console.log(e)
		setLoading(false)
		return false
	}

	const handleAdd = async(item) => {
		setLoading(true)
		const result = await serviceAdd(item)
		const id = Math.random()
		console.log('new item', {...item, id})
		const newState = [...state, {...item, id}]
		setState(newState)
		setLoading(false)
	}

	const handleEdit = async(item) => {
		setLoading(true)
		const result = await serviceEdit(item)
		const newState = state.map(x => x.id === item.id ? item : x)
		setState(newState)
		setLoading(false)
	}

	const handleRemove = async(id) => {
		try{
			setLoading(true)
			const result = await serviceRemove(id)

			const newState = state.filter(x => x.id != id)
			setState(newState)

			setLoading(false)
			return result
		} catch(e) {
			return handleError(e)
		}
	}

	const fetchData = async () => {
		try{
			setLoading(true)
			const data = await serviceGet()
			setState(data)
			setLoading(false)
		} catch(e) {
			return handleError(e)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	return { handleAdd, handleEdit, handleRemove, loading, state }
}

export default useCRUD
