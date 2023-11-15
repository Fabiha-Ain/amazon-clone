import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase";

function Header() {
    const [{ basket,user }]= useStateValue();
    const login = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo"
                     src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                     alt=""
                />
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello Ain</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out': 'Sign In'}</span>
                    </div>
                </Link>
            </div>
            <div className="header__nav">
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
            </div>
            <div className="header__nav">
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
            </div>
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount"> {basket?.length}</span>
                </div>
            </Link>
        </nav>
    );
}

export default Header;