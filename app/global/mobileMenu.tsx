import React, { useState } from "react";
import { useNavigate, useLocation } from "@remix-run/react";
import { useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button } from "@chakra-ui/react";
import WishlistModal from "../containers/wishlistModal";
import { getWishlistItems } from "../../utils/localStorage";
import { FaBars, FaHeart } from "react-icons/fa";
import { Listing } from "../../utils/types";

export default function MobileMenu() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [wishlistModalOpen, setWishlistModalOpen] = useState(false);
    const [wishlistItems, setWishlistItems] = useState<Listing[]>([]);
    const navigate = useNavigate();
    const currentPath = useLocation().pathname;

    const scrollToSection = (option: string) => {
        const section = document.getElementById(option);

        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        };
    };

    const redirect = (option: string) => {

        if (currentPath !== "/") {
            navigate("/");
            setTimeout(() => {
                scrollToSection(option);
                onClose();
            }, 1);
        } else {
            scrollToSection(option);
            onClose();
        };
    };

    return (
        <>
            <Button colorScheme="white" onClick={onOpen}>
                <FaBars id="MobileHeaderOpen" className="w-full h-[5vh] text-black" />
            </Button>
            <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton size="lg" />
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        <ul id="MobileHeaderListContainer">
                            <li className="MobileHeaderListItem" onClick={() => redirect("Hero")}>Home</li>
                            <li className="MobileHeaderListItem" onClick={() => redirect("About")}>About</li>
                            <li className="MobileHeaderListItem" onClick={() => redirect("Contact")}>Contact</li>
                            <li className="MobileHeaderListItem"><a href="/listings">Listings</a></li>
                            <li className="MobileHeaderListItem" onClick={() => { setWishlistItems(getWishlistItems()); setWishlistModalOpen(true); }}><FaHeart className="text-red-600" /></li>
                            {wishlistModalOpen && 
                                <WishlistModal 
                                    wishlistItems={wishlistItems}
                                    requestWishlistItems={() => {setWishlistItems(getWishlistItems()); setWishlistModalOpen(true)}}
                                    closeWishlistModal={() => { setWishlistModalOpen(false); onClose(); }}
                                />
                            }
                        </ul>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};