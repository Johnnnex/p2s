import { ToastImporter } from "../toast"


export const useRegister = async (formData, setLoading) => {
    const apiUrl = "http://127.0.0.1:8000/api/register"

    const { 
        fname,
        lname,
        role, 
        mail,
        password,
        cpassword,
        company,
        title,
        number,
        about
    } = formData
    const payload = {
        name: fname,
        lastname: lname,
        role: role,
        email: mail,
        password: password,
        password_confirmation: cpassword,
        company: company,
        title: title,
        phone: number,
        aboutuser: about
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
        const data = await result.json()
        const { toastDanger, toastSuccess } = ToastImporter(data)
        if (result.ok) {
            toastSuccess()
            setLoading(false)
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