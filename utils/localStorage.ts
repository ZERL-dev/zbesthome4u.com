import { Listing } from "./types";

export const getLanguage = () => {
    const languageString = localStorage.getItem("language");
    return languageString ?
        languageString === "amharic" ? "amharic" : "english"
    : 
        "english";
};

export const getWishlistItems = () => {

    const wishlistString = localStorage.getItem("wishlist");
    const wishlist: Listing[] = wishlistString ? JSON.parse(wishlistString) : []; 
    return wishlist;
    
};

export const checkInWishlist = (id: number | undefined) => {

    if (typeof window !== "undefined") {
        const wishlistString = localStorage.getItem("wishlist");
        const wishlist: Listing[] = wishlistString ? JSON.parse(wishlistString) : [];

        if (wishlist.length === 0) {
            return false;
        } else {

            for (let i = 0; i < wishlist.length; i++) {
                if (wishlist[i].id === id) {
                    return true;
                };
            };

            return false;

        };
    };
};

export const addToWishlist = (listing: Listing) => {

    const wishlistString = localStorage.getItem("wishlist");
    const wishlist: Listing[] = wishlistString ? JSON.parse(wishlistString) : [];
    const ListingString = JSON.stringify(listing);

    if (wishlist.length === 0) {

        localStorage.setItem("wishlist", `[${ListingString}]`);
        return true;

    } else {
        const found = checkInWishlist(listing.id);
        if (found) {
            return true;
        } else {
            const updatedWishlist = [...wishlist, listing];
            localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
            return true;
        };
    };
};

export const deleteFromWishlist = (listing: Listing) => {

    const wishlistString = localStorage.getItem("wishlist");
    const wishlist: Listing[] = wishlistString ? JSON.parse(wishlistString) : [];

    if (wishlist.length !== 0) {

        let found;

        for (let i = 0; i < wishlist.length; i++) {
            if (wishlist[i].id === listing.id) {
                found = i;
                break;
            } else {
                found = undefined;
            };
        };

        if (found !== undefined && wishlist.length > 1) {
            wishlist.splice(found, 1);
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
            return false;
        } else if (found !== undefined && wishlist.length === 1) {
            localStorage.removeItem("wishlist");
            return false;
        } else {
            return false;
        };
    };

    return true;

};