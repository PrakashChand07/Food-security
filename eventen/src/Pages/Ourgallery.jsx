import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Gallery from '../Components/Gallery'
import { Link } from 'react-router-dom'
import Pagehelmet from '../Components/Pagehelmet'

function Ourgallery() {
  return (
    <div>
        <Pagehelmet pageTitle="Gallery" />

        <Breadcrumb title="Our Gallery" />

        {/*--Gallery Section end--*/}
        <section className="gallery py-10">
            <div className="container">
                <div className="gallery-inner">
                    <Gallery />
                </div>
            </div>
        </section>
        {/*--Gallery Section end--*/}

        {/*--Ticketbook Section start--*/}
        <section className="ticket1 position-relative bg-lightgrey">
            <div className="container">
                <div className="ticket-inner  text-center position-relative">
                    <div className="ticket-title w-lg-55 mx-auto">
                        <p className="mb-1 pink ">LET'S DO IT HURRY</p>
                        <h1 className="mb-2">HAVEN'T BOOKED YOUR SEAT YET?
                            <span className='pink'>Get Ticket</span>
                        </h1>
                    </div>
                    <div className="ticket-info w-lg-55 mx-auto">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
                            pulvinar dapibus leo.</p>
                            <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <div className="ticket-button">
                                <Link to="/Booknow"  className="btn">GET TICKETS NOW</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*--Ticketbook Section end--*/}
    </div>
  )
}

export default Ourgallery