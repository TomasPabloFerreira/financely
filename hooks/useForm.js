import { useState } from 'react'

const useForm = (initialState, onSubmit) => {

	const [inputs, setInputs] = useState(initialState)

	const subscribe = fieldName => value => {
		setInputs({ ...inputs, [fieldName]: value })
	}

	const submit = () => {
		onSubmit(inputs);
		setInputs(initialState)
	}

	const reset = initial => { setInputs(initial) }

	return { subscribe, inputs, submit, reset }
}

export default useForm
