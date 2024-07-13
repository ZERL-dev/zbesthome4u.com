import React, { useState, useEffect } from "react";
import { NavLink, Form, useLocation } from "@remix-run/react";
import MobileMenu from "./mobileMenu";
import WishlistModal from "../containers/wishlistModal";
import { getWishlistItems } from "../../utils/localStorage";
import logo from "../../public/logo.webp";
import { FaHeart } from "react-icons/fa";
import { HeaderText, Listing } from "../../utils/types";
import { Button } from "@chakra-ui/react";

const Header: React.FC<{ language: string | symbol; text: HeaderText; }> = ({ language, text }) => {

    const oppositeLanguage = language === Symbol("amharic") ? "english" : "amharic";
    const [scrolled, setScrolled] = useState(false);
    const [itemBackground, setItemBackground] = useState("none");
    const [horizontalPercentage, setHorizontalPercentage] = useState("0%");
    const [verticalPercentage, setVerticalPercentage] = useState("0%");
    const [wishlistModalOpen, setWishlistModalOpen] = useState(false);
    const [wishlistItems, setWishlistItems] = useState<Listing[]>([]);

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
                    <Form action="POST">
                        <input type="hidden" name="route" value={ useLocation().pathname } />
                        <input type="hidden" name="language" value={ oppositeLanguage === "english" ? "false" : "true" } />
                        <Button type="submit" colorScheme="blue" className="ml-2">{oppositeLanguage}</Button>
                    </Form>
                </div>
                <div id="MobileHeaderMenuContainer">
                    <MobileMenu />
                </div>
                <ul id="HeaderListContainer" onMouseLeave={hideItemBackground}>
                    <div id="HeaderListBackground"></div>
                    <li className="HeaderListItem" onMouseEnter={() => updateItemBackgroundPercentage("0%")}>
                        <a href="/">{text.home[language]}</a>
                    </li>
                    <li className="HeaderListItem" onMouseEnter={() => updateItemBackgroundPercentage("20%")}>
                        <a href="/about">{text.about[language]}</a>
                    </li>
                    <li className="HeaderListItem" onMouseEnter={() => updateItemBackgroundPercentage("40%")}>
                        <a href="/contact">{text.contact[language]}</a>
                    </li>
                    <li className="HeaderListItem" onMouseEnter={() => updateItemBackgroundPercentage("60%")}>
                        <a href="/listings">{text.listings[language]}</a>
                    </li>
                    <li className="HeaderListItem" onMouseEnter={() => updateItemBackgroundPercentage("80%")} onClick={() => { setWishlistItems(getWishlistItems()); setWishlistModalOpen(true); }}>
                        <FaHeart className="text-red-600 text-2xl" />
                    </li>
                </ul>
                {wishlistModalOpen && 
                    <WishlistModal 
                        text={text}
                        language={language}
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