import { ToastImporter } from "../toast"


export const useRegister = async (formData, setLoading, push) => {
    const apiUrl = "http://api.partneringtosucceed.com/api/register"

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
        const res = await result.json()
        const { toastDanger } = ToastImporter(res)
        if (result.status == 201) {
            let regMsg
            let shouldRedirect
            switch(role) {
                case "admin":
                    regMsg = "Registration successful, check your mail and await admin approval!"
                    break
                case "Teacher":
                    regMsg = "Registration successful, check your mail and await admin approval!"
                    break
                case "Student":
                    regMsg = "Registration successful, you can now proceed to sign-in!"
                    shouldRedirect = true
                    break
            }
            const { toastSuccess } = ToastImporter(regMsg)
            console.log(regMsg)
            toastSuccess()
            setLoading(false)
            if (shouldRedirect === true){
                push("/auth")
            }
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