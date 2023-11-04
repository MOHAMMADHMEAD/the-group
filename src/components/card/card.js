import "./card.scss"
function Card({ children,height,width,padding}) {
    const style={
        width:width||'100%',
        height:height||`calc(100vh - 150px)`,
    }

    const cardBodyStyle={
        cardBody:padding||'card-body'
    }


    return (
        <div className="card" style={style}>
            <div className={cardBodyStyle.cardBody}>
                {children}
            </div>
        </div>
    )
}

export default Card;