import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css';
import { Navigation, A11y, Autoplay, Pagination } from "swiper/modules"

const Testimonial = () => {
  return (
    <section className="testimonials-area section-gap">
        <div className="container w-[90%] mx-auto">
        <Swiper
            className="w-[100%] h-fit testi-slider"
            modules={[A11y, Autoplay, Pagination]}
            pagination={{
            dynamicBullets: true,
            }}
            grabCursor={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}

            spaceBetween={50}
            slidesPerView={1}
        >
            <SwiperSlide>
            <div className="row align-items-center">
                <div className="col-lg-5">
                <div className="item">
                    <div className="testi-item">
                    <Image height={1} width={30} src="/img/quote.png" alt="" />
                    <div className="mt-40 text">
                        <p>
                        Partnering to Succeed has been a revelation for me! The expansive array of courses, coupled with lifetime access, made diving into the tech world an absolute joy. The exclusive student membership added an extra layer of excitement with its fantastic perks. The expert mentors at Partnering to Succeed were like beacons in the coding wilderness, guiding me every step of the way. And the real-time support? It's not just a feature; it's a superhero hotline for tech emergencies! Thanks to Partnering to Succeed, I'm not just learning; I'm thriving in the digital realm!
                        </p>
                    </div>
                    <h4>Mr Daniel</h4>
                    <p>Student at Partnering to succeed</p>
                    </div>
                </div>
                </div>

                <div className="offset-lg-1 col-lg-6">
                    <Image height={1} width={900} src="/img/south-africa-man.jpg" alt="" />
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="row align-items-center">
                <div className="col-lg-5">
                <div className="item">
                    <div className="testi-item">
                    <Image height={1} width={30} src="/img/quote.png" alt="" />
                    <div className="mt-40 text">
                        <p>
                        Enrolling in Partnering to Succeed was a turning point in my tech journey. The wealth of courses, including the lifetime access feature, allowed me to explore and learn at my own pace. The student membership made the experience even more enriching, providing exclusive benefits that truly set Partnering to Succeed apart. The expert mentors played a pivotal role in demystifying complex concepts, turning challenges into triumphs. The real-time support is the secret sauce that makes learning here a delight. Partnering to Succeed is more than a platform; it's a dynamic community propelling me towards tech excellence!
                        </p>
                    </div>
                    <h4>Mr Samuel</h4>
                    <p>Former Student, Partnering to succeed</p>
                    </div>
                </div>
                </div>

                <div className="offset-lg-1 col-lg-6">
                <Image height={1} width={900} src="/img/Man_Black_OnComputer.jpg" alt="" />
                </div>
            </div>
            </SwiperSlide>
        </Swiper>
        </div>
    </section>
  )
}

export default Testimonial
