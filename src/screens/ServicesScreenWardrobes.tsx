import text from '../constant/text.json'
import WardrobeGraphic from "../assets/wardrobes/wardrobe_graphic.png"
import PhotoGallery from "../components/PhotoGallery";

import Wardrobes2 from "../assets/wardrobes/imgs/wardrobes2.jpeg"
import Wardrobes3 from "../assets/wardrobes/imgs/wardrobes1.jpeg"
import Wardrobes5 from "../assets/wardrobes/imgs/wardrobes4.jpeg"
import Wardrobes6 from "../assets/wardrobes/imgs/wardrobes10.jpeg"
import Wardrobes7 from "../assets/wardrobes/imgs/wardrobes11.jpeg"
import Wardrobes8 from "../assets/wardrobes/imgs/wardrobes12.jpeg"
import Wardrobes9 from "../assets/wardrobes/imgs/wardrobes13.jpeg"
import Wardrobes10 from "../assets/wardrobes/imgs/wardrobes14.jpeg"
import Wardrobes11 from "../assets/wardrobes/imgs/wardrobes15.jpeg"
import Wardrobes12 from "../assets/wardrobes/imgs/wardrobes16.jpeg"
import Wardrobes13 from "../assets/wardrobes/imgs/wardrobes17.jpeg"
import Wardrobes14 from "../assets/wardrobes/imgs/wardrobes18.jpeg"
import Wardrobes15 from "../assets/wardrobes/imgs/wardrobes19.jpeg"
import Wardrobes16 from "../assets/wardrobes/imgs/wardrobes20.jpeg"
import Wardrobes17 from "../assets/wardrobes/imgs/wardrobes21.jpeg"
import Wardrobes18 from "../assets/wardrobes/imgs/wardrobes22.jpeg"
import Wardrobes19 from "../assets/wardrobes/imgs/wardrobes23.jpeg"
import Wardrobes20 from "../assets/wardrobes/imgs/wardrobes24.jpeg"
import Wardrobes21 from "../assets/wardrobes/imgs/wardrobes25.jpeg"
import Wardrobes22 from "../assets/wardrobes/imgs/wardrobes26.jpeg"
import Wardrobes23 from "../assets/wardrobes/imgs/wardrobes27.jpeg"
import Wardrobes24 from "../assets/wardrobes/imgs/wardrobes28.jpeg"
import Wardrobes25 from "../assets/wardrobes/imgs/wardrobes29.jpeg"
import Wardrobes26 from "../assets/wardrobes/imgs/wardrobes30.jpeg"
import Wardrobes27 from "../assets/wardrobes/imgs/wardrobes31.jpeg"
import Wardrobes28 from "../assets/wardrobes/imgs/wardrobes32.jpeg"
import Wardrobes29 from "../assets/wardrobes/imgs/wardrobes33.jpeg"
import Wardrobes30 from "../assets/wardrobes/imgs/wardrobes34.jpeg"
import Wardrobes31 from "../assets/wardrobes/imgs/wardrobes35.jpeg"
import Wardrobes32 from "../assets/wardrobes/imgs/wardrobes36.jpeg"
import Wardrobes33 from "../assets/wardrobes/imgs/wardrobes37.jpeg"

const photos = [
    Wardrobes2, Wardrobes3, Wardrobes5, Wardrobes6, Wardrobes7, Wardrobes8, Wardrobes9, Wardrobes10, Wardrobes11, Wardrobes12,
    Wardrobes13, Wardrobes14, Wardrobes15, Wardrobes16, Wardrobes17, Wardrobes18, Wardrobes19, Wardrobes20, Wardrobes21, Wardrobes22,
    Wardrobes23, Wardrobes24, Wardrobes25, Wardrobes26, Wardrobes27, Wardrobes28, Wardrobes29, Wardrobes30, Wardrobes31, Wardrobes32, Wardrobes33
]

const ServicesScreenWardrobes = () => {


    return(
        <div className="flex flex-col items-center">   
            <div className="relative w-full flex items-center justify-center h-[440px]" >
                     <div className="absolute w-full top-0 h-96 bg-lightBrown" ></div>
                     <div className="w-full md:w-5/6 xl:w-4/6 justify-center md:justify-between relative h-full flex  items-center">
                            <div className="mb-64 md:mb-0">
                                 <h1 className="text-4xl lg:text-6xl xl:text-7xl  font-headers">Szafy <span className="text-4xl lg:text-6xl xl:text-7xl   text-mainOrange font-headers">garderoby,</span></h1>
                                 <h1 className="text-4xl lg:text-6xl xl:text-7xl font-headers">regały, komody</h1>
                             </div>
                             <div className="absolute bottom-[-80px] right-0">
                                 <img className="max-h-[350px] mr-[80px] md:mr-0 md:max-h-[550px]" src={WardrobeGraphic} />
                             </div>
                     </div>
                 </div>
     
                 <div className="mt-24 md:mt-36 w-5/6 md:w-4/6 h-full flex flex-col gap-4 whitespace-pre-wrap text-justify text-lg">
                    <p>{text.ServicesWardrobes.p1}</p>
                    <p className="font-extrabold">Personalizujemy każde zamówienie tak aby dopasować je do <span className="font-extrabold text-mainOrange">Państwa potrzeb.</span></p>
                    <p>{text.ServicesWardrobes.p2}</p>
                </div>
                <div className="mt-32 m-18 w-full h-full flex flex-col justify-center items-center">
                    <div className="w-4/6 mb-10">
                        <h2 className="font-headers text-3xl">Nasze <span className="font-headers text-mainOrange">realizacje</span></h2>
                    </div>                
                    <PhotoGallery photos={photos} />
                </div>
        </div>
         )
    }

export default ServicesScreenWardrobes