import "./topOffers.scss";
import sushiIcon from "../../static/images/sushi.png";
import rollyIcon from "../../static/images/rollyIcon.png";
import setyIcon from "../../static/images/setyImg.png";
import bigroll from "../../static/images/Bigroll.png"

export default function TopOffers(){
    const topOffers = [{img: bigroll, name: "Гункан лосось", weight: 40, descr: "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",price: 120},
    {img: rollyIcon, name: "Филадельфия с лососем", weight: 320, descr: "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",price: 190},
    {img: setyIcon, name: "Суши лосось в нори", weight: 1600, descr: "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",price: 190}]

    return (
       <section className="slideOffers">
            <Offer img={bigroll} name={"Гункан лосось"}weight={40}  descr={"Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло"} price={120}/>
       </section>
    )
}

function Offer({name, descr, price, img}){
    return(
        <div className="slideOffers__item">
            <div className="slideOffers__item-text">
                <div className="slideOffers__item-title">
                    {name}
                </div>
                <div className="slideOffers__item-descr">
                    {descr}
                </div>
                <div className="slideOffers__item-price">
                    <div>
                        <button>В корзину</button>
                    </div>
                    <div>{price}<span> ТНГ</span></div>
                </div>
            </div>
            <div className="slideOffers__item-img">
                <img src={img} alt="" />
            </div>
        </div>
    )
}