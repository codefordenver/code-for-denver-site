import React from 'react';

const socialLinks = [
  { link: "https://www.facebook.com/hashtag/codefordenver", icon: "fa fa-facebook-official"},
  { link: "https://twitter.com/codefordenver", icon: "fa fa-twitter-square"},
  { link: "https://github.com/codefordenver/", icon: "fa fa-github-square"}/*,
  { link: "#", icon: "fa fa-pinterest-square"},
  { link: "#", icon: "fa fa-google-plus-square"},
  { link: "#", icon: "fa fa-youtube-square"}
  */
]


const SocialMediaLinks = () => (

  <div className="social-links">
    <h2>
      Find us on social media
    </h2>
    <p>
      {
        socialLinks.map( (slink, index) => {
          return (
            <a className="social-link" key={index} href={slink.link} target="_blank"><i className={slink.icon}></i></a>
          );
        })
      }
    </p>
  </div>

);

export default SocialMediaLinks;
