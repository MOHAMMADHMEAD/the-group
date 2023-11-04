import "./header.scss"
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
function Header() {
    const { i18n } = useTranslation();
    const { t } = useTranslation();

    const [currentLanguage,setLangague]=useState('ar')

    const headerData={
        qrTitle:t('HEADER.QR_TITLE'),
        loginTitle:t('HEADER.LOGIN_TITLE'),
        homeTitle:t('HEADER.HOME_TITLE'),
        changePassword:t('HEADER.CHANGE_PASSWORD'),
        logout:t('HEADER.LOGOUT')
    }

    useEffect(() => {
        document.getElementsByTagName('html')[0].setAttribute('dir',currentLanguage==='en'?'rtl':'ltr')
        i18n.changeLanguage(currentLanguage==='en'?'ar':'en');

    }, [currentLanguage])


    function changeLangague(){
       setLangague(currentLanguage==='en'?'ar':'en')
    }

    return (
        <nav className="navbar navbar-expand-xl text-white navbar-dark bg-p">
            <div className="container-fluid justify-content-between d-flex">
               <div className="d-flex flex-row align-items-center gap-4">
                   <div className="position-relative"><i className="fa fa-qrcode"></i> <span>{headerData.qrTitle}</span></div>
                   <div className="d-flex flex-row gap-2 d-none d-md-flex ">
                       <input className="form-control"/>
                       <input className="form-control"/>
                       <button className="btn btn-success login-btn px-5 d-flex align-items-center gap-2">{headerData.loginTitle}<i className="fa fa-sign-in"></i></button>
                   </div>
               </div>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-white"></span>
                </button>
                <div className=" collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                <div className="d-flex align-items-center text-white flex-row gap-2">
                                    <i className="fa fa-home"></i>
                                    {headerData.homeTitle}
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">
                            <div className="d-flex align-items-center text-white flex-row gap-2">
                                <i className="fa fa-lock"></i>
                                {headerData.changePassword}
                            </div>
                            </a>
                        </li>
                     <li className="nav-item">
                         <a className="nav-link" aria-current="page" href="#">
                         <div className="d-flex align-items-center text-white flex-row gap-2">
                                <i className="fa fa-sign-out"></i>
                                {headerData.logout}
                            </div>
                         </a>
                        </li>
                        <li onClick={()=>changeLangague()} className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">
                                <div className="d-flex align-items-center text-white flex-row gap-2">
                                    <i className="fa fa-language"></i>
                                    {currentLanguage}
                                </div>
                            </a>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;