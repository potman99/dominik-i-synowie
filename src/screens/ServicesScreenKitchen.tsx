import KitchenGraphic from "../assets/kitchen/kitchen_graphic.png"
import text from '../constant/text.json'
import PhotoGallery from "../components/PhotoGallery";

import Kitchen1 from "../assets/kitchen/imgs/kitchen6.jpeg"
import Kitchen2 from "../assets/kitchen/imgs/kitchen7.jpeg"
import Kitchen3 from "../assets/kitchen/imgs/kitchen3.jpeg"
import Kitchen4 from "../assets/kitchen/imgs/kitchen8.jpeg"
import Kitchen5 from "../assets/kitchen/imgs/kitchen9.jpeg"
import Kitchen6 from "../assets/kitchen/imgs/kitchen10.jpeg"
import Kitchen7 from "../assets/kitchen/imgs/kitchen11.jpeg"
import Kitchen8 from "../assets/kitchen/imgs/kitchen12.jpeg"
import Kitchen9 from "../assets/kitchen/imgs/kitchen13.jpeg"
import Kitchen10 from "../assets/kitchen/imgs/kitchen14.jpeg"
import Kitchen11 from "../assets/kitchen/imgs/kitchen15.jpeg"
import Kitchen12 from "../assets/kitchen/imgs/kitchen16.jpeg"
import Kitchen13 from "../assets/kitchen/imgs/kitchen17.jpeg"
import Kitchen14 from "../assets/kitchen/imgs/kitchen18.jpeg"
import Kitchen15 from "../assets/kitchen/imgs/kitchen19.jpeg"
import Kitchen16 from "../assets/kitchen/imgs/kitchen20.jpeg"
import Kitchen17 from "../assets/kitchen/imgs/kitchen21.jpeg"
import Kitchen18 from "../assets/kitchen/imgs/kitchen22.jpeg"
import Kitchen19 from "../assets/kitchen/imgs/kitchen23.jpeg"
import Kitchen20 from "../assets/kitchen/imgs/kitchen24.jpeg"
import Kitchen21 from "../assets/kitchen/imgs/kitchen25.jpeg"
import Kitchen22 from "../assets/kitchen/imgs/kitchen26.jpeg"
import Kitchen23 from "../assets/kitchen/imgs/kitchen27.jpeg"
import Kitchen24 from "../assets/kitchen/imgs/kitchen28.jpeg"
import Kitchen25 from "../assets/kitchen/imgs/kitchen29.jpeg"
import Kitchen26 from "../assets/kitchen/imgs/kitchen30.jpeg"
import Kitchen27 from "../assets/kitchen/imgs/kitchen31.jpeg"
import Kitchen28 from "../assets/kitchen/imgs/kitchen32.jpeg"
import Kitchen29 from "../assets/kitchen/imgs/kitchen33.jpeg"
import Kitchen30 from "../assets/kitchen/imgs/kitchen34.jpeg"
import Kitchen31 from "../assets/kitchen/imgs/kitchen35.jpeg"
import Kitchen32 from "../assets/kitchen/imgs/kitchen36.jpeg"
import Kitchen33 from "../assets/kitchen/imgs/kitchen37.jpeg"


const photos = [
    Kitchen1,Kitchen2, Kitchen3,Kitchen4, Kitchen5, Kitchen6, Kitchen7, Kitchen8, Kitchen9, Kitchen10, Kitchen11, Kitchen12,
    Kitchen13, Kitchen14, Kitchen15, Kitchen16, Kitchen17, Kitchen18, Kitchen19, Kitchen20, Kitchen21, Kitchen22,
    Kitchen23, Kitchen24, Kitchen25, Kitchen26, Kitchen27, Kitchen28, Kitchen29, Kitchen30, Kitchen31, Kitchen32, Kitchen33,

]

const ServicesScreenKitchen = () => {
    return(
       <div className="flex flex-col items-center">   
            <div className="relative w-full flex items-center justify-center h-[440px]" >
                <div className="absolute w-full top-0  h-96 bg-lightBrown" ></div>
                <div className="w-full xl:w-4/6  justify-center xl:justify-between relative h-full flex  items-center">
                        <div className="mb-64 md:mb-0">
                            <h1 className="text-5xl md:text-7xl font-headers">Meble</h1>
                            <h1 className="text-5xl md:text-7xl text-mainOrange font-headers">Kuchenne</h1>
                        </div>
                        <div className="absolute bottom-0 right-0 ">
                            <img className="max-h-[270px] mr-[80px] md:mr-0 md:max-h-[440px]" src={KitchenGraphic} />
                        </div>
                </div>
            </div>

            <div className="mt-24 md:mt-36 w-5/6 md:w-4/6 h-full flex flex-col gap-4 whitespace-pre-wrap text-justify">
                <p>{text.ServicesKitchen.p1}</p>
                <h2 className="font-headers text-xl">Twoje <span className="font-headers text-mainOrange">marzenie</span> to dla nas wyzwanie</h2>
                <p>{text.ServicesKitchen.p1}</p>
                <p>{text.ServicesKitchen.p2}</p>
                <p>{text.ServicesKitchen.p3}</p>
                <h2 className="mt-8 font-headers text-xl">MOŻEMY ŚMIAŁO POWIEDZIEĆ, ŻE OGRANICZA NAS TYLKO <span className="font-headers text-mainOrange">WYOBRAŹNIA</span> KLIENTA.</h2>
            </div>
            <div className="mt-32 w-full h-full flex flex-col justify-center items-center">
                <div className="w-4/6 mb-10">
                    <h2 className="font-headers text-3xl">Nasze <span className="font-headers text-mainOrange">realizacje</span></h2>
                </div>                
                <PhotoGallery photos={photos} />
            </div>
       </div>
    )
}

export default ServicesScreenKitchen