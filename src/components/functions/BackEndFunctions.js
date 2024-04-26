export async function fetchItems() {
    try {
        const response = await fetch('http://localhost:8080/api/v1/items')
        if (!response.ok) {
            throw new Error('Failed to fetch items')
        }
        return await response.json()
    } catch (error) {
        console.error(error)
    }
}

export async function handleAddToCart(item) {
    try {
        let token = localStorage.getItem("token")

        const formData = new URLSearchParams()
        formData.append('itemId', item.id)
        formData.append('token', token)

        const response = await fetch('http://localhost:8080/api/v1/shopping/addItem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        })

        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return await response.text()

    } catch (error) {
        console.error('There was an error!', error)
    }
}

export async function logOut() {
    try {
        let token = localStorage.getItem("token")
        if(token === null) return false
        const formData = new URLSearchParams()
        formData.append('token', token)

        const response = await fetch('http://localhost:8080/api/v1/user/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        })

        if (!response.ok) {
            throw new Error('Network response was not ok')
        }

        const data = await response.text()
        if (data === "you logged out") {
            localStorage.removeItem("token")
            return true
        }
        console.log(data) // Вывод ответа сервера в консоль
    } catch (error) {
        console.error('There was an error!', error)
        return false
    }
}
