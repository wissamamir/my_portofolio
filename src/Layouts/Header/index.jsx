import Link from "next/link"
import { useState } from "react"




const Header = () => {
    const [clicked, setClicked] = useState(false);
  
    const handleClick = () => {
      setClicked(!clicked);
    };
    const handleMenuItemClick = () => {
        setClicked(false); 
      };
  
    const MenuItems = [
      {
        title: 'Home',
        url: '/'
      },
      {
        title: 'About Me',
        url: '/about'
      },
      {
        title: 'Contact Me',
        url: '/contact'
      },
      {
        title: 'My Skills',
        url: '/skills'
      },
      {
        title: 'My Projects',
        url: '/my-projects'
      }
    ];
  
    return (
      <header className="header">
        <nav className="navbarItems">
          <h1 className="navbar-logo">

          <Link href='/'>
          <span>WISSAM</span>
          </Link>
          </h1>
          <div className="menu-icons">
            <i
              className={clicked ? 'fas fa-times' : 'fas fa-bars'}
              onClick={handleClick}
            ></i>
          </div>
          <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.url} className="nav-links" onClick={handleMenuItemClick}>
                    <i></i>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;

