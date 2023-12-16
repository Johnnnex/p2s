import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { Poppins, Space_Grotesk } from 'next/font/google'
import { useState, useEffect } from 'react'


const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})
const sGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700"]
})

const Header = () => {
  const { pathname, events } = useRouter()
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
  useEffect(() => {
    const onHashChangeStart = (url) => {
      setNavState(false)
    };

    events.on("hashChangeStart", onHashChangeStart)
    events.on("routeChangeStart", onHashChangeStart)

    return () => {
        events.off("hashChangeStart", onHashChangeStart)
        events.off("routeChangeStart", onHashChangeStart)
    };
}, [events]);
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
        <div className="w-full flex justify-between items-center">
          <Link className={`text-white ${poppins.className} font-[600]`} href="/">
            P2S
          </Link>
          <button onClick={() => setNavState(!navState)} className="navbar-toggler" type="button">
            <span className="lnr lnr-menu"></span>
          </button>
          <div className={`flex items-center text-center pb-[30px] md:pb-0 pr-[1vw] absolute md:relative bg-[#FC2C2C30] md:bg-transparent w-full left-0 md:top-0 top-[7vh] flex-col md:flex-row transition-[.4s] md:max-h-full ${navState == true ? "" : "classInvisible"} justify-content-end align-items-center`}>
            <ul className={`${sGrotesk.className} flex flex-col md:flex-row`}>
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
              <li className={`cursor-pointer uppercase text-white p-[20px] font-[500] text-[12px]`}>
                <Link className={"/homepage/contact" == pathname && "activeLink"} href="/homepage/contact">
                  Contact
                </Link>
              </li>

            </ul>
            <a href="https://dashboard.partneringtosucceed.com/sign-up" className={`${sGrotesk.className} flex gap-[10px]`}>
              <button className="btn-def btn-red">Apply Now</button>
            </a>
        
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header