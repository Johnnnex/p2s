import { ToastImporter } from "../toast"


export const Login = async (email, password, setLoading, setIsLoggedIn) => {
    const apiUrl = "http://localhost:3001/login"


    const payload = {
        mail: email,
        passWord: password
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
        const { message, userCredentials } = await result.json()
        const { toastDanger, toastSuccess } = ToastImporter(message)
        if (result.ok) {
            toastSuccess()
            const userSession = {
                userIdentity: userCredentials.userId,
                token: userCredentials.userToken,
                username: userCredentials.fullName
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