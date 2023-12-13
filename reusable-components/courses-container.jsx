import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css';
import { A11y, Autoplay } from "swiper/modules"
import { Space_Grotesk } from 'next/font/google'
import { ToastImporter } from "@/utils/toast";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const sGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700"]
})
const CoursesContainer = () => {
  const [courseData, setCourseData] = useState(null)
  const apiUrl = "http://127.0.0.1:8000/api/popularcourses"
  const { push } = useRouter()
  const reDirect = (id) => {
    const { toastWarning } = ToastImporter("You need to Sign-Up first!")
    toastWarning()
    push(`/auth?course=${id}`)
  }
  const fetchCourses = async () => {
    try {
      const result = await fetch(apiUrl, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
      })
      const data = await result.json()
      if (result.ok) {
        setCourseData(data)
      }
  }
  catch (err) {
      const { toastDanger } = ToastImporter("Network connection error!")
      toastDanger()
  }
  }
  useEffect (() => {
    fetchCourses()
  }, [])
  return (
    <section className={`popular-course-area section-gap ${sGrotesk.className}`}>
      <div className="container-fluid w-[90%] mx-auto">
        <div className="row justify-content-center section-title">
          <div className="col-lg-12">
            <h2>
              Popular Courses <br />
              Available Right Now
            </h2>
            <p className="text-[16px]">
              Discover the Trending and Highly Sought-After Courses Currently Open for Enrollment
            </p>
          </div>
        </div>
        <section className="courses-slider">
          <Swiper
            modules={[ A11y, Autoplay]}
            grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}

            spaceBetween={50}
            slidesPerView={3}
          >
            {
              courseData != null ? courseData.data.map(({courseimage, coursename, courseprice, id}) => {
                return (
                  <SwiperSlide key={id}>
                    <div className="single-popular-course">
                      <div className="thumb">
                        <Image className="f-img img-fluid mx-auto" height={1} width={200} src="/img/popular-course/p3.jpg" alt="" />
                      </div>
                      <div className="details">
                        <div className="d-flex justify-content-between mb-20">
                          <p className="name">Programming</p>
                          <p className="value">${courseprice}</p>
                        </div>
                        <a href="#">
                          <h4>{coursename}</h4>
                        </a>
                        <div className="bottom d-flex mt-15">
                          <button onClick={() => reDirect(id)} className="btn-def btn-red">More Info</button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
              : ""
            }
            {/* <SwiperSlide>
              <div className="single-popular-course">
                <div className="thumb">
                  <Image className="f-img img-fluid mx-auto" height={1} width={200} src="/img/popular-course/p3.jpg" alt="" />
                </div>
                <div className="details">
                  <div className="d-flex justify-content-between mb-20">
                    <p className="name">programming language</p>
                    <p className="value">$150</p>
                  </div>
                  <a href="#">
                    <h4>Learn Angular JS Course for Legendary Persons</h4>
                  </a>
                  <div className="bottom d-flex mt-15">
                    <button onClick={reDirect} className="btn-def btn-red">More Info</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-popular-course">
                <div className="thumb">
                  <Image height={1} width={200} className="f-img img-fluid mx-auto" src="/img/popular-course/p2.jpg" alt="" />
                </div>
                <div className="details">
                  <div className="d-flex justify-content-between mb-20">
                    <p className="name">programming language</p>
                    <p className="value">$150</p>
                  </div>
                  <a href="#">
                    <h4>Learn Angular JS Course for Legendary Persons</h4>
                  </a>
                  <div className="bottom d-flex mt-15">
                    <button onClick={reDirect} className="btn-def btn-red">More Info</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-popular-course">
                <div className="thumb">
                  <Image height={1} width={200} className="f-img img-fluid mx-auto" src="/img/popular-course/p1.jpg" alt="" />
                </div>
                <div className="details">
                  <div className="d-flex justify-content-between mb-20">
                    <p className="name">programming language</p>
                    <p className="value">$150</p>
                  </div>
                  <a href="#">
                    <h4>Learn Angular JS Course for Legendary Persons</h4>
                  </a>
                  <div className="bottom d-flex mt-15">
                    <button onClick={reDirect} className="btn-def btn-red">More Info</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-popular-course">
                <div className="thumb">
                  <Image height={1} width={200} className="f-img img-fluid mx-auto" src="/img/popular-course/p1.jpg" alt="" />
                </div>
                <div className="details">
                  <div className="d-flex justify-content-between mb-20">
                    <p className="name">programming language</p>
                    <p className="value">$150</p>
                  </div>
                  <a href="#">
                    <h4>Learn Angular JS Course for Legendary Persons</h4>
                  </a>
                  <div className="bottom d-flex mt-15">
                    <button onClick={reDirect} className="btn-def btn-red">More Info</button>
                  </div>
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </section>
        <section className="md:hidden">
            {
              courseData != null ? courseData.data.map(({courseimage, coursename, courseprice, id}) => {
                return (
                  <div key={id} className="single-popular-course">
                    <div className="thumb">
                      <Image height={1} width={200} className="f-img img-fluid mx-auto" src="/img/popular-course/p1.jpg" alt="" />
                    </div>
                    <div className="details">
                      <div className="d-flex justify-content-between mb-20">
                        <p className="name">Programming</p>
                        <p className="value">${courseprice}</p>
                      </div>
                      <a href="#">
                        <h4>{coursename}</h4>
                      </a>
                      <div className="bottom d-flex mt-15">
                        <button onClick={() => reDirect(id)} className="btn-def btn-red">More Info</button>
                      </div>
                    </div>
                  </div>
                )
              })
              : ""
            }
  
        </section>
      </div>
    </section>
  )
}

export default CoursesContainer
