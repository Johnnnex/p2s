import Link from 'next/link'
import { Poppins, Space_Grotesk } from 'next/font/google'

const sGrotesk = Space_Grotesk({ 
    subsets: ['latin'],
    weight: ["300", "400", "500", "600", "700"]
})

const Hero = ({title, children, breadCrumb, bLink}) => {
  return (
    <section className={`banner-area ${sGrotesk.className} text-[16px]`}>
        <div className="container w-[80%] mx-auto">
            <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 banner-right">
                <h1 className="text-white">
                    {title}
                </h1>
                <p className="mx-auto text-white  mt-20 mb-40">
                    {children}
                </p>
                <div className="link-nav">
                <span className="border-y text-white py-[10px] space-x-4">
                    <Link className="text-white hover:text-[#ffffff50]" href="/">Home </Link>
                    <i className="lnr lnr-arrow-right"></i>
                    <Link className="text-white" href={`/homepage/${bLink}`}>{breadCrumb}</Link>
                </span>
                </div>
            </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2A30E9" fill-opacity="1" d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,186.7C672,224,768,256,864,266.7C960,277,1056,267,1152,240C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,186.7C672,224,768,256,864,266.7C960,277,1056,267,1152,240C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </section>
  )
}

export default Hero
