import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css';
import { Poppins, Space_Grotesk } from 'next/font/google'
import { Navigation, A11y, Autoplay, Pagination } from "swiper/modules"

const sGrotesk = Space_Grotesk({ 
    subsets: ['latin'],
    weight: ["300", "400", "500", "600", "700"]
})

const AboutUs = () => {
  return (
    <section className={`${sGrotesk.className} text-[16px] video-area section-gap-bottom`}>
          <svg className="top-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,256L24,240C48,224,96,192,144,154.7C192,117,240,75,288,69.3C336,64,384,96,432,96C480,96,528,64,576,48C624,32,672,32,720,58.7C768,85,816,139,864,186.7C912,235,960,277,1008,266.7C1056,256,1104,192,1152,170.7C1200,149,1248,171,1296,160C1344,149,1392,107,1416,85.3L1440,64L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
          <svg className="top-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2A30E9" fill-opacity="1" d="M0,256L24,240C48,224,96,192,144,154.7C192,117,240,75,288,69.3C336,64,384,96,432,96C480,96,528,64,576,48C624,32,672,32,720,58.7C768,85,816,139,864,186.7C912,235,960,277,1008,266.7C1056,256,1104,192,1152,170.7C1200,149,1248,171,1296,160C1344,149,1392,107,1416,85.3L1440,64L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
          <div className="container w-[90%] mx-auto py-[100px]">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="section-title text-white">
                  <h2 className="text-white">
                    About Us
                  </h2>
                  <p>
                    Welcome to Partnering To Succeed, where technology meets education, innovation, and expert support. Our journey began with a passion for making technology accessible to all, fostering a community of lifelong learners and empowering businesses with cutting-edge solutions. <br /><br />
                    At Partnering to succeed, we're not just about courses; we're on a mission to transform tech education into an exhilarating journey. Picture this as your digital launchpad, propelling you into the exciting realms of technology, innovation, and limitless possibilities.
                  </p>
                </div>
              </div>
              <div className="offset-lg-1 col-md-6 video-left">
                <Swiper
                  className="w-[100%] h-fit video-carousel"
                  modules={[A11y, Autoplay, Pagination]}
                  pagination={{
                    dynamicBullets: true,
                  }}
                  grabCursor={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}

                  spaceBetween={1}
                  slidesPerView={1}
                >
                  <SwiperSlide>
                    <div className="single-video">
                      <div className="video-part">
                        <Image className="img-fluid" height={1} width={700} src="/img/p2s-mission.png" alt="" />
                        <div className="overlay"></div>
                      </div>
                      <h4 className="text-white mb-20 mt-30">Our Mission</h4>
                      <p className="text-white mb-20">
                        At Partnering To Succeed, we are on a mission to demystify technology, making it approachable for learners of all ages. Whether you&apos;re a curious individual seeking to expand your knowledge or a business looking to navigate the digital landscape, we&apos;ve crafted a platform that caters to your unique needs.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-video">
                      <div className="video-part">
                        <Image height={1} width={700} className="img-fluid" src="/img/p2s-vision.png" alt="" />
                        <div className="overlay"></div>
                      </div>
                      <h4 className="text-white mb-20 mt-30">Our Commitment:</h4>
                      <p className="text-white mb-20">
                        We are committed to providing not just courses and services but a holistic learning and support ecosystem. Our approach is rooted in the belief that technology should be an enabler, making your personal and professional journey smoother and more successful.
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <svg className="bottom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2A30E9" fill-opacity="1" d="M0,256L24,240C48,224,96,192,144,154.7C192,117,240,75,288,69.3C336,64,384,96,432,96C480,96,528,64,576,48C624,32,672,32,720,58.7C768,85,816,139,864,186.7C912,235,960,277,1008,266.7C1056,256,1104,192,1152,170.7C1200,149,1248,171,1296,160C1344,149,1392,107,1416,85.3L1440,64L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
          <svg className="bottom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,256L24,240C48,224,96,192,144,154.7C192,117,240,75,288,69.3C336,64,384,96,432,96C480,96,528,64,576,48C624,32,672,32,720,58.7C768,85,816,139,864,186.7C912,235,960,277,1008,266.7C1056,256,1104,192,1152,170.7C1200,149,1248,171,1296,160C1344,149,1392,107,1416,85.3L1440,64L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
        </section>
  )
}

export default AboutUs
