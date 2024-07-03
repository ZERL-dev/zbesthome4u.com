import React, { useState, Suspense, lazy } from "react";
import SkeletonCard from "../components/cards/skeletonCard";
import { checkInWishlist } from "../../utils/localStorage";
import { Listing } from "../../utils/types";

interface AllListingsProps {
    allListings: Listing[];
};

const ListingCard = lazy(() => import("../components/cards/listingCard"));

const AllListings: React.FC<AllListingsProps> = ({ allListings }) => {
    
    return (
        <div id="AllListings">
            <div id="AllListingsContainer">
                <div id="AllListingsHeaderContainer">
                    <div id="AllListingsTitleContainer">
                        <p id="AllListingsTitle">Listings</p>
                    </div>
                </div>
                <div id="AllListingsCardContainer">
                    {allListings.map((listing: Listing, index: number) => (
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