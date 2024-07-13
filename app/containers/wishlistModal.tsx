import React from "react";
import WishlistCard from "../components/cards/wishlistCard";
import { deleteFromWishlist } from "../../utils/localStorage";
import { IoClose } from "react-icons/io5";
import { HeaderText, Listing } from "../../utils/types";

interface WishlistModalProps {
    text: HeaderText;
    language: string | symbol;
    wishlistItems: Listing[];
    requestWishlistItems: () => void;
    closeWishlistModal: () => void;
};

const WishlistModal: React.FC<WishlistModalProps> = ({ text, language, wishlistItems, requestWishlistItems, closeWishlistModal }) => {
    
    return (
        <div id="WishlistModal">
            <div id="WishlistModalHeaderContainer">
                <p id="WishlistModalHeader">{text.wishlist.title[language]}</p>
            </div>
            <div id="WishlistModalCloseContainer" onClick={closeWishlistModal}>
                <IoClose id="WishlistModalClose" />
            </div>
            <div id="WishlistModalCardsContainer">
                {wishlistItems.length === 0 ? (
                    <div id="WishlistModalEmptyMessage">{text.wishlist.emptyMessage[language]}</div>
                ) : (
                    <>
                        {wishlistItems.map((item: Listing, index: number) => (
                            <div id="WishlistModalCard" key={index}>
                                <WishlistCard listing={item} deleteListing={() => { deleteFromWishlist(wishlistItems[index]); requestWishlistItems(); }} closeWishlistModal={closeWishlistModal} />
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default WishlistModal;