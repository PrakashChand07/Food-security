import React from "react";

const SocialLinks = () => {
  const links = [
    { icon: "facebook", url: "https://www.facebook.com/FoodsecuritysummitX?rdid=g1YODMsnUtQNXXRT&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16eWgLrPx7%2F#" },
    { icon: "twitter", url: "https://www.twitter.com" },
    { icon: "google", url: "https://www.google.com" },
    { icon: "instagram", url: "https://www.instagram.com/foodsecuritysummitx/?igsh=cnV0dW02ZW95aWhs#" },
  ];

  return (
    <>
      {links.map((item, i) => (
        <li key={i} className="d-inline-block">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded d-block"
          >
            <i className={`fa fa-${item.icon}`}></i>
          </a>
        </li>
      ))}
    </>
  );
};

export default SocialLinks;
