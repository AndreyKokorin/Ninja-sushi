import { useState } from "react";
import "./header.scss";
import logo from "../../static/images/logo.svg";
import telIcon from "../../static/images/numIcon.svg";
import colocol from "../../static/images/bell 2.svg";
import like from "../../static/images/like.svg";
import human from "../../static/images/person.svg";
import busket from "../../static/images/buslet.svg"
import Menu from "../menu/Menu";

export default function Header(){
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className="wrapper">
            <header className="header">
                <div className="wrapper">
                    <div className="header__logo">
                        <img src={logo} alt="" />
                    </div>
                    <nav className="header__links">
                        <ul className="header__links_list">
                            <li>Главная</li>
                            <li>Доставка</li>
                            <li>О нас</li>
                            <li>Новости</li>
                            <li className="number">
                                <div className="header__number_img">
                                    <img src={telIcon} alt="" />
                                </div>
                                <div className="header__number_num">
                                    +38 097 699 34 38
                                </div>
                            </li>
                        </ul>
                    </nav>

                    <div className="header__btns">
                        <div className="header__btns_item">
                            <img src={colocol} alt="" /> 
                        </div>
                        <div className="header__btns_item">
                            <img src={like} alt="" /> 
                        </div>
                        <div className="header__btns_item">
                            <img src={human} alt="" /> 
                        </div>
                        <div className="header__btns_item busket">
                            <div className="header__btns_text">Корзина</div>
                            <img src={busket} alt="" /> 
                        </div>
                        <div className="header__btns_item burger" onClick={() => setOpenMenu(prev => !prev)}>
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </div>
                    </div>
                </div>
            </header>

            
            {(openMenu) ? <Menu openMenu={openMenu} setOpenMenu={setOpenMenu}/> : null}
        </div>
    )
}