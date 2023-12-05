import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css';
import { Navigation, A11y, Autoplay, Pagination } from "swiper/modules"

const Testimonial = () => {
  return (
    <section className="testimonials-area section-gap">
        <div className="container w-[90%] mx-auto">
        <Swiper
            classNameName="w-[100%] h-fit testi-slider"
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
                        As conscious traveling Paup ers we must always be oncerned
                        about our dear Mother Earth. If you think about it, you
                        travel across her face and She is the host to your
                        journey.
                        </p>
                    </div>
                    <h4>Fanny Spencer</h4>
                    <p>Chief Executive, Amazon</p>
                    </div>
                </div>
                </div>

                <div className="offset-lg-1 col-lg-6">
                    <Image height={1} width={900} src="/img/testimonial/t1.jpg" alt="" />
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
                        As conscious traveling Paup ers we must always be oncerned
                        about our dear Mother Earth. If you think about it, you
                        travel across her face <br />
                        and She is the host to your journey.
                        </p>
                    </div>
                    <h4>Fanny Spencer</h4>
                    <p>Chief Executive, Amazon</p>
                    </div>
                </div>
                </div>

                <div className="offset-lg-1 col-lg-6">
                <Image height={1} width={900} src="/img/testimonial/t1.jpg" alt="" />
                </div>
            </div>
            </SwiperSlide>
        </Swiper>
        </div>
    </section>
  )
}

export default Testimonial
