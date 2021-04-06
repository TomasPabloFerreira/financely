import { useState } from 'react'

const useForm = (initialState, onSubmit) => {

	const [inputs, setInputs] = useState(initialState)

	const subscribe = fieldName => value => {
		setInputs({ ...inputs, [fieldName]: value })
	}

	const submit = () => { onSubmit(inputs) }

	return { subscribe, inputs, submit  }
}

export default useForm
