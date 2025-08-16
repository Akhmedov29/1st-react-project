import img from "../images/image copy 5.png";
import image from "../images/image copy.png";
import image2 from "../images/image copy 2.png";
import image3 from "../images/image copy 3.png";
import { Swiper,SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import swiper from "../images/space.jpg"
import swiper2 from "../images/stock.jpg"
import swiper3 from "../images/4k.jpg"
import swiper4 from "../images/nature2.jpg"


function About() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center text-gray-300 ">
      {/* Hero section */}
      <div className="w-full min-h-[660px] flex flex-col lg:flex-row justify-center items-center px-6 pt-12 gap-10">
        <div className="flex flex-col gap-6 max-w-xl">
          <h1 className="text-4xl text-gray-400">Salom!</h1>
          <h2 className="text-6xl font-bold text-gray-400">Ismim Baxodir</h2>
          <p className="text-lg font-light text-gray-400 leading-relaxed">
            Mening soham web-design qurish, front-end va back-end boshlaganimga yillar bo'ldi.
            web-site dizayni, site-tuzilishi yoki 
            tayyor site xohlaysizmi? Menga murojat qiling.
          </p>
          <button className="btn btn-info w-full max-w-[110px]"><a href="/contact">Telegram</a></button>
        </div>
        <div>
          <img
            src={img}
            alt="main profile"
            className="w-[320px] h-[400px] object-cover rounded-xl"
          />
        </div>
      </div>

      {/* About me section */}
      <div className="w-full min-h-[920px] flex flex-col md:flex-row justify-center items-center gap-10 px-6 py-10">
        <div className="flex flex-col justify-between items-center h-[700px] gap-6">
          <img
            src={swiper4}
            alt="img1"
            className="w-[272px] h-[320px] object-cover rounded-xl"
          />
          <img
            src={image3}
            alt="img3"
            className="w-[250px] h-[281px] object-cover rounded-xl"
          />
        </div>

        <div className="w-full max-w-[400px] h-auto bg-gray-600 rounded-[19px] px-6 py-6">
          <h1 className="text-3xl font-semibold text-center pb-4">About Me</h1>
          <p className="text-sm text-start leading-relaxed">
            Hello again everyone! So, you already know that my name is Baxodir. A
            little about myself: student, 16 y.o., athlete-calisthenics . I
            love training since childhood. I live in Fergana, Uzbekistan. Why
            programming? Because I like it. It’s a profession of the future,
            which can help me travel and fulfill my dreams. I specialize in web
            design, front-end and back-end development, turnkey websites.
            <br />
            <br />
            Why should you choose me? I approach each order with great
            responsibility and passion. I avoid plagiarism and study the
            project, the client, and their audience in detail. I work for
            quality and try to complete the order uniquely and quickly, taking
            into account all revisions and wishes.
            <br />
            <br />
            By trusting me, you'll get maximum value, save time and energy. If
            you're interested, feel free to contact me below.
          </p>
        </div>

        <div>
          <img
            src={image2}
            alt="img2"
            className="w-[287px] h-[427px] object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Portfolio section */}
      <div className="w-full min-h-[700px] flex justify-center items-center px-6 py-12">
        <div className="w-full max-w-[970px] bg-gray-600 rounded-[29px] flex flex-col lg:flex-row justify-around items-center p-6 gap-6">
          <div className="w-full text-center ">
            <Swiper modules={[Navigation, Autoplay]} spaceBetween={20} slidesPerView={1} navigation autoplay={{ delay: 3000 }} loop={true}>
      <SwiperSlide>
        <img src={swiper} alt="1" className="w-full h-[500px] rounded-[25px]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={swiper2} alt="2" className="w-full h-[500px] rounded-[25px]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={swiper3} alt="3" className="w-full h-[500px] rounded-[25px]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={swiper4} alt="3" className="w-full h-[500px] rounded-[25px]" />
      </SwiperSlide>
    </Swiper>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
