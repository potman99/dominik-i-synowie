import CarpenterImg from '../assets/about_us/old-carpenter.png'
import CarpenterLable from '../assets/about_us/carpenter-label.png'
import text from '../constant/text.json'
import Vector from '../assets/about_us/weird.svg'
import DateParagraph from "../components/DateParagraph";
import AfterHours1 from "../assets/about_us/after-hours1.jpeg"
import AfterHours2 from "../assets/about_us/after-hours2.jpeg"
import AfterHours3 from "../assets/about_us/after-hours3.jpeg"
import AfterHours4 from "../assets/about_us/after-hours4.jpeg"

const AboutUsScreen = () => {
    return(
        <div className=" w-full flex flex-col items-center">

            <div className="relative w-full h-96 md:h-screen flex justify-center items-center">
                <img className="absolute md:w-3/5 right-0 top-0" src={Vector} />
                <img className="absolute md:mb-36 md:w-2/3" src={CarpenterImg} />
            </div>
            
            
            <div className="md:mt-20 w-5/6 md:w-4/6 h-full flex flex-col gap-8 whitespace-pre-wrap">
                <h2 className="font-headers text-3xl">Historia <span className="font-headers text-mainOrange">firmy</span></h2>
                <ul className="flex flex-col gap-4">
                    <DateParagraph date={text.AboutUs.history.d1} text={text.AboutUs.history.t1} />
                    <DateParagraph date={text.AboutUs.history.d2} text={text.AboutUs.history.t2} />
                    <DateParagraph date={text.AboutUs.history.d3} text={text.AboutUs.history.t3} />
                    <DateParagraph date={text.AboutUs.history.d4} text={text.AboutUs.history.t4} />
                    <DateParagraph date={text.AboutUs.history.d5} text={text.AboutUs.history.t5} dateColour="mainOrange" />

                </ul>
                <div className="w-full h-fit">
                    <img className="w-full h-full" src={CarpenterLable} />
                </div>
            </div>


            <div className="w-5/6 md:w-4/6 mt-10 md:mt-0 h-full flex flex-col gap-8 whitespace-pre-wrap text-justify">
                    <h2 className="font-headers text-3xl">Po godzinach</h2>
                    <h2 className="text-3xl">Nie tylko pracą człowiek <span className="font-headers text-mainOrange">żyje</span></h2>
                    <p>{text.AboutUs.after_hours.p1}</p>
                    <p>{text.AboutUs.after_hours.p2}</p>
            </div>

            <div className="w-5/6 md:w-4/6 h-full flex flex-col md:flex-row gap-4 my-10">
                <div className=" md:w-1/2 h-full flex flex-col gap-10 ">
                    <div className="flex justify-center items-center relative group bg-lightBrown w-full h-full shadow-[0px_4px_4px_#00000040] p-4">
                        <img className="w-full h-full" src={AfterHours4}/>
                    </div>
                    <div className="flex justify-center items-center relative group bg-lightBrown w-full h-full shadow-[0px_4px_4px_#00000040] p-4">
                        <img className="w-full h-full" src={AfterHours1}/>
                    </div>
                </div>
                <div className="md:w-1/2 h-full flex flex-col gap-10 ">
                    <div className="flex justify-center items-center relative group bg-lightBrown w-full h-full shadow-[0px_4px_4px_#00000040] p-4">
                        <img className="w-full h-full" src={AfterHours2}/>
                    </div>
                    <div className="flex justify-center items-center relative group bg-lightBrown w-full h-full shadow-[0px_4px_4px_#00000040] p-4">
                        <img className="w-full h-full" src={AfterHours3}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutUsScreen