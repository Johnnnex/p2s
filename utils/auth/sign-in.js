import { ToastImporter } from "../toast"


export const Login = async (email, password, setLoading, setIsLoggedIn) => {
    const apiUrl = "http://127.0.0.1:8000/api/login"


    const payload = {
        email: email,
        password: password
    };

    const jsonPayload = JSON.stringify(payload);

    try {
        const result = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: jsonPayload
        })
        const { toastDanger, toastSuccess } = ToastImporter()
        if (result.ok) {
            const {access_token, user} = await result.json()
            const { toastSuccess } = ToastImporter("Login Success!")
            toastSuccess()
            const userSession = {
                userIdentity: user[0],
                token: access_token,
                firstname: user[1],
                lastname: user[2],
                role: user[5],
            }
            sessionStorage.setItem("userSession", JSON.stringify(userSession))
            setLoading(false)
            setIsLoggedIn(true)
        }
        else {
            toastDanger()
            setLoading(false)
        }
    }
    catch (err) {
        const { toastDanger } = ToastImporter("Network connection error!")
        toastDanger()
        setLoading(false)
    }
}