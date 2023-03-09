import "./footer.scss";
import logo from "../../static/images/logo.svg";
import appStoreLogo from "../../static/images/AppStore.svg";
import playMarketLogo from "../../static/images/PlayMarket.svg";
import facebookLogo from "../../static/images/facebook.svg";
import inssLogo from "../../static/images/inst.svg";
import telegramLogo from "../../static/images/telegram.png" 

export default function Footer(){
    return (
        <footer className="footer">
            <div className="wrapper">
                <div className="footer__items">
                    <ul className="footer__items-links">
                        <li>
                            <img src={logo} alt="" />
                        </li>
                        <li className="footer__items-storelinks">
                            <img src={appStoreLogo} alt="" className="first"/>
                            <img src={playMarketLogo} alt="" />
                        </li>
                        <li className="footer__items-litlegrey pd">
                            © Ninja Sushi. All rights reserved.
                        </li>
                        <li className="footer__items-politics">
                            Политика конфиденциальности
                        </li>
                    </ul>
                    <ul className="footer__items-standart">
                        <li className="footer__items-litlegrey">Навигация:</li>
                        <li className="">Главная</li>
                        <li>Меню</li>
                        <li>Доставка</li>
                        <li>Вакансии</li>
                        <li>Новости</li>
                    </ul>
                    <ul className="footer__items-standart">
                        <li  className="footer__items-litlegrey">Оформить заказ:</li>
                        <li>+38 (067) 436 61 27</li>
                        <li>+38 (067) 436 61 27</li>
                        <li>+38 (067) 436 61 27</li>
                    </ul>

                    <ul className="footer__items-standart">
                        <li className="footer__items-litlegrey">Время работы:</li>
                        <li>с 11:00 до 22:45</li>
                        <li>с 22.45 до 06.00</li>
                        <li>Ночная доставка</li>
                    </ul>

                    <ul className="footer__items-social">
                        <li className="footer__items-litlegrey">
                            Мы в соц. сетях:
                        </li>
                        <li className="footer__items-socialIcon">
                            <img src={facebookLogo} alt="" className="first"/>
                            <img src={inssLogo} alt="" />
                        </li>
                        <li className="footer__items-btn">
                            <button>
                                <div >
                                    <img src={telegramLogo} alt="" />
                                </div>
                                <div>
                                    Техподдержка
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}