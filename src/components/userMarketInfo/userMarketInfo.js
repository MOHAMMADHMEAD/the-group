import "./userMarketInfo.scss"
import {useState} from "react";
import GugeChart from "../gaugeChart/gaugeChart";
import {useTranslation} from "react-i18next";
function UserMarketInfo() {
    const { t } = useTranslation();

    const lineInfo=[
        {
            id: 1,
            text: t('USER_MARKET_INFO.CASH'),
            value: "00.00"
        },
        {
            id: 2,
            text: t('USER_MARKET_INFO.PORTFOLIO'),
            value: "00.00"
        },
        {
            id: 3,
            text: t('USER_MARKET_INFO.ASSETS'),
            value: "00.00"
        },
        {
            id: 4,
            text: t('USER_MARKET_INFO.BUY_ORDERS_VALUE'),
            value: "00.00"
        },
        {
            id: 5,
            text: t('USER_MARKET_INFO.AVAILABLE_MARGIN'),
            value: "00.00"
        },
        {
            id: 6,
            text: t('USER_MARKET_INFO.LIABILITY'),
            value: "00.00"
        },
        {
            id: 7,
            text: t('USER_MARKET_INFO.LIABILITY'),
            value: "00.00",
            type:'chart'
        },
        {
            id: 8,
            text: t('USER_MARKET_INFO.BUYING_POWER'),
            value: "300.00"
        }
    ];

    return (
        <div className="row text-center mt-2 mt-md-0 text-gray info mb-2">
        <div className="col-md-8">
        <div className="d-flex flex-wrap flex-row gap-2 justify-content-center justify-content-md-start">
            {
                lineInfo.map((item,index)=>{
                    return      <div key={index}
                                     className={`mb-2 mb-md-0 d-flex justify-content-center justify-md-content-start ${item.type === 'chart'?'chart-size':''}`}
                                >
                        <div className="d-flex flex-row gap-2  align-items-center chart-card justify-content-center">

                            {
                                item.type === 'chart' ? (
                                    <div className="text-center chart" style={{width:'200px',height:'100px'}}>
                                        <GugeChart/>
                                    </div>
                                ) : (
                                    <div className="d-flex align-items-center flex-column flex-md-row  gap-2">
                                        <div className="text text-nowrap"><span>{item.text}</span></div>
                                        <div className="navy fw-bold value">{item.value}</div>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                })
            }
        </div>
        </div>




        </div>
    )
}

export default UserMarketInfo;
