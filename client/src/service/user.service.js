

const _base = "http://localhost:5000"

function handleResponse(response) {
    // console.log(response)
    return response.text().then(text => {
        // console.log(text)
            const data = text && JSON.parse(text)
            // if (!response.ok) {
            //     if (response.status === 401) {
            //         // logout()
            //     }
            //     const error = (data && data.message) || response.statusText
            //     return Promise.reject(error)
            // }
            return data
        }
    )
}

const myAccount = async (body, url) => {

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    }

    return await fetch(`${_base}/auth/${url}`, requestOptions)
        .then(handleResponse)
        .then(user =>  user )
}

const update = async (body, method, url)=> {
    const token = await JSON.parse(localStorage.getItem('token'))
    const requestOptions = {
        method: method,
        headers: {
             'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(body)
    }

    return await fetch(`${_base}/auth/${url}`, requestOptions)
        .then(handleResponse)
        .then(user => user )
}


export function logout() {
    localStorage.removeItem('token')
    // this.props.history.push('/')
    window.location.reload()
}



export const userService = {
    logout,
    myAccount,
    update,
}
