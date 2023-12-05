import { Poppins, Space_Grotesk } from 'next/font/google'
import { useEffect } from 'react'
import Image from "next/image"
import HeadComp from '@/layout/HeadComponent'
import Testimonial from '@/reusable-components/testimonial'
import Hero from '@/reusable-components/hero'
import AboutUs from '@/reusable-components/about-us'
import { useData } from '@/context/DataContext'

const sGrotesk = Space_Grotesk({ 
    subsets: ['latin'],
    weight: ["300", "400", "500", "600", "700"]
})

const About = () => {
  const { setIsOnHomepage } = useData()
  useEffect (() => {
    setIsOnHomepage(true)
  })

  return (
    <>
        <HeadComp title="Partnering To Succeed - About" />
        <main classNameName={`${sGrotesk.className}`}>
          <Hero 
            title="About Us"
            breadCrumb="About"
            bLink="about"
          >
            Unveiling our Passion, Purpose, and the Pioneering Minds Shaping the Future
          </Hero>
          <section className={`${sGrotesk.className} text-[14px] feature-area`}>
            <div className="container-fluid">
              <div className="feature-inner row">
                <div className="col-lg-2 col-md-6">
                  <div className="feature-item d-flex">
                    <i className="ti-crown"></i>
                    <div className="ml-20">
                      <h4>IT Experts</h4>
                      <ul className="list-outside space-y-[1rem] list-disc md:text-[14px]">
                        <li>
                          Innovation Prowess
                        </li>
                        <li>
                          Proven Experience
                        </li>
                        <li>
                          Problem-Solving Skills
                        </li>
                        <li>
                          Client-Centric Approach
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6">
                  <div className="feature-item item-red d-flex">
                    <i className="ti-cup"></i>
                    <div className="ml-20">
                      <h4>Top Courses</h4>
                      <ul className="list-outside space-y-[1rem] list-disc md:text-[14px]">
                        <li>
                          Java programming
                        </li>
                        <li>
                          PHP, Web Development
                        </li>
                        <li>
                          Office 360
                        </li>
                        <li>
                          React, Angular
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="about-area section-gap">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-5 col-md-6 about-left">
                  <Image height={1} width={700} className="img-fluid" src="/img/about-img.png" alt="" />
                </div>
                <div className="offset-lg-1 col-lg-5 col-md-12 about-right">
                  <h1>
                    Our Team, <br />
                    The Crew, <br />
                    Our Squad
                  </h1>
                  <div className={`text-[16px] ${sGrotesk.className}`}>
                    <p>
                      We are competent, disciplined, excellent, passionate and committed information technology professionals with cognitive expertise from international and multinational companies. We provide classic solutions to comples problems.
                    </p>
                    <p>
                      We are second to none in Africa in delivering cost-effective solutions particularly in the payment industry and other adjacent companies. We lead a team of excellent and enthusiastic developers to provide cutting edge solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <AboutUs />
          <Testimonial />
        </main>
    </>
  )
}

export default About
