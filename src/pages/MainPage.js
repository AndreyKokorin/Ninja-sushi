import Header from "../components/header/Header";
import NavBar from "../components/navBar/NavBar";
import Promo from "../components/promo/Promo";
import ShowCase from "../components/showCase/ShowCase";
import sushiIcon from "../static/images/sushi.png";
import rollyIcon from "../static/images/rollyIcon.png";
import setyIcon from "../static/images/setyImg.png";
import TopOffers from "../components/topOffers/TopOffers";
import zakuskaImg from "../static/images/zakuska.png";
import drink from "../static/images/drink.png";
import Footer from "../components/footer/Footer";

export default function MainPage (){
    const sushi = {name: "Суши", data: [
        {img: sushiIcon, name: "Гункан лосось", weight: 40, descr: "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",price: 120},
        {img: sushiIcon, name: "Гункан лосось", weight: 40, descr: "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",price: 120},
        {img: sushiIcon, name: "Гункан лосось", weight: 40, descr: "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",price: 120},
        {img: sushiIcon, name: "Гункан лосось", weight: 40, descr: "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",price: 120},
        {img: sushiIcon, name: "Гункан лосось", weight: 40, descr: "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",price: 120},
        {img: sushiIcon, name: "Гункан лосось", weight: 40, descr: "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",price: 120}
    ]}

    const rolly = {name: "Роллы", data: [
        {img: rollyIcon, name: "Филадельфия с лососем", weight: 320, descr: "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",price: 190},
        {img: rollyIcon, name: "Филадельфия с лососем", weight: 320, descr: "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",price: 190},
        {img: rollyIcon, name: "Филадельфия с лососем", weight: 320, descr: "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",price: 190},
        {img: rollyIcon, name: "Филадельфия с лососем", weight: 320, descr: "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",price: 190},
        {img: rollyIcon, name: "Филадельфия с лососем", weight: 320, descr: "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",price: 190},
        {img: rollyIcon, name: "Филадельфия с лососем", weight: 320, descr: "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",price: 190},
    ]}
    
    const sety = {name: "Сеты", data: [
        {img: setyIcon, name: "Суши лосось в нори", weight: 1600, descr: "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",price: 190},
        {img: setyIcon, name: "Суши лосось в нори", weight: 1600, descr: "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",price: 190},
        {img: setyIcon, name: "Суши лосось в нори", weight: 1600, descr: "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",price: 190},
        {img: setyIcon, name: "Суши лосось в нори", weight: 1600, descr: "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",price: 190},
        {img: setyIcon, name: "Суши лосось в нори", weight: 1600, descr: "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",price: 190},
        {img: setyIcon, name: "Суши лосось в нори", weight: 1600, descr: "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",price: 190},

    ]};


    const zakuski = {name: "Закуски", data: [
        {img: zakuskaImg, name: "Тартар из лосося с халапеньо", descr: "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло", price: 190, weight: 180},
        {img: zakuskaImg, name: "Тартар из лосося с халапеньо", descr: "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло", price: 190, weight: 180},
        {img: zakuskaImg, name: "Тартар из лосося с халапеньо", descr: "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло", price: 190, weight: 180},
        {img: zakuskaImg, name: "Тартар из лосося с халапеньо", descr: "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло", price: 190, weight: 180},
        {img: zakuskaImg, name: "Тартар из лосося с халапеньо", descr: "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло", price: 190, weight: 180},
        {img: zakuskaImg, name: "Тартар из лосося с халапеньо", descr: "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло", price: 190, weight: 180},
        

    ]}

    const drinks = {name: "Напитки", data:[
        {img: drink, name: "Coca-Cola 0.25(ст)", price: 190, weight: 0.25},
        {img: drink, name: "Coca-Cola 0.25(ст)", price: 190, weight: 0.25},
        {img: drink, name: "Coca-Cola 0.25(ст)", price: 190, weight: 0.25},
        {img: drink, name: "Coca-Cola 0.25(ст)", price: 190, weight: 0.25},
        {img: drink, name: "Coca-Cola 0.25(ст)", price: 190, weight: 0.25},
        {img: drink, name: "Coca-Cola 0.25(ст)", price: 190, weight: 0.25},
    ]}

    return (<div>
                <Header/>
                <NavBar/>
                <Promo/>
                <ShowCase data={sushi}/>
                <ShowCase data={rolly}/>
                <ShowCase data={sety}/>
                {/* <TopOffers/> */}
                <ShowCase data={zakuski}/>
                <ShowCase data={drinks}/>
                <Footer/>
            </div>)
}