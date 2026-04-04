import React from 'react'
import Breadcrumb from '../Components/Breadcrumb';
import { Link } from 'react-router-dom';
import Pagehelmet from '../Components/Pagehelmet'

function Bloglists() {
  return (
    <div>
        <Pagehelmet pageTitle="Blog Lists" />
        <Breadcrumb title="Blog Lists" />

        {/*--News Archive Section start*/}
        <section className="news-archive">
        <div className="container">
            <div className="news-archive-inner">
            <div className="row gy-5">
                <div className="col-lg-8">
                    <div className="news-left me-4 m-md-0">
                        <div className="row g-md-5 gy-5">
                        <div className="col-lg-6 col-md-6">
                            <div className="blog-box border border-1 rounded pb-2 text-center">
                                <div className="blog-img">
                                    <Link to="/Blogsingle">
                                        <img
                                            className="blog-img rounded-top w-100 h-auto"
                                            src="/assets/images/group/6.jpg"
                                            alt="blog-img"
                                        />
                                    </Link>
                                </div>
                                <div className="blog-info border-bottom p-4">
                                    <h5 className="mb-2"><Link to="/Blogsingle" className="black">THE TOP MUSIC FESTIVAL IN NEW YORK CITY</Link></h5>
                                    <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                   <Link to="/Blogsingle" className="text-uppercase pink"><small>Continue reading</small></Link>
                                </div>  
                                <div className="pt-2 blog-data">
                                    <span className="px-4  border-end "><small>April 3, 2023 </small></span><span className="px-4"><small>No Comments</small> </span> 
                                </div> 
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="blog-box border border-1 rounded pb-2 text-center ">
                                <div className="blog-img">
                                    <Link to="/Blogsingle">
                                        <img
                                            className="blog-img rounded-top w-100 h-auto"
                                            src="/assets/images/group/7.jpg"
                                            alt="blog-img"
                                        />
                                    </Link>
                                </div>
                                <div className="blog-info border-bottom p-4">
                                    <h5 className="mb-2"><Link to="/Blogsingle" className="black">Live interviews from conference</Link></h5>
                                    <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                    <Link to="/Blogsingle" className="text-uppercase pink"><small>Continue reading</small></Link>
                                </div>  
                                <div className="pt-2 blog-data">
                                    <span className="px-4  border-end "><small>April 3, 2023 </small></span><span className="px-4"><small>No Comments</small> </span> 
                                </div>   
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="blog-box border border-1 rounded pb-2 text-center ">
                                <div className="blog-img">
                                    <Link to="/Blogsingle">
                                        <img
                                            className="blog-img rounded-top w-100 h-auto"
                                            src="/assets/images/group/4.jpg"
                                            alt="blog-img"
                                        />
                                    </Link>
                                </div>
                                <div className="blog-info border-bottom p-4">
                                    <h5 className="mb-2"><Link to="/Blogsingle" className="black">Resistration for openging workforce</Link></h5>
                                    <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                   <Link to="/Blogsingle" className="text-uppercase pink"><small>Continue reading</small></Link>
                                </div>  
                                <div className="pt-2 blog-data">
                                    <span className="px-4  border-end "><small>April 3, 2023 </small></span><span className="px-4"><small>No Comments</small> </span> 
                                </div>  
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="blog-box border border-1 rounded pb-2 text-center ">
                            <div className="blog-img">
                                <Link to="/Blogsingle">
                                    <img
                                        className="blog-img rounded-top w-100 h-auto"
                                        src="/assets/images/group/1.jpg"
                                        alt="blog-img"
                                    />
                                </Link>
                            </div>
                            <div className="blog-info border-bottom p-4">
                                <h5 className="mb-2"><Link to="/Blogsingle" className="black">Connect with coperate party planners</Link></h5>
                                <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                               <Link to="/Blogsingle" className="text-uppercase pink"><small>Continue reading</small></Link>
                            </div>  
                            <div className="pt-2 blog-data">
                            <span className="px-4  border-end "><small>April 3, 2023 </small></span><span className="px-4"><small>No Comments</small> </span> 
                            </div>  
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="blog-box border border-1 rounded pb-2 text-center ">
                                <div className="blog-img">
                                    <Link to="/Blogsingle">
                                        <img
                                            className="blog-img rounded-top w-100 h-auto"
                                            src="/assets/images/group/6.jpg"
                                            alt="blog-img"
                                        />
                                    </Link>
                                </div>
                                <div className="blog-info border-bottom p-4">
                                    <h5 className="mb-2"><Link to="/Blogsingle" className="black">Engaging in person virtual, & hybrid events.</Link></h5>
                                    <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                    <Link to="/Blogsingle" className="text-uppercase pink"><small>Continue reading</small></Link>
                                </div>  
                                <div className="pt-2 blog-data">
                                    <span className="px-4  border-end "><small>April 3, 2023 </small></span><span className="px-4"><small>No Comments</small> </span> 
                                </div>   
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="blog-box border border-1 rounded pb-2 text-center">
                                <div className="blog-img">
                                    <Link to="/Blogsingle">
                                        <img
                                            className="blog-img rounded-top w-100 h-auto"
                                            src="/assets/images/group/7.jpg"
                                            alt="blog-img"
                                        />
                                    </Link>
                                </div>
                                <div className="blog-info border-bottom p-4">
                                    <h5 className="mb-2"><Link to="/Blogsingle" className="black">"Good steps to make a best business" planners</Link></h5>
                                    <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                <Link to="/Blogsingle" className="text-uppercase pink"><small>Continue reading</small></Link>
                                </div>  
                                <div className="pt-2 blog-data">
                                    <span className="px-4  border-end "><small>April 3, 2023 </small></span><span className="px-4"><small>No Comments</small> </span> 
                                </div>  
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="news-right">
                        <div className="about-organizer p-6 box-shadow rounded text-center mb-6">
                            <div className="organizer-title mb-3">
                                <h6>About Organizers</h6>
                            </div>
                            <div className="sperator mb-6 w-20 border-bottom border-2 border-pink m-auto"></div>
                            <div className="organizer-image">
                                <img src="assets/images/team/2.jpg" alt="team-image" className=" rounded-circle mb-3"/>
                            </div>
                            <div className="organizer-bio pb-5 mb-4 border-bottom border-2 border-grey border-opacity-25 border-bottom-dashed">
                                <h6 className="mb-1">Hi, Jenny loral</h6>
                                <p className="mb-0 w-80 m-auto"><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.</small></p>
                            </div>
                            <div className="organizer-socials pb-5">
                                <ul className="m-0 p-0 d-flex gap-2 justify-content-center">
                                    {['facebook', 'twitter', 'google', 'instagram', 'youtube-play'].map((icon, i) => (
                                    <li key={i} className="d-inline">
                                        <a href="/" className="d-inline-block rounded-circle text-grey border border-1 border-grey">
                                        <i className={`fa fa-${icon}`}></i>
                                        </a>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="catagories p-6 rounded box-shadow mb-6">
                            <h6 className="mb-3">Categories</h6>
                            <div className="sperator mb-4 m-0 w-20  border-bottom border-2 border-pink"></div>
                            <ul className="m-0 p-0 list-unstyled">
                                <li className="py-3 border-bottom border-1 border-grey border-opacity-50 border-bottom-dashed">
                                <a href="/" className="text-grey"><i className="fa fa-check pink pe-3" aria-hidden="true"></i>Online Ticketing</a>
                                </li>
                                <li className="py-3 border-bottom border-1 border-grey border-opacity-50 border-bottom-dashed">
                                <a href="/" className="text-grey"><i className="fa fa-check pink pe-3" aria-hidden="true"></i>Conference</a>
                                </li>
                                <li className="py-3 border-bottom border-1 border-grey border-opacity-50 border-bottom-dashed">
                                <a href="/" className="text-grey"><i className="fa fa-check pink pe-3" aria-hidden="true"></i>Marketing Event</a>
                                </li>
                                <li className="py-3 border-bottom border-1 border-grey border-opacity-50 border-bottom-dashed">
                                <a href="/" className="text-grey"><i className="fa fa-check pink pe-3" aria-hidden="true"></i>SEO Conference</a>
                                </li>
                                <li className="py-3 border-bottom border-1 border-grey border-opacity-50 border-bottom-dashed">
                                <a href="/" className="text-grey"><i className="fa fa-check pink pe-3" aria-hidden="true"></i>Resonable Service</a>
                                </li>
                                <li className="pt-3 border-0">
                                <a href="/" className="text-grey"><i className="fa fa-check pink pe-3" aria-hidden="true"></i>Digital Marketing</a>
                                </li>
                            </ul>
                        </div>
                        <div className="recent-post-box p-6 box-shadow rounded mb-6">
                            <h6 className="mb-2">Recent Posts</h6>
                            <div className="sperator w-20 border-bottom border-2 border-pink mb-5"></div>
                            <div className="recent-post-list">
                                <div className="row">
                                <div className="col-lg-12 col-md-6">
                                    <div className="recent-post d-flex align-items-center  mb-4">
                                        <div className="post-img">
                                            <Link to="/Blogsingle"><img src="assets/images/group/6.jpg" alt="Blog" className="me-3"/></Link>
                                        </div>
                                        <div className="post-detail">
                                            <Link to="/Blogsingle"  className="black fw-bold text-uppercase">The Top Music Festivals in NYC</Link>
                                            <p className="mb-0"><small>April 3, 2023</small></p>
                                        </div>   
                                    </div>
                                </div>  
                                <div className="col-lg-12 col-md-6">
                                    <div className="recent-post d-flex align-items-center mb-4">
                                        <div className="post-img">
                                            <Link to="/Blogsingle"><img src="assets/images/group/7.jpg" alt="Blog" className="me-3"/></Link>
                                        </div>
                                        <div className="post-detail">
                                            <Link to="/Blogsingle"  className="black fw-bold text-uppercase">Live Interview from conference</Link>
                                            <p className="mb-0"><small>April 3, 2023</small></p>
                                        </div>    
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6">
                                    <div className="recent-post d-flex align-items-center mb-4">
                                        <div className="post-img">
                                            <Link to="/Blogsingle"><img src="assets/images/group/4.jpg" alt="Blog" className="me-3"/></Link>
                                        </div>
                                        <div className="post-detail">
                                            <Link to="/Blogsingle"  className="black fw-bold text-uppercase">Registration for opening workshop</Link>
                                            <p className="mb-0"><small>April 3, 2023</small></p>
                                        </div>   
                                    </div>
                                </div>
                                </div>  
                            </div>
                        </div>
                        <div className="social-media-links pb-5">
                            <h6 className="mb-2">Social Media</h6>
                            <div className="sperator w-20 border-bottom border-2 border-pink mb-5"></div>
                            <div className="social-media-inner">
                                <div className="row g-3">
                                <div className="col-6">
                                    <a  href="/" className="btn rounded-3 p-2 text-capitalize w-100 text-start"><i className="fa fa-facebook-official rounded mx-2 me-3" aria-hidden="true"></i>Facebook</a>
                                </div>
                                <div className="col-6">
                                    <a href="/" className="btn rounded-3 p-2 text-capitalize w-100 text-start"><i className="fa fa-twitter rounded mx-2 me-3" aria-hidden="true"></i>Twitter</a>
                                </div>
                                <div className="col-6">
                                    <a href="/" className="btn rounded-3 p-2 text-capitalize w-100 text-start"><i className="fa fa-whatsapp rounded mx-2 me-3" aria-hidden="true"></i>WhatsApp</a>
                                </div>
                                <div className="col-6">
                                    <a href="/" className="btn rounded-3 p-2 text-capitalize w-100 text-start"><i className="fa fa-linkedin-square rounded mx-2 me-3" aria-hidden="true"></i>LinkedIn</a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </section> 
        {/*--News Archive Section end*/}
    </div>
  )
}

export default Bloglists