import React from "react";
import text from '../constant/text.json'
import UpholsteryGraphic from "../assets/upholstery/upholstery_graphic.png"
import PhotoGallery from "../components/PhotoGallery";
import Upholstery2 from "../assets/upholstery/upholstery2.jpeg"
import Upholstery3 from "../assets/upholstery/upholstery3.jpeg"
import Upholstery5 from "../assets/upholstery/upholstery5.jpeg"
import Upholstery6 from "../assets/upholstery/upholstery6.jpeg"
import Upholstery7 from "../assets/upholstery/upholstery7.jpeg"
import Upholstery8 from "../assets/upholstery/upholstery8.jpeg"
import Upholstery9 from "../assets/upholstery/upholstery9.jpeg"
import Upholstery10 from "../assets/upholstery/upholstery10.jpeg"
import Upholstery11 from "../assets/upholstery/upholstery11.jpeg"
import Upholstery12 from "../assets/upholstery/upholstery12.jpeg"

const photos = [
    Upholstery2, Upholstery3, Upholstery5, Upholstery6, Upholstery7, Upholstery8, Upholstery9, Upholstery10, Upholstery11, Upholstery12
]



const ServicesScreenUpholstery = () => {
    return(
        <div className="flex flex-col items-center">   
            <div className="relative w-full flex items-center justify-center h-[440px]" >
            <div className="absolute w-full top-0  h-96 bg-lightBrown" ></div>
                     <div className="w-5/6 md:w-4/6 relative h-full flex justify-between items-center">
                     <div className="mb-64 md:mb-0">
                                 <h1 className="text-4xl md:text-7xl font-headers">Komody i szafy z</h1>
                                 <h1 className="text-4xl md:text-7xl text-mainOrange font-headers">siedziskami</h1>
                                 <h1 className="text-4xl md:text-7xl font-headers">tapicerowanymi</h1>

                             </div>
                             <div className="absolute bottom-0 right-0">
                                 <img className="max-h-[250px] mr-[35px] md:mr-0 md:max-h-[640px]" src={UpholsteryGraphic} />
                             </div>
                     </div>
                 </div>
     
                 <div className="m-36 w-4/6 h-full flex flex-col gap-4 whitespace-pre-wrap text-justify text-lg">
                    <p>{text.ServicesUpholstery.p1}</p>
                    <p>{text.ServicesUpholstery.p2}</p>
                    <p>{text.ServicesUpholstery.p3}</p>

                </div>
                <div className="m-18 w-full h-full flex flex-col justify-center items-center">
                    <div className="w-4/6 mb-10">
                        <h2 className="font-headers text-3xl">Nasze <span className="font-headers text-mainOrange">realizacje</span></h2>
                    </div>                
                    <PhotoGallery photos={photos} />
                </div>
        </div>
         )
    }
export default ServicesScreenUpholstery