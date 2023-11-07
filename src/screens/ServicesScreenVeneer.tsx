import text from '../constant/text.json'
import VeneerGraphic from "../assets/veneer/veneer_graphic.png"

import Veneer1 from "../assets/veneer/imgs/veneer1.jpeg"
import Veneer2 from "../assets/veneer/imgs/veneer2.jpeg"
import Veneer3 from "../assets/veneer/imgs/veneer3.jpeg"
import Veneer4 from "../assets/veneer/imgs/veneer4.jpeg"
import Veneer5 from "../assets/veneer/imgs/veneer5.jpeg"
import Veneer6 from "../assets/veneer/imgs/veneer6.jpeg"
import Veneer7 from "../assets/veneer/imgs/veneer7.jpeg"
import Veneer8 from "../assets/veneer/imgs/veneer8.jpeg"
import Veneer9 from "../assets/veneer/imgs/veneer9.jpeg"
import Veneer10 from "../assets/veneer/imgs/veneer10.jpeg"
import Veneer11 from "../assets/veneer/imgs/veneer11.jpeg"
import Veneer12 from "../assets/veneer/imgs/veneer12.jpeg"
import Veneer13 from "../assets/veneer/imgs/veneer13.jpeg"
import Veneer14 from "../assets/veneer/imgs/veneer14.jpeg"
import Veneer15 from "../assets/veneer/imgs/veneer15.jpeg"
import Veneer16 from "../assets/veneer/imgs/veneer16.jpeg"
import PhotoGallery from "../components/PhotoGallery";

const photos = [
    Veneer1,Veneer2, Veneer3,Veneer4, Veneer5, Veneer6, Veneer7, Veneer8, Veneer9, Veneer10, Veneer11, Veneer12,
    Veneer13, Veneer14, Veneer15, Veneer16]

const ServicesScreenVeneer = () => {
    return(
        <div className="flex flex-col items-center">   
            <div className="relative w-full flex items-center justify-center h-[440px]" >
                    <div className="absolute w-full top-0  h-96 bg-lightBrown" ></div>
                    <div className="w-full xl:w-4/6  justify-center xl:justify-between relative h-full flex  items-center">
                        <div className="mb-64 md:mb-0">
                                 <h1 className="text-5xl md:text-7xl font-headers">Kolekcja</h1>
                                 <h1 className="text-5xl md:text-7xl text-mainOrange font-headers">FORNIR</h1>
                        </div>
                        <div className="absolute  right-0 bottom-0">
                            <img className="max-h-[350px] mr-[20px] md:mr-0 md:max-h-[440px]" src={VeneerGraphic} />
                        </div>
                     </div>
                 </div>
     
                 <div className="mt-24 md:mt-36 w-5/6 md:w-4/6 h-full flex flex-col gap-4 whitespace-pre-wrap text-justify">
                    <p>Jak większość ludzi kochamy naturę, lubimy rzeczy stworzone przez przyrodę, które w swoim wzornictwie są niepowtarzalne - słoje, kolorystyka. Lubimy też rzeczy oryginalne, ponadczasowe, które kojarzą nam się z <span className="font-extrabold">solidnością, trwałością i</span> <span className="font-extrabold text-mainOrange">niezawodnością.</span></p>
                    <p>{text.ServicesVeneer.p1}</p>
                    <p>{text.ServicesVeneer.p2}</p>
                    <p>{text.ServicesVeneer.p3}</p>
                    <p>Meble te mają indywidualny, niepowtarzalny charakter i są jedynymi w swoim rodzaju - <span className="font-extrabold">NIEPOWTARZALNYMI.</span></p>
                    <p>{text.ServicesVeneer.p4}</p>

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

export default ServicesScreenVeneer