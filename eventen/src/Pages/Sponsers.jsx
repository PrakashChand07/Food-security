import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import { Link } from 'react-router-dom'
import Pagehelmet from '../Components/Pagehelmet'

function Sponsers() {
  return (
    <div>
        <Pagehelmet pageTitle="Our Sponsers" />
        <Breadcrumb title="Our Sponsers" />

        {/*--Partners Section start--*/}
        <section className="partners">
            <div className="container">
            <div className="partner-inner">
                <div className="partner-title text-center pb-6 w-lg-60 m-auto">
                    <h2 className="mb-1"><span className="pink">Gold</span> Sponsers</h2>
                    <p className="m-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.</p>
                </div>
                <div className="partner-img pb-6">
                    <div className="row row-cols-1 row-cols-lg-4 row-cols-md-4">
                        <div className="col p-0 border-end border-sm-0">
                            <div className="p-2 partner-img-box text-center">
                                <img src="assets/images/icon/1.png" alt="partner-img" className="opacity-75"/>
                            </div>
                        </div>
                        <div className="col p-0 border-end border-sm-0">
                            <div className="p-2 partner-img-box text-center ">
                                <img src="assets/images/icon/2.png" alt="partner-img" className="opacity-75"/>
                            </div>
                        </div>
                        <div className="col p-0 border-end border-sm-0">
                            <div className="p-2 partner-img-box text-center">
                                <img src="assets/images/icon/3.png" alt="partner-img" className="opacity-75"/>
                            </div>
                        </div>
                        <div className="col p-0 border-sm-0">
                            <div className="p-2 partner-img-box text-center">
                                <img src="assets/images/icon/4.png" alt="partner-img" className="opacity-75"/>
                            </div>
                        </div>
                        <div className="col p-0 border-end border-top border-sm-0">
                            <div className="p-2 partner-img-box text-center">
                                <img src="assets/images/icon/5.png" alt="partner-img" className="opacity-75"/>
                            </div>
                        </div>
                        <div className="col p-0 border-end border-top border-sm-0">
                            <div className="p-2 partner-img-box text-center">
                                <img src="assets/images/icon/3.png" alt="partner-img" className="opacity-75"/>
                            </div>
                        </div>
                        <div className="col p-0 border-end border-top border-sm-0">
                            <div className="p-2 partner-img-box text-center">
                                <img src="assets/images/icon/4.png" alt="partner-img" className="opacity-75"/>
                            </div>
                        </div>
                        <div className="col p-0 border-end border-top border-sm-0">
                            <div className="p-2 partner-img-box text-center ">
                                <img src="assets/images/icon/5.png" alt="partner-img" className="opacity-75"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
        {/*--Partners Section end--*/}

        {/*--Partners Section start--*/}
        <section className="partners prenium-sponsers bg-lightgrey">
            <div className="container">
            <div className="partner-inner">
                <div className="partner-title text-center pb-6 w-lg-60 m-auto">
                    <h2 className="mb-1"><span className="pink">Platinum</span> Sponsers</h2>
                    <p className="m-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.</p>
                </div>
                <div className="partner-img pb-6">
                    <div className="row row-cols-1 row-cols-lg-5 row-cols-md-5">
                        <div className="col p-0 border-end border-sm-0">
                            <div className="p-2 partner-img-box text-center">
                                <img src="assets/images/icon/1.png" alt="partner-img" className="opacity-75"/>
                            </div>
                        </div>
                        <div className="col p-0 border-end border-sm-0">
                            <div className="p-2 partner-img-box text-center ">
                                <img src="assets/images/icon/2.png" alt="partner-img" className="opacity-75"/>
                            </div>
                        </div>
                        <div className="col p-0 border-end border-sm-0">
                            <div className="p-2 partner-img-box text-center">
                                <img src="assets/images/icon/3.png" alt="partner-img" className="opacity-75"/>
                            </div>
                        </div>
                        <div className="col p-0 border-end border-sm-0">
                            <div className="p-2 partner-img-box text-center">
                                <img src="assets/images/icon/4.png" alt="partner-img" className="opacity-75"/>
                            </div>
                        </div>
                        <div className="col p-0 border-sm-0">
                            <div className="p-2 partner-img-box text-center">
                                <img src="assets/images/icon/5.png" alt="partner-img" className="opacity-75"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
        {/*--Partners Section end--*/}

        {/*--Next Sponser Section start--*/}
        <section className="next-sponser position-relative">
        <div className="overlay">
        </div>
        <div className="container">
            <div className="next-sponser-inner w-lg-60 w-md-75 mx-auto text-center position-relative text-white">
            <div className="next-sponser-title">
                <h5 className="text-white mb-1">LET'S DO IT HURRY</h5>
                <h1 className="text-white mb-2">Intrested in becoming our  
                    <span className='pink'>Next Sponsers</span>
                </h1>
            </div>
            <div className="next-sponser-info">    
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div className="next-sponser-button">
                <Link to="/Booknow" className="btn btn1">Become a Sponser</Link>
                </div>  
            </div>
            </div>  
        </div>
        </section>
        {/*--Next Sponser Section end--*/}
    </div>
  )
}

export default Sponsers