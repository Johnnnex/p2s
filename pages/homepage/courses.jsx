import { useEffect } from 'react'
import HeadComp from '@/layout/HeadComponent'
import CoursesContainer from '@/reusable-components/courses-container'
import Features from '@/reusable-components/features'
import Hero from '@/reusable-components/hero'
import QuickRegistration from '@/reusable-components/quick-registration'
import { Poppins, Space_Grotesk } from 'next/font/google'
import MonthlyCourses from '@/reusable-components/monthly-courses'


const sGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700"]
})

const Courses = () => {
  return (
    <>
        <HeadComp title="Partnering To Succeed - Courses" />
        <Hero 
          title="Courses"
          breadCrumb="Courses"
          bLink="courses"
        >
          Empower Your Journey: Explore Our Diverse Range of Courses
        </Hero>
        <section className={`${sGrotesk.className} feature-area`}>
          <div className="container-fluid">
            <div className="feature-inner row">
              <div className="col-lg-4 col-md-6">
                <div className="item-red feature-item d-flex">
                  <i className="ti-medall"></i>
                  <div className="ml-20">
                    <h4>Expert Instructors</h4>
                    <ul className="list-outside space-y-[1rem] md:text-[14px] list-disc">
                      <li>
                        Certified experts in fied of study
                      </li>
                      <li>
                        We pride ourselves on instructors who stay ahead of industry trends
                      </li>
                      <li>
                        Academic Excellence 
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="feature-item d-flex">
                  <i className="ti-cup"></i>
                  <div className="ml-20">
                    <h4>Career Guidance</h4>
                    <ul className="list-outside space-y-[1rem] md:text-[14px] list-disc">
                      <li>
                        Personalized Counseling
                      </li>
                      <li>
                        Resume Building Workshops
                      </li>
                      <li>
                        Mock Interviews 
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4 col-md-6">
                <div className="feature-item d-flex border-right-0">
                  <i className="ti-desktop"></i>
                  <div className="ml-20">
                    <h4>Full E-Books</h4>
                    <p>
                      In the history of modern astronomy, there is probably no one greater leap forward.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        <MonthlyCourses />
        <CoursesContainer />
        <QuickRegistration />
        <Features />
    </>
  )
}

export default Courses
