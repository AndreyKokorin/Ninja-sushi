import "./promo.scss";
import banner from "../../static/images/mainBanner.png"

export default function Promo(){
    return (
        <div className="wrapper">
             <section className="promo">
            <div className="wrapper">
                <div className="promo__text">
                    <div className="promo__text-title">
                        Ninja Sushi <br />в Алматы! Пока <br /> только в <br /> КазНУ
                    </div>
                    <div className="promo__text-subtitle">
                        Доставку делаем с 10:00 до 19:30
                    </div>
                    <div className="promo__text-btn">
                        <button>Перейти к новостям</button>
                    </div>
                </div>
                <div className="promo__img"></div>
             
            </div>
        </section>
        </div>
    )
}

