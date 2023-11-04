import "./dashboardCard.scss"
import Card from "../card/card";
import {useTranslation} from "react-i18next";
function DashboardCard() {
    const { t } = useTranslation();

    const dashboardInfo=[
        { label: t('DASHBOARD.DISPLAY_SHARES'), value: "60,046", valueClass: "" },
        { label: t('DASHBOARD.BID_PRICE'), value: "40.859", valueClass: "view-price" },
        { label: t('DASHBOARD.CURRENT_PRICE'), value: "40.846", valueClass: "current-price" },
        { label: t('DASHBOARD.ASK_PRICE'), value: "7,860", valueClass: "market-price" },
        { label: t('DASHBOARD.BID_SHARES'), value: "7.29", valueClass: "" },
        { label: t('DASHBOARD.CHANGE'), value: "0.39", valueClass: "text-success" },
        { label: t('DASHBOARD.TOTAL_SHARES'), value: "1,984,282", valueClass: "" },
        { label: t('DASHBOARD.REAL'), value: "3,567,567", valueClass: "navy" }
    ]


    return (
        <Card width={'100%'} height={'auto'} padding={'10px'}>
            <div className="row dashboard text-center ">
                <div className="col  half-border">
                    <div className="d-flex mx-3 gap-3 align-items-center flex-row">
                        <div className="d-flex text-nowrap gap-2 text-start flex-column">
                            <div className="company-title mb-0">{t('DASHBOARD.COMPANY')}</div>
                            <div>صندوق الريان</div>
                        </div>
                        <img src="https://oak.is/uploads/animated-svg-ff.svg" height="100" width="100"/>
                    </div>

                </div>

                {
                    dashboardInfo.map((item,index)=>{
                        return    <div key={index} className={`col number-card p-3 ${index!==dashboardInfo.length-1?'half-border':'mx-1'}`}>
                            <div className="card-title mb-1">{item.label}</div>
                            <div className={`value px-2 ${item.valueClass}`}>{item.value}</div>
                        </div>
                    })
                }

            </div>

        </Card>
    )
}

export default DashboardCard;
