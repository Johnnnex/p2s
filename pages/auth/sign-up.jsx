import Link from "next/link"
import { useEffect } from "react"
import { Poppins } from 'next/font/google'
import HeadComp from "@/layout/HeadComponent"
import { useRouter } from 'next/router'
import { useData } from "@/context/DataContext"


const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})


const Register = () => {
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
  return (
    <>
      <HeadComp title="Partnering To Succeed - Register" />
      <main className={`hold-transition h-[100vh] pt-[15vh] register-page ${poppins.className}`}>

        <section class="hold-transition pb-[20px]">
    <div class="w-[30%] mx-auto">
      <div class="register-logo">
        <Link href="../../index2.html"><b>P2S</b></Link>
      </div>

      <div class="register-box-body">
        <p class="login-box-msg">Register a new membership</p>

        <form action="../../index.html" className="mb-[1rem]" method="post">
          <div class="form-group has-feedback">
            <input type="text" class="form-control" placeholder="Full name" />
            <i class="fa-solid fa-user form-control-feedback"></i>
          </div>
          <div class="form-group has-feedback">
            <input type="email" class="form-control" placeholder="Email" />
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input type="password" class="form-control" placeholder="Password" />
            <i class="fa-solid fa-lock form-control-feedback"></i>
          </div>
          <div class="form-group has-feedback">
            <input type="password" class="form-control" placeholder="Retype password" />
            <i class="fa-solid fa-lock form-control-feedback"></i>
          </div>
          <div class="">
            <div class="">
              <div class="checkbox ">
                <label>
                  <input type="checkbox" /> I agree to the <a href="#">terms</a>
                </label>
              </div>
            </div>
            <div class="">
              <button type="submit" class="btn btn-primary btn-block btn-flat">Register</button>
            </div>
          </div>
        </form>

        {/* <div class="social-auth-links text-center">
          <p className="w-fit mx-auto">- OR -</p>
          <a href="#" class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Sign up using
            Facebook</a>
          <a href="#" class="btn btn-block btn-social btn-google btn-flat"><i class="fa fa-google-plus"></i> Sign up using
            Google+</a>
        </div> */}

        <Link href="/auth" class="text-center">I already have a membership</Link>
      </div>
    </div>
    </section>
      </main>
    </>
  )
}

export default Register
