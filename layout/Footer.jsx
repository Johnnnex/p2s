import { Poppins, Space_Grotesk } from 'next/font/google'
import { useRouter } from 'next/router'
import Link from "next/link"

const sGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700"]
})

const Footer = () => {
  const { pathname } = useRouter()
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
    <li key={id} className={`${path == pathname && "activeLink"}`}>
      <Link href={path}>
        {text}
      </Link>
    </li>
  })
  return (
    <footer className={`${sGrotesk.className} footer-area section-gap`}>
      <div className="container w-[90%] mx-auto">
        <div className="row">
          <div className="col-lg-2 col-md-6 single-footer-widget">
            <h4>Top Products</h4>
            <ul>
              <li><a href="#">Managed Website</a></li>
              <li><a href="#">Manage Reputation</a></li>
              <li><a href="#">Power Tools</a></li>
              <li><a href="#">Marketing Service</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 single-footer-widget">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link className={`${"/" == pathname && "activeLink"}`} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={`${"/homepage/about" == pathname && "activeLink"}`} href="/homepage/about">
                  About
                </Link>
              </li>
              <li>
                <Link className={`${"/homepage/courses" == pathname && "activeLink"}`} href="/homepage/courses">
                  Courses
                </Link>
              </li>
              <li>
                <Link className={`${"/homepage/contact" == pathname && "activeLink"}`} href="/homepage/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 single-footer-widget">
            <h4>Company</h4>
            <ul>
              <li><a href="#">The Team</a></li>
              <li><a href="#">The Board</a></li>
              <li><a href="#">The Talents</a></li>
              <li><a href="#">The Treasures</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 single-footer-widget">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Hire Experts</a></li>
              <li><a href="#">Corporate Trainings</a></li>
              <li><a href="#">Service Creation</a></li>
              <li><a href="#">Partnership</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 single-footer-widget">
            <h4>Newsletter</h4>
            <p>You can trust us. we only send promo offers,</p>
            <div className="form-wrap" id="mc_embed_signup">
              <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
              method="get" className="form-inline">
                <input className="form-control" name="EMAIL" placeholder="Your Email Address" type="email" />
                <button className="click-btn btn btn-default text-uppercase">subscribe</button>
                {/* <div style={{position: "absolute", left: "-5000px"}}>
                  <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text" />
                </div> */}

                <div className="info"></div>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-bottom row align-items-center">
          <p className="footer-text m-0 col-lg-8 col-md-12">
            Copyright 2023 | All rights reserved
          </p>
          <div className="col-lg-4 col-md-12 footer-social">
            <a href="#"><i className="fa-brands fa-facebook-f" style={{color: "#ffffff"}}></i></a>
            <a href="#"><i className="fa-brands fa-twitter" style={{color: "#ffffff"}}></i></a>
            <a href="#"><i className="fa-brands fa-dribbble" style={{color: "#ffffff"}}></i></a>
            <a href="#"><i className="fa-brands fa-behance" style={{color: "#ffffff"}}></i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
