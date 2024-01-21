import text from '../constant/text.json'
import OfficeGraphic from "../assets/office/office_graphic.png"
import PhotoGallery from "../components/PhotoGallery";
import Office1 from "../assets/office/office1.jpeg"
import Office2 from "../assets/office/office2.jpeg"
import Office3 from "../assets/office/office3.jpeg"
import Office4 from "../assets/office/office4.jpeg"
import Office5 from "../assets/office/office5.jpeg"
import Office6 from "../assets/office/office6.jpeg"
import Office7 from "../assets/office/office7.jpeg"
import Office8 from "../assets/office/office8.jpeg"
import Office9 from "../assets/office/office9.jpeg"
import Office10 from "../assets/office/office10.jpeg"
import Office11 from "../assets/office/office11.jpeg"
import Office12 from "../assets/office/office12.jpeg"

const photos = [
    Office1, Office2, Office3, Office4, Office5, Office6, Office7, Office8, Office9, Office10, Office11, Office12
]


const ServicesScreenOffice = () => {
    return(
        <div className="flex flex-col items-center">   
            <div className="relative w-full flex items-center justify-center h-[440px]" >
            <div className="absolute w-full top-0  h-96 bg-lightBrown" ></div>
            <div className="w-full md:w-5/6 xl:w-4/6  justify-center md:justify-between relative h-full flex  items-center">
                            <div className="mb-64 md:mb-0">
                                 <h1 className="text-5xl lg:text-6xl xl:text-7xl  font-headers">Meble</h1>
                                 <h1 className="text-5xl lg:text-6xl xl:text-7xl  text-mainOrange font-headers">biurowe</h1>
                             </div>
                             <div className="absolute bottom-0 right-0">
                                 <img className="max-h-[230px] mr-[40px] md:mr-0 md:max-h-[640px]" src={OfficeGraphic} />
                             </div>
                     </div>
                 </div>
     
                 <div className="mt-24 md:mt-36 w-5/6 md:w-4/6 h-full flex flex-col gap-4 whitespace-pre-wrap text-justify">
                    <p className="font-extrabold">Meble biurowe, tu też możemy śmiało powiedzieć, <span className="text-mainOrange">nasza specjalność. </span></p>
                    <p>{text.ServicesOffice.p1}</p>
                    <p>{text.ServicesOffice.p2}</p>
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
export default ServicesScreenOffice