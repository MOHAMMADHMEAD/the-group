import "./tabs.scss"
import {useState} from "react";
import { useTranslation } from 'react-i18next';

function Tabs() {
    const { t } = useTranslation();


    const tabItems=[
        {
            "id": 1,
            "title": t('TABS.COMMANDS'),
            "logo": "fa fa-th-list"
        },
        {
            "id": 2,
            "title": t('TABS.WALLET'),
            "logo": "fa fa-cc"
        },
        {
            "id": 3,
            "title": t('TABS.CALCULATOR'),
            "logo": "fa fa-calculator"
        },
        {
            "id": 4,
            "title": t('TABS.ACCOUNT_STATEMENT'),
            "logo": "fa fa-file-o"
        },
        {
            "id": 5,
            "title": t('TABS.ELECTRONIC_TRANSFERS'),
            "logo": "fa fa-exchange"
        },
        {
            "id": 6,
            "title": t('TABS.PAYMENT_INFORMATION'),
            "logo": "fa fa-credit-card"
        },
        {
            "id": 7,
            "title": t('TABS.NOTIFICATIONS'),
            "logo": "fa fa-bell"
        },
        {
            "id": 8,
            "title": t('TABS.ELECTRONIC_SIGNATURE'),
            "logo": "fa fa-pencil"
        }
    ]

    const [selectTab,setSelectTab]=useState( tabItems[0]);

    return (
        <div>
        <ul className="nav nav-tabs flex-column flex-md-row" id="content" role="tablist">

            {
                tabItems.map((item,index)=>{
                      return  <li key={index} className="nav-item">
                        <a  onClick={() => setSelectTab(item)} className={`nav-link ${selectTab.id===item.id?'active':''}`}>
                         <i className={item.logo}></i>
                            <span>   {item.title}</span>

                        </a>
                    </li>
                })
            }
        </ul>
    <div className="tab-content" id="myTabContent">
        <div className={`tab-pane tab-content  fade ${selectTab.id===1?'show active':''}`} id="home" role="tabpanel" aria-labelledby="home-tab">
            <div className="d-flex mb-2 flex-row action-container justify-content-center gap-3 pt-2">
                <div><button className="btn action-btn buy-button"> <i className="fa fa-arrow-circle-left"></i> شراء</button></div>
                <div><button className="btn action-btn sell-button">بيع <i className="fa fa-arrow-circle-right"></i></button></div>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center" style={{height:'400px',background:"#EFEFEF"}}>
                <div className="login-info mb-2">
                    <i className="fa fa-user navy fa-3x"></i>
                </div>
                <div className="fw-bold">Please Login </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Tabs;
