import LogImg from '../assets/contact/log.png'
import Button from "../components/Button";
import GoogleMap from "../components/GoogleMapContainer";
import links from "../constant/links.json"
import text from '../constant/text.json'

const ContactScreen = () => {
    return(
        <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full flex justify-center items-center h-64 bg-map-pattern">
                <h1 className="font-headers text-6xl md:text-8xl text-mainOrange">Kontakt</h1>
            </div>
            <div className="w-full md:w-4/5 h-4/5 flex flex-col md:flex-row justify-center items-center gap-16 mb-20">
                <div className="relative z-0 md:w-1/2">
                    <img  src={LogImg}/>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <h2 className="text-2xl md:text-3xl text-white font-extrabold">Dominik i synowie</h2>
                        <p className="md:text-2xl text-white font-extrabold" >Sienkiewicza 49</p>
                        <p className="md:text-2xl text-white font-extrabold" >27-400, Ostrowiec Św</p>
                        <ul className="mt-4 flex flex-col gap-2 md:gap-4">
                            <Button name={text.Buttons.ContactBtn1} link={links.addressLink} />
                            <Button name={text.Buttons.ContactBtn2} link={`tel:${links.phoneNumber1}`}/>
                            <Button name={text.Buttons.ContactBtn3} link={`tel:${links.phoneNumber2}`}/>
                        </ul>
                    </div>
                </div>
                <div className="w-5/6 h-[400px] md:w-5/12 md:h-[450px]">
                    <GoogleMap />
                </div>
            </div>
        </div>
    )
}

export default ContactScreen