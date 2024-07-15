import React, { Suspense, lazy } from "react";
import SkeletonCard from "../components/cards/skeletonCard";
import { checkInWishlist } from "../../utils/localStorage";
import { Listing, ListingsText } from "../../utils/types";

interface AllListingsProps {
    listings: Listing[];
    language: string | symbol;
    text: ListingsText;
};

const ListingCard = lazy(() => import("../components/cards/listingCard"));

const AllListings: React.FC<AllListingsProps> = ({ listings, language, text }) => {
    
    return (
        <div id="AllListings">
            <div id="AllListingsContainer">
                <div id="AllListingsHeaderContainer">
                    <div id="AllListingsTitleContainer">
                        <p id="AllListingsTitle">{text.title[language]}</p>
                    </div>
                </div>
                <div id="AllListingsCardContainer">
                    {listings.map((listing: Listing, index: number) => (
                        <div id="AllListingsCard" key={index}>
                            <Suspense fallback={<SkeletonCard />}>
                                <ListingCard listing={listing} inWishlist={checkInWishlist(listing.id)} />
                            </Suspense>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllListings;