import React from 'react'

function useForm<T>(defaultData: T) {
    const [data, setData] = React.useState(defaultData)

    function handleChange(e) {
        setData({ ...data, [e.target.getAttribute('name')]: e.target.value })
    }

    return {
        handleChange,
        data
    }
}

export default useForm
