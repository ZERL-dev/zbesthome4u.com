import React, { useState, useEffect } from "react";
import { NavLink } from "@remix-run/react";
import MobileMenu from "./mobileMenu";
import WishlistModal from "../containers/wishlistModal";
import { getWishlistItems } from "../../utils/localStorage";
import logo from "../../public/logo.webp";
import { FaHeart } from "react-icons/fa";
import { Listing } from "../../utils/types";

const Header: React.FC<{ language: string; text: object; }> = () => {

    const [itemBackground, setItemBackground] = useState("none");
    const [horizontalPercentage, setHorizontalPercentage] = useState("0%");
    const [verticalPercentage, setVerticalPercentage] = useState("0%");
    const [wishlistModalOpen, setWishlistModalOpen] = useState(false);
    const [wishlistItems, setWishlistItems] = useState<Listing[]>([]);
    const [scrolled, setScrolled] = useState(false);

    const updateItemBackgroundPercentage = (percentage: string) => {
        setItemBackground("flex");
        setVerticalPercentage("22.5%");
        setHorizontalPercentage(percentage);
    };

    const hideItemBackground = () => {
        setItemBackground("none");
        setHorizontalPercentage("0%");
        setVerticalPercentage("-50%");
    };

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setScrolled(true);
        } else {
            setScrolled(false);
            closeMobileHeader();
        };
    };

    const closeMobileHeader = () => {
        if (window.scrollY <= 10) {
            setScrolled(false);
        };
    };

    useEffect(() => {

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    return (
        <div id="Header">
            <div id="HeaderContainer" className={ scrolled ? "scrolled" : "" }>
                <div id="HeaderLogoContainer">
                    <NavLink to="/"><img id="HeaderLogo" src={logo} alt="Elias Realtor Logo" /></NavLink>
                </div>
                <div id="MobileHeaderMenuContainer">
                    <MobileMenu />
                </div>
                <ul id="HeaderListContainer" onMouseLeave={hideItemBackground}>
                    <div id="HeaderListBackground"></div>
                    <li className="HeaderListItem" onMouseEnter={() => updateItemBackgroundPercentage("0%")}>
                        <a href="/">Home</a>
                    </li>
                    <li className="HeaderListItem" onMouseEnter={() => updateItemBackgroundPercentage("20%")}>
                        <a href="/about">About</a>
                    </li>
                    <li className="HeaderListItem" onMouseEnter={() => updateItemBackgroundPercentage("40%")}>
                        <a href="/contact">Contact</a>
                    </li>
                    <li className="HeaderListItem" onMouseEnter={() => updateItemBackgroundPercentage("60%")}>
                        <a href="/listings">Listings</a>
                    </li>
                    <li className="HeaderListItem" onMouseEnter={() => updateItemBackgroundPercentage("80%")} onClick={() => { setWishlistItems(getWishlistItems()); setWishlistModalOpen(true); }}>
                        <FaHeart className="text-red-600 text-2xl" />
                    </li>
                </ul>
                {wishlistModalOpen && 
                    <WishlistModal 
                        wishlistItems={wishlistItems}
                        requestWishlistItems={() => { setWishlistItems(getWishlistItems()); setWishlistModalOpen(true); }}
                        closeWishlistModal={() => setWishlistModalOpen(false)}
                    />
                }
            </div>
            <style>
                {`
                    :root {
                        --itemBackground: ${itemBackground};
                        --verticalPercentage: ${verticalPercentage};
                        --horizontalPercentage: ${horizontalPercentage};
                    }
                `}
            </style>
        </div>
    );
};

export default Header;