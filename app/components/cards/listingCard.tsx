import React, { useState } from "react";
import { NavLink, unstable_useViewTransitionState, useLocation } from '@remix-run/react';
import { Card, CardBody, Image, Stack, Heading, Text, Button } from "@chakra-ui/react";
import { addToWishlist, deleteFromWishlist } from "../../../utils/localStorage";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Listing } from "../../../utils/types";

interface ListingCardProps {
    listing: Listing;
    inWishlist?: boolean;
};

const ListingCard: React.FC<ListingCardProps> = ({ listing, inWishlist }) => {

    const [wishlist, setWishlist] = useState(inWishlist);
    const isTransitioning = unstable_useViewTransitionState(`${listing.id}`);
    const location = useLocation();

    const updateWishlistState = () => {
        if (wishlist) {
            setWishlist(deleteFromWishlist(listing));
        } else {
            setWishlist(addToWishlist(listing));
        };
    };
    
    return (
        <Card className="flex h-full items-start">
            <NavLink to={`${listing.id}`} unstable_viewTransition>
                <CardBody>
                    <Image
                        src={listing.thumbnail}
                        alt='Listing Card Thumbnail'
                        style={ isTransitioning && location.pathname === "/listings" ? { viewTransitionName: "listing-image" } : undefined }
                        className="rounded-[5px]"
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{listing.title}</Heading>
                        <Text fontSize='lg'>${listing.price}</Text>
                    </Stack>
                </CardBody>
            </NavLink>
            <Button variant='ghost' onClick={updateWishlistState} className="ml-[10px] mb-[10px]">
                {wishlist ? (
                    <FaHeart className="text-red-600" /> 
                ) : (
                    <FaRegHeart />
                )}
            </Button>
        </Card>
    );
};

export default ListingCard;