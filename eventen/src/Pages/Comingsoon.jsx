import React from 'react'
import Countdown from '../Components/Countdown'
import Pagehelmet from '../Components/Pagehelmet'

function Comingsoon() {
  const socialLinks = [
    { icon: 'facebook', url: 'https://www.facebook.com/FoodsecuritysummitX?rdid=fiEfKi8lKc1ym1KE&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16eWgLrPx7%2F#' },
    { icon: 'twitter', url: 'https://twitter.com/' },
    { icon: 'google', url: 'https://www.google.com/' },
    { icon: 'instagram', url: 'https://www.instagram.com/foodsecuritysummitx/?igsh=cnV0dW02ZW95aWhs#' },
    { icon: 'youtube-play', url: 'https://www.youtube.com/' },
  ]

  return (
    <div>
      <Pagehelmet pageTitle="Coming Soon" />
      <section className="text-center coming-soon position-relative vh-100 d-flex align-items-center">
        <div className="overlay"></div>
        <div className="container">
          <div className="coming-soon-inner w-lg-80 m-auto position-relative">
            {/* Logo */}
            <div className="logo">
              <img src="assets/foodLogo.jpg" alt="Eventen logo" className="w-25 mb-6" />
            </div>

            <div className="coming-soon-title">
              <h1 className="text-white mb-6">Something Awesome is coming</h1>
              <h4 className="text-white mb-2">Keep waiting to get more awesome things</h4>
            </div>

            {/* Divider */}
            <div className="py-2 mb-2">
              <div className="divider-pattern pt-3"></div>
            </div>

            {/* Countdown */}
            <div className="coming-countdown my-6">
              <Countdown />
            </div>

            {/* Social Media Links */}
            <div className="footer-socials pb-5">
              <ul className="m-0 p-0 d-flex gap-2 justify-content-center">
                {socialLinks.map((item, i) => (
                  <li key={i} className="d-inline">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-inline-block rounded-circle text-center align-middle bg-white bg-opacity-25"
                      style={{ width: '45px', height: '45px', lineHeight: '45px' }}
                    >
                      <i className={`fa fa-${item.icon}`}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Comingsoon
