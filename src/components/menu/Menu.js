import "./menu.scss";
import icon from "../../static/images/menuIcon.svg";
import zakazIcon from "../../static/images/zakaz.svg"
import likeIcon from "../../static/images/likeIcon.svg";

export default function Menu({setOpenMenu}){
    return (
        <div className="menu">
            <div className="menu_wrapper">
                <div className="menu__header">
                    <div className="menu__header-title">
                        Меню
                    </div>
                    <div className="menu__header-closeBtn" >
                        <div onClick={() => setOpenMenu(false)}>
                            <div className="line1"></div>
                            <div className="line2"></div>
                        </div>
                    </div>
                </div>

                <div className="menu__links">
                    <MenuItem img={icon} title={"Суши"}/>
                    <MenuItem img={icon} title={"Суши"}/>
                    <MenuItem img={icon} title={"Суши"}/>
                    <MenuItem img={icon} title={"Суши"}/>
                    <MenuItem img={icon} title={"Суши"}/>
                    <MenuItem img={icon} title={"Суши"}/>
                </div>

                <div className="menu__btns">
                    <div className="menu__btns-item big">
                        <div className="menu__btns-img">
                            <img src={zakazIcon} alt="" />
                        </div>
                        <div className="menu__btns-text">
                            Повторить прошлый заказ
                        </div>
                    </div>
                    <div className="menu__btns-item">
                        <div className="menu__btns-img">
                            <img src={likeIcon} alt="" />
                        </div>
                        <div className="menu__btns-text">
                            Избранное
                        </div>
                    </div>
                    <div className="menu__btns-item">
                        <div className="menu__btns-img">
                            <img src={likeIcon} alt="" />
                        </div>
                        <div className="menu__btns-text">
                            Избранное
                        </div>
                    </div>
                    <div className="menu__btns-item">
                        <div className="menu__btns-text">
                            Избранное
                        </div>
                    </div>
                    <div className="menu__btns-item">
                        <div className="menu__btns-text">
                            Избранное
                        </div>
                    </div>
                    <div className="menu__btns-item">
                        <div className="menu__btns-text">
                            Избранное
                        </div>
                    </div>
                    <div className="menu__btns-item">
                        <div className="menu__btns-text">
                            Избранное
                        </div>
                    </div>
                </div>


                <div className="menu__tel">
                    <div className="menu__tel-title">
                        Оформить заказ:
                    </div>
                    <div className="menu__tel-item">
                        +38 (067) 436 61 27
                    </div>
                    <div className="menu__tel-item">
                        +38 (067) 436 61 27
                    </div>
                    <div className="menu__tel-item">
                        +38 (067) 436 61 27
                    </div>
                    <div className="menu__tel-time">
                        Звоните нам с 9:00 до 21:00 <br /> без выходных
                    </div>
                </div>
            </div>
        </div>
    )
} 

function MenuItem({img, title}){
    return(
        <div className="menu__links-item">
          <div className="menu__links-img">
            <img src={img} alt="" />
          </div>
        <div className="menu__links-title">
            {title}
        </div>              
        </div>
    )
}