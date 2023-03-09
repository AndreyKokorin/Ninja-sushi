import "./showcase.scss"

export default function ShowCase({data}){
    const descr = "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло";

    
    return (
        <section className="showcase">
            <div className="wrapper">
                <div className="showcase__header">
                    <div className="showcase__header-title">
                        {data.name}
                    </div>
                    <div className="showcase__header-showAll">
                        <button className="btn">Смотреть все</button>
                    </div>
                </div>
                <div className="showcase__list">
                    {data.data.map(item =>  <ShowCaseElement img={item.img} price={item.price} name={item.name} descr={item.descr} weight={item.weight}/>)}
                </div>
            </div>
        </section>
    )
}

function ShowCaseElement({img, name, descr, price, weight}){
    return (
        <div className="showcase__elem">
            <div className="showcase__elem-wrap">
                <div className="showcase__elem-img">
                    <img src={img} alt="" />
                </div>
                <div>
                    <div className="showcase__elem-title">
                        {name}
                    </div>
                    <div className="showcase__elem-weigth">
                        Вес:{weight}г
                    </div>

                    <div className="showcase__elem-descr">
                        {descr}
                    </div>
                    <div className="showcase__elem-footer">
                        <div className="showcase__elem-price">
                            {price}<span> тнг</span>
                        </div>
                    <div className="showcase__elem-plusbtn">
                        <button>+</button>
                    </div>
                </div>
            </div>
            </div>

        </div>
    )
}