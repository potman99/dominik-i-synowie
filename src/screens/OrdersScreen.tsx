import FAQ_Item from "../components/FAQ_Item";
import text from "../constant/text.json"

const OrdersScreen = () => {
    return(
        <div className=" flex justify-center">
            <div className="w-full md:w-4/6 flex flex-col items-center md:items-start">
                <h1 className="font-headers text-xl md:text-2xl mx-2">Najczęściej zadawane pytania</h1>
                <ul className="my-4">
                <FAQ_Item question={text.FAQ.q1} answer={text.FAQ.a1} />
                <FAQ_Item question={text.FAQ.q2} answer={text.FAQ.a2} />
                <FAQ_Item question={text.FAQ.q3} answer={text.FAQ.a3} />
                <FAQ_Item question={text.FAQ.q4} answer={text.FAQ.a4} />
                <FAQ_Item question={text.FAQ.q5} answer={text.FAQ.a5} />
                <FAQ_Item question={text.FAQ.q6} answer={text.FAQ.a6} />
                </ul>
            </div>
        </div>
    )
}

export default OrdersScreen