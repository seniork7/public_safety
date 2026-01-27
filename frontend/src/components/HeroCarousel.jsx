// HeroCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Scrollbar, A11y, EffectFade, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"

export function HeroCarousel({ className = "" }) {
    const cloudName = "dqgjrw057"

    const slides = [
        {
            image: "firefighter-service-at-work_hfljqj.jpg",
            alt: "Two volunteer firefighters walking towards a scene."
        },
        {
            image: "hands-together_hankti.jpg",
            alt: "A grop of five volunteers put their hands together in a circle."
        },
        {
            image: "cpr_jxhde0.jpg",
            alt: "A volunteer training to administer CPR."
        },
        {
            image: "volunteer_lwenqd.jpg",
            alt: "A group of five volunteers getting ready to hand out donations."
        },
        {
            image: "police_edtqez.jpg",
            alt: "Two police volunteers patroling their community."
        }
    ]

    return (
        <div className={`${className} h-full`}>
            <Swiper
                modules={[Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                speed={2000}
                fadeEffect={{ crossFade: true }}
                scrollbar={{ draggable: true }}
                effect="fade"
                className="h-full"
            >
                {slides.map((img, index) => (
                    <SwiperSlide key={index} className="h-full">
                        <img
                            src={`https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto,w_1200,dpr_auto/v1769492247/${img.image}`}
                            srcSet={`
                                https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto,w_480,dpr_auto/v1769492247/${img.image} 480w,
                                https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto,w_768,dpr_auto/v1769492247/${img.image} 768w,
                                https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto,w_1200,dpr_auto/v1769492247/${img.image} 1200w
                            `}
                            sizes="(max-width: 768px) 100vw, 1200px"
                            alt={`Slide ${index + 1} - ${img.alt}`}
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}