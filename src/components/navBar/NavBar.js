import "./navbar.scss";
import icon1 from "../../static/images/rollyicon.svg";
import icon2 from "../../static/images/setyicon.svg";
import icon3 from "../../static/images/drinksicon.svg";
import icon4 from "../../static/images/boylyicon.svg";
import icon5 from "../../static/images/sushiicon.svg";
import icon6 from "../../static/images/soysyicon.svg";





export default function NavBar(){
    const icons = [ {icon: icon5, text: "Суши"},{icon: icon1, text: "Роллы"}, {icon: icon2, text: "Сеты"}, {icon: icon3, text: "Напитки"}, {icon: icon4, text: "Бойлы"},{icon: icon6, text: "Соусы"}]
    return (
        <section className="navBar">
            <div className="wrapper">
                {icons.map(item => <NavElem img={item.icon} text={item.text}/>)}
            </div>
        </section>
    )
}

function NavElem({img, text}){
    return (
        <div className="navBar__elem">
            <div className="navBar__elem-img">
                <img src={img} alt="" />
            </div>
            <div className="navBar__elem-text">
                {text}
            </div>
        </div>
    )
}

