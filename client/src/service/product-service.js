const _base = "http://localhost:5000"

function handleResponse(response) {

    return response.text().then(text => {
            const data = text && JSON.parse(text)
            if (!response.ok) {
                const error = (data && data.message) || response.statusText
                return Promise.reject(error)
            }

            return data
        }
    )
}

const load = async (body, method, url) => {
    const token = await JSON.parse(localStorage.getItem('token'))
    const requestOptions = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(body)
    }

    return await fetch(`${_base}/loads/${url}`, requestOptions)
        .then(handleResponse)
        .then(products => {
                return products
            }
        )
}

const avatar = async (body) => {
    const token = await JSON.parse(localStorage.getItem('token'))
    const requestOptions = {
        method: "POST",
        headers: {
            // 'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: body
    }

    return await fetch(`${_base}/auth/image`, requestOptions)
        .then(handleResponse)
        .then(products => {
                return products
            }
        )
}

const getUser = async () => {
    const token = await JSON.parse(localStorage.getItem('token'))
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }
    return await fetch("http://localhost:5000/auth/user", requestOptions)
        .then(handleResponse)
        .then(products => {
                return products
            }
        )
}

const getAllLoads = async () => {
    const token = await JSON.parse(localStorage.getItem('token'))
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }
    return await fetch("http://localhost:5000/loads", requestOptions)
        .then(handleResponse)
        .then(products => {
                return products
            }
        )
}

export const productService = {
    load,
    getUser,
    avatar,
    getAllLoads
}
