import Vector1 from '../assets/start/weird2.svg'
import Vector2 from '../assets/start/weird3.svg'
import Furniture from '../assets/start/furniture.png'
import text from '../constant/text.json'
import BusinessCard from '../assets/start/IMG_3285.jpeg'

const StartScreen = () => {
    return(
        <>
        <div className=" w-full flex flex-col items-center">
            
            <div className="relative w-full h-screen flex flex-col-reverse md:flex-row justify-center md:justify-between items-center ">
                <img className="absolute z-20 w-full md:w-8/12 right-0 top-0" src={Vector2} />

                <img className="absolute z-10 w-full md:w-5/12 right-0 top-0" src={Vector1} />

                <div className="flex flex-col z-20 mb-52 md:mb-64 md:ml-32 gap-4">
                    <h1 className="text-5xl md:text-8xl font-headers">Tradycja</h1>
                    <h1 className="text-5xl md:text-8xl  font-headers text-mainOrange">Zobowiązuje</h1>
                </div>
                <div className="z-20 h-96 md:h-screen md:mb-64 md:mr-32">
                    <img className="w-full h-full" src={Furniture} />
                </div>
            </div>

            <div className="w-5/6 md:w-4/6 h-full flex flex-col gap-2 whitespace-pre-wrap md:text-justify">
                <h2 className="font-headers text-3xl">Meble na <span className="font-headers text-mainOrange">wymiar</span></h2>
                    <p>W naszych realizacjach, kierujemy się przede wszystkim dobrym kontaktem z klientem, fachowością, kreatywnością, sumiennością, terminowością oraz <span className="font-bold">BARDZO DOBRĄ JAKOŚCIĄ NASZYCH MEBLI.</span></p>
                    <p>{text.Start.p3}</p>
                    <p>{text.Start.p4}</p>
                    <p>{text.Start.p5}</p>
                    <h2 className="font-headers text-3xl">ZAPRASZAMY DO KORZYSTANIA Z NASZYCH USŁUG - <span className="font-headers text-mainOrange">RODZINNA FIRMA DOMINIK I SYNOWIE </span></h2>
            </div>

            <div className="my-28 flex justify-center items-center relative group bg-lightBrown w-11/12 md:w-1/3 shadow-[0px_4px_4px_#00000040] p-4">
            <img className="w-full h-full" src={BusinessCard}/>
            </div>
        
        </div>
        </>
    )
}

export default StartScreen