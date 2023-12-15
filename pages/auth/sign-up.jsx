import Link from "next/link"
import { useEffect, useState } from "react"
import { Poppins } from 'next/font/google'
import HeadComp from "@/layout/HeadComponent"
import { useRouter } from 'next/router'
import { useData } from "@/context/DataContext"
import { Oval } from 'react-loader-spinner'
import { useRegister } from "@/utils/auth/register"


const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})


const Register = () => {
  const { isLoggedIn, setIsLoggedIn, setIsOnHomepage } = useData()
  const [loading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    role: "", 
    mail: "",
    password: "",
    cpassword: "",
    company: "",
    title: "",
    number: "",
    about: ""
  })
  const { push } = useRouter()
  useEffect (() => {
    if (isLoggedIn) {
      push("/dashboard")
    }
    else {
      setIsOnHomepage(false)
    }
  }, [isLoggedIn])
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
    useRegister(formData, setIsLoading, push)
  }
  return (
    <>
      <HeadComp title="Partnering To Succeed - Register" />
      <main className={`hold-transition h-full pt-[10vh] register-page ${poppins.className}`}>

        <section className="hold-transition pb-[20px]">
    <div className="md:w-[30%] w-[90%] mx-auto">
      <div className="register-logo">
        <Link href="../../index2.html"><b>P2S</b></Link>
      </div>

      <div className="register-box-body">
        <p className="login-box-msg">Register a new membership</p>

        <form onSubmit={submitHandler} className="mb-[1rem]">
          <div className="form-group has-feedback">
            <input 
              type="text" 
              className="form-control" 
              onChange={inputChange} 
              placeholder="First name" 
              name="fname"
              value={formData.fname}
              required
            />
            <i className="fa-solid fa-user form-control-feedback"></i>
          </div>
          <div className="form-group has-feedback">
            <input 
              type="text" 
              className="form-control" 
              onChange={inputChange} 
              placeholder="Last name" 
              value={formData.lname}
              name="lname"
              required 
            />
            <i className="fa-solid fa-user form-control-feedback"></i>
          </div>
          <div className="form-group has-feedback">
            <select className="form-control" onChange={inputChange} name="role">
              <option disabled>Select your role</option>
              <option value="admin">Admin</option>
              <option value="Teacher">Teacher</option>
              <option value="Student">Student</option>
            </select>
            <i className="fa-solid fa-certificate form-control-feedback"></i>
          </div>
          <div className="form-group has-feedback">
            <input 
              type="email" 
              className="form-control" 
              onChange={inputChange} 
              placeholder="Email" 
              value={formData.mail}
              name="mail"
              required 
            />
            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div className="form-group has-feedback">
            <input 
              type="password" 
              className="form-control" 
              onChange={inputChange} 
              placeholder="Password" 
              value={formData.password}
              name="password"
              required
            />
            <i className="fa-solid fa-lock form-control-feedback"></i>
          </div>
          <div className="form-group has-feedback">
            <input 
              type="password" 
              className="form-control" 
              onChange={inputChange} 
              placeholder="Retype password"
              value={formData.cpassword}
              name="cpassword" 
              required
            />
            <i className="fa-solid fa-lock form-control-feedback"></i>
          </div>
          <div className="form-group has-feedback">
            <input 
              type="text" 
              className="form-control" 
              onChange={inputChange} 
              value={formData.company}
              name="company"
              placeholder="Company" 
              required 
            />
            <i className="fa-solid fa-building form-control-feedback"></i>
          </div>
          <div className="form-group has-feedback">
            <input 
              type="text" 
              title="If no title, input Mr/Mrs" 
              onChange={inputChange} 
              className="form-control" 
              placeholder="Title" 
              value={formData.title}
              name="title"
              required
            />
            <i className="fa-solid fa-address-card form-control-feedback"></i>
          </div>
          <div className="form-group has-feedback">
            <input 
              type="number" 
              className="form-control" 
              onChange={inputChange} 
              placeholder="Phone number" 
              name="number"
              value={formData.number}
              required 
            />
            <i className="fa-solid fa-phone form-control-feedback"></i>
          </div>
          <div className="form-group has-feedback">
            <input 
              type="text" 
              className="form-control" 
              onChange={inputChange} 
              placeholder="About" 
              value={formData.about}
              name="about"
              required 
            />
            <i className="fa-solid fa-info form-control-feedback"></i>
          </div>
          <div className="">
            <div className="">
              <div className="checkbox">
                <label>
                  <input type="checkbox" required/> I agree to the <a href="#">terms</a>
                </label>
              </div>
            </div>
            <div className="">
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
                  "Register"
                }
              </button>
            </div>
          </div>
        </form>

        <Link href="/auth" className="text-center">I already have a membership</Link>
      </div>
    </div>
    </section>
      </main>
    </>
  )
}

export default Register
