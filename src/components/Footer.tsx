import Button from "./Button";
import text from '../constant/text.json'
import links from '../constant/links.json'

const Footer: React.FC = () => (
  <div className="w-full flex flex-col items-center justify-between bg-wood-pattern">
    <div className="w-4/6 flex flex-col justify-between items-center md:items-start gap-6 my-6">
    <h1 className="font-headers text-2xl">Kontakt</h1>
    <div className="flex-col md:flex-row flex gap-20 text-lg">
        <div>
            <h2 className="font-headers text-lightBrown text-2xl">Adres</h2>
            <p>Sienkiewicza 49</p>
            <p>27-400, Ostrowiec Św</p>
        </div>
        <div>
            <h2 className="font-headers text-lightBrown text-2xl">Godziny otwarcia</h2>
            <p>Pn-Pt od 10:00 do 17:30</p>
        </div>
        <div>
            <h2 className="font-headers text-lightBrown text-2xl">Kontakt</h2>
            <p>tel: 501 126 555</p>
            <p>tel: 728 327 003</p>
            <p>email: grzedom1234@gmail.com</p>
        </div>
    </div>
    <Button name={text.Buttons.FooterBtn} link={links.addressLink}/>
    </div>
    <h5>Copyright © 2023 - Dominik i synowie. All rights reserved.</h5>
  </div>
);

export default Footer;
