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

  <div className="getconnected-links">
    <p>
      {
        socialLinks.map( slink => {
          return (
            <a className="social-link" href={slink.link} target="_blank"><i className={slink.icon}></i></a>
          );
        })
      }
    </p>
  </div>

);

export default SocialMediaLinks;
