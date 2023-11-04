import logo from './logo.svg';
import './App.scss';
import Header from "./components/header/header";
import SideNav from "./components/sideNav/sideNav";
import RightSideNav from "./components/rightSideNav/rightSideNav";
import Card from "./components/card/card";
import Tabs from "./components/tabs/tabs";
import UserMarketInfo from "./components/userMarketInfo/userMarketInfo";
import DashboardCard from "./components/dashboardCard/dashboardCard";

function App() {
  return (
    <div className="App">
     <Header/>

        <div className="container-fluid mt-2">
            <div className="d-flex flex-column flex-md-row justify-content-between mb-4">
                <div className="mb-4 col-md-4 col-sm-12">
                    <Card width={'100%'} height={'auto'} padding="p-2">
                        <div className="row text-center text-gray">
                            <div className="col d-flex justify-content-start">
                                <div className="d-flex flex-row gap-4  align-items-center justify-content-center">
                                    <div className="d-flex align-items-center gap-2"><i className="fa fa-bell navy"></i> <span>المؤشر</span></div>
                                    <div className="text-blue">14,000</div>
                                </div>
                            </div>
                            <div className="col d-flex gap-3 align-items-center justify-content-center">
                                <span className="text-success">1%</span>
                                <i className="fa fa-arrow-circle-up text-success"></i>

                            </div>
                            <div className="col d-flex justify-content-start">
                                <div className="d-flex flex-row gap-4  align-items-center justify-content-center">
                                    <div className="text-blue"><span>ريال</span></div>
                                    <div className="text-[61719F]">14,000</div>
                                </div>
                            </div>
                            <div className="col d-flex align-items-center justify-content-center">
                                <div className="d-flex flex-row gap-3">
                                    <div> <span className="">حالة السوق</span></div>
                                    <div><i className="fa fa-circle text-success"></i></div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="align-self-center align-md-self-end justify-content-center justify-md-content-end d-flex px-5 mt-2">
                    <img src="https://thegroup.com.qa/images/thegroup.svg?v=3"/>
                </div>
            </div>
            <UserMarketInfo/>


        <div className='row'>
            <div className=" col-12 col-xs-12 col-md-2 mb-2">
                <SideNav/>
            </div>
            <div className="col-md-8 col-12  mb-2">
                <div className="d-flex flex-column gap-4">

                   <DashboardCard/>
                    <Tabs/>
                </div>

            </div>
            <div className="col-md-2 col-12">
            <RightSideNav/>
            </div>
        </div>
        </div>

    </div>
  );
}

export default App;
