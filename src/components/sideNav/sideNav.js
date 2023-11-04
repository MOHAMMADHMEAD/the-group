import Card from "../card/card";
import "./sideNav.scss"
function SideNav() {

    const data=[
        {
            label:'صندوق الريان',
            logo:'https://www.qatr.com.qa/favicon.ico',
            fav:true
        },
        {
            label:'صندوق الريان',
            logo:'https://www.qatr.com.qa/favicon.ico',
            fav:false
        },
        {
            label:'صندوق الريان',
            logo:'https://www.qatr.com.qa/favicon.ico',
            fav:false
        },
        {
            label:'صندوق الريان',
            logo:'https://www.qatr.com.qa/favicon.ico',
            fav:false
        },
        {
            label:'صندوق الريان',
            logo:'https://www.qatr.com.qa/favicon.ico',
            fav:false
        },
        {
            label:'صندوق الريان',
            logo:'https://www.qatr.com.qa/favicon.ico',
            fav:true
        },
        {
            label:'صندوق الريان',
            logo:'https://www.qatr.com.qa/favicon.ico',
            fav:false
        },
        {
            label:'صندوق الريان',
            logo:'https://www.qatr.com.qa/favicon.ico',
            fav:false
        },
        {
            label:'صندوق الريان',
            logo:'https://www.qatr.com.qa/favicon.ico',
            fav:false
        },
        {
            label:'صندوق الريان',
            logo:'https://www.qatr.com.qa/favicon.ico',
            fav:false
        },
        {
            label:'صندوق الريان',
            logo:'https://www.qatr.com.qa/favicon.ico',
            fav:false
        },{
            label:'صندوق الريان',
            logo:'https://www.qatr.com.qa/favicon.ico',
            fav:false
        },{
            label:'صندوق الريان',
            logo:'https://www.qatr.com.qa/favicon.ico',
            fav:false
        },{
            label:'صندوق الريان',
            logo:'https://www.qatr.com.qa/favicon.ico',
            fav:false
        },{
            label:'صندوق الريان',
            logo:'https://www.qatr.com.qa/favicon.ico',
            fav:false
        },
        {
            label:'صندوق الريان',
            logo:'https://www.qatr.com.qa/favicon.ico',
            fav:false
        },
        {
            label:'صندوق الريان',
            logo:'https://www.qatr.com.qa/favicon.ico',
            fav:false
        },
        {
            label:'صندوق الريان',
            logo:'https://www.qatr.com.qa/favicon.ico',
            fav:false
        },
        {
            label:'صندوق الريان',
            logo:'https://www.qatr.com.qa/favicon.ico',
            fav:false
        },
        {
            label:'صندوق الريان',
            logo:'https://www.qatr.com.qa/favicon.ico',
            fav:false
        },
        {
            label:'صندوق الريان',
            logo:'https://www.qatr.com.qa/favicon.ico',
            fav:false
        },{
            label:'صندوق الريان',
            logo:'https://www.qatr.com.qa/favicon.ico',
            fav:false
        }
    ]

    return (
       <Card>
        <div className="d-flex flex-column text-black">

            <div className="d-flex flex-row justify-content-between mb-2 align-items-center border-bottom pb-1">
                <div>Company</div>
                <div className="d-flex w-25">
                   <select className="d-flex w-100 form-control">
                       <option>1</option>
                       <option>2</option>
                   </select>
                </div>
            </div>

            <div className="list">
                {
                    data.map((item,index)=>{
                        return <div key={index} className="d-flex flex-row justify-content-between mb-2 border-bottom pb-1">
                            <div className="d-flex flex-row gap-3 align-items-center">
                                <div><img height="20" width="20" src={item.logo}/></div>
                                <div>{item.label}</div>
                            </div>
                            <div>
                                <i className={`fa fa-star star ${item.fav?'active-star':''}`}></i>
                            </div>
                        </div>
                    })
                }
            </div>


        </div>
       </Card>
    )
}

export default SideNav;