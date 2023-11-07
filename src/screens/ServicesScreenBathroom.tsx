import React from "react";
import text from '../constant/text.json'
import BathroomGraphic from "../assets/bathroom/bathroom_graphic.png"
import PhotoGallery from "../components/PhotoGallery";

import Bathroom1 from "../assets/bathroom/imgs/bathroom1.jpeg"
import Bathroom2 from "../assets/bathroom/imgs/bathroom2.jpeg"
import Bathroom3 from "../assets/bathroom/imgs/bathroom3.jpeg"
import Bathroom4 from "../assets/bathroom/imgs/bathroom4.jpeg"
import Bathroom5 from "../assets/bathroom/imgs/bathroom5.jpeg"
import Bathroom6 from "../assets/bathroom/imgs/bathroom10.jpeg"
import Bathroom7 from "../assets/bathroom/imgs/bathroom11.jpeg"
import Bathroom8 from "../assets/bathroom/imgs/bathroom12.jpeg"
import Bathroom9 from "../assets/bathroom/imgs/bathroom13.jpeg"
import Bathroom10 from "../assets/bathroom/imgs/bathroom14.jpeg"
import Bathroom11 from "../assets/bathroom/imgs/bathroom15.jpeg"
import Bathroom12 from "../assets/bathroom/imgs/bathroom16.jpeg"
import Bathroom13 from "../assets/bathroom/imgs/bathroom17.jpeg"
import Bathroom14 from "../assets/bathroom/imgs/bathroom18.jpeg"
import Bathroom15 from "../assets/bathroom/imgs/bathroom19.jpeg"
import Bathroom16 from "../assets/bathroom/imgs/bathroom20.jpeg"
import Bathroom17 from "../assets/bathroom/imgs/bathroom21.jpeg"
import Bathroom18 from "../assets/bathroom/imgs/bathroom22.jpeg"
import Bathroom19 from "../assets/bathroom/imgs/bathroom23.jpeg"
import Bathroom20 from "../assets/bathroom/imgs/bathroom24.jpeg"
import Bathroom21 from "../assets/bathroom/imgs/bathroom25.jpeg"
import Bathroom22 from "../assets/bathroom/imgs/bathroom26.jpeg"
import Bathroom23 from "../assets/bathroom/imgs/bathroom27.jpeg"
import Bathroom24 from "../assets/bathroom/imgs/bathroom28.jpeg"
import Bathroom25 from "../assets/bathroom/imgs/bathroom29.jpeg"
import Bathroom26 from "../assets/bathroom/imgs/bathroom30.jpeg"
import Bathroom27 from "../assets/bathroom/imgs/bathroom31.jpeg"
import Bathroom28 from "../assets/bathroom/imgs/bathroom32.jpeg"
import Bathroom29 from "../assets/bathroom/imgs/bathroom33.jpeg"
import Bathroom30 from "../assets/bathroom/imgs/bathroom34.jpeg"
import Bathroom31 from "../assets/bathroom/imgs/bathroom35.jpeg"
import Bathroom32 from "../assets/bathroom/imgs/bathroom36.jpeg"
import Bathroom33 from "../assets/bathroom/imgs/bathroom37.jpeg"
import Bathroom34 from "../assets/bathroom/imgs/bathroom38.jpeg"
import Bathroom35 from "../assets/bathroom/imgs/bathroom39.jpeg"
import Bathroom36 from "../assets/bathroom/imgs/bathroom41.jpeg"
import Bathroom37 from "../assets/bathroom/imgs/bathroom42.jpeg"
import Bathroom38 from "../assets/bathroom/imgs/bathroom43.jpeg"
import Bathroom39 from "../assets/bathroom/imgs/bathroom6.jpeg"
import Bathroom40 from "../assets/bathroom/imgs/bathroom7.jpeg"
import Bathroom41 from "../assets/bathroom/imgs/bathroom8.jpeg"

const photos = [
    Bathroom1,Bathroom2, Bathroom3,Bathroom4, Bathroom5, Bathroom6, Bathroom7, Bathroom8, Bathroom9, Bathroom10, Bathroom11, Bathroom12,
    Bathroom13, Bathroom14, Bathroom15, Bathroom16, Bathroom17, Bathroom18, Bathroom19, Bathroom20, Bathroom21, Bathroom22,
    Bathroom23, Bathroom24, Bathroom25, Bathroom26, Bathroom27, Bathroom28, Bathroom29, Bathroom30, Bathroom31, Bathroom32, Bathroom33,
    Bathroom34, Bathroom35, Bathroom36, Bathroom37, Bathroom38, Bathroom39, Bathroom40, Bathroom41

]

const ServicesScreenBathroom = () => {
    return(
    <div className="flex flex-col items-center">   
        <div className="relative w-full flex items-center justify-center h-[440px]" >
                 <div className="absolute w-full top-0  h-96 bg-bathroomBlue" ></div>
                 <div className=" w-4/6 relative h-full flex justify-between items-center">
                         <div className="mb-64 md:mb-0">
                             <h1 className="text-5xl md:text-7xl font-headers">Zabudowy</h1>
                             <h1 className="text-5xl md:text-7xl text-mainOrange font-headers">łazienkowe,</h1>
                             <h1 className="text-5xl md:text-7xl font-headers">pralnie</h1>
                         </div>
                         <div className="absolute -bottom-10 md:bottom-0 right-0">
                             <img className="max-h-[300px] mr-[25px] md:mr-0 md:max-h-[440px]" src={BathroomGraphic} />
                         </div>
                 </div>
             </div>
 
             <div className="mt-24 md:mt-36 w-5/6 md:w-4/6 h-full flex flex-col gap-4 whitespace-pre-wrap text-justify text-lg">
                <p>{text.ServicesBathroom.p1}</p>
                <p>{text.ServicesBathroom.p2}</p>
                <p>{text.ServicesBathroom.p3}</p>
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

export default ServicesScreenBathroom