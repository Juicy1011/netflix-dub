import React, { useEffect, useState } from 'react';
import "./Nav.css";
import { useNavigate } from 'react-router-dom';
function Nav() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // If scrolling down, hide the navbar
        setShow(false);
      } else {
        // If scrolling up, show the navbar
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`nav ${show ? 'nav_black' : 'nav_hidden'}`}>
      <div className='nav_contents'>
        <img 
         onClick={() => navigate("/")}
          className='nav_logo' 
          src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940" 
          alt="Netflix Logo"
        />
        <img
         onClick={() => navigate("/profile")}
          className='nav_avatar'
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
          alt="Netflix Avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
