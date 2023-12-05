import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { Poppins, Space_Grotesk } from 'next/font/google'
import { useState } from 'react'


const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})
const sGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700"]
})

const Header = () => {
  const { pathname } = useRouter()
  const [navState, setNavState] = useState(false)
  const linkAttr = [
    {
      text: "About",
      path: "/homepage/about",
      id: 1
    },
    {
      text: "Services",
      path: "",
      id: 2
    },
    {
      text: "StartUps",
      path: "",
      id: 3
    },
    {
      text: "Partners",
      path: "",
      id: 4
    },
    {
      text: "Blogs",
      path: "",
      id: 5
    },
  ]
  const navEl = linkAttr.map(({text, path, id}) => {
    return (
      <li key={id} className={`cursor-pointer uppercase text-white p-[20px] font-[500] text-[12px] ${path == pathname && "activeLink"}`}>
        <Link href={path}>
          {text}
        </Link>
      </li>
    )
  })
  return (
    <header className="default-header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className={`navbar-brand text-white ${poppins.className} font-[600]`} href="index.html">
            {/* <Image height={1} width={50} src="/img/logo.png" alt="logo" /> */}
            P2S
          </a>
          <button onClick={() => setNavState(prev => !prev)} className="navbar-toggler" type="button">
            <span className="lnr lnr-menu"></span>
          </button>

          <div className={`navbar-collapse transition-[.4s] md:max-h-full md:visible ${navState == false ? "" : ""} justify-content-end align-items-center`}>
            <ul className={`${sGrotesk.className} navbar-nav`}>
              <li className={`cursor-pointer uppercase text-white p-[20px] font-[500] text-[12px]`}>
                <Link className={"/" == pathname && "activeLink"} href="/">
                  Home
                </Link>
              </li>
              <li className={`cursor-pointer uppercase text-white p-[20px] font-[500] text-[12px]`}>
                <Link className={"/homepage/about" == pathname && "activeLink"} href="/homepage/about">
                  About
                </Link>
              </li>
              <li className={`cursor-pointer uppercase text-white p-[20px] font-[500] text-[12px]`}>
                <Link className={"/homepage/courses" == pathname && "activeLink"} href="/homepage/courses">
                  Courses
                </Link>
              </li>
              {/* <li className="dropdown">
                <a className="dropdown-toggle" href="#" data-toggle="dropdown">
                  Pages
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="elements.html">Elements</a>
                  <a className="dropdown-item" href="course-details.html">Course Details</a>
                </div>
              </li>
              <li className="dropdown">
                <a className="dropdown-toggle" href="#" data-toggle="dropdown">
                  Blog
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="blog-home.html">Blog Home</a>
                  <a className="dropdown-item" href="blog-single.html">Blog Details</a>
                </div>
              </li> */}
              <li className={`cursor-pointer uppercase text-white p-[20px] font-[500] text-[12px]`}>
                <Link className={"/homepage/contact" == pathname && "activeLink"} href="/homepage/contact">
                  Contact
                </Link>
              </li>

            </ul>
            <Link href="/auth/sign-up" className={`${sGrotesk.className} flex gap-[10px]`}>
              <button className="btn-def btn-red">Apply Now</button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header