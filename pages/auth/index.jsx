import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Poppins } from 'next/font/google'
import { Oval } from 'react-loader-spinner'
import Link from "next/link"
import HeadComp from '@/layout/HeadComponent'
import { Login } from '@/utils/auth/sign-in'
import { useData } from "@/context/DataContext"

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const SignIn = () => {
  const { isLoggedIn, setIsLoggedIn, setIsOnHomepage } = useData()
  const { push } = useRouter()
  useEffect (() => {
    if (isLoggedIn) {
      push("/dashboard")
    }
    else {
      setIsOnHomepage(false)
    }
  }, [isLoggedIn])
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const [loading, setIsLoading] = useState(false)
  const inputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  const submitHandler = (e) => {
    e.preventDefault()
    setIsLoading(true)
    Login(formData.email, formData.password, setIsLoading, setIsLoggedIn)
  }
  return (
    <>
        <HeadComp title="Partnering To Succeed - Sign In" />
        <main className={`hold-transition h-[100vh] pt-[15vh] login-page ${poppins.className}`}>
          <section className="w-[28%] mx-auto">
            <div className="login-logo">
              <Link href="/"><b>P2S</b></Link>
            </div>
            <div className="login-box-body">
              <p className="login-box-msg">Sign in to start your session</p>

              <form onSubmit={submitHandler}>
                <div className="form-group has-feedback">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Email" 
                    value={formData.email} 
                    onChange={inputChange}
                    name="email" 
                  />
                  <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                </div>
                <div className="form-group has-feedback">
                  <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Password" 
                    value={formData.password}
                    onChange={inputChange}
                    name="password" 
                  />
                  <i className="fa-solid fa-lock form-control-feedback"></i>
                </div>
                <div className="row">
                  <div className="col-xs-4">
                    <button type="submit" className="btn btn-primary btn-block btn-flat">
                      {loading == true ? 
                        <div className="w-fit mx-auto">
                          <Oval
                            height="20"
                            width="30"
                            radius="9"
                            color="white"
                            ariaLabel="loading"
                            wrapperStyle
                          />
                        </div>
                        : 
                        "Sign In"
                      }
                    </button>
                  </div>
                </div>
              </form>
                  <br/>
              <Link href="#">I forgot my password</Link><br />
            </div>
          </section>
        </main>
    </>
  )
}

export default SignIn
