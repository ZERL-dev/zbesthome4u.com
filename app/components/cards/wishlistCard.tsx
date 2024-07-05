import React from "react";
import { useNavigate } from "@remix-run/react";
import { Card, CardBody, Image, Stack, Heading, Button, ButtonGroup } from "@chakra-ui/react";
import { Listing } from "../../../utils/types";

interface WishlistCardProps {
    listing: Listing;
    deleteListing: () => void;
    closeWishlistModal: () => void;
};

const WishlistCard: React.FC<WishlistCardProps> = ({ listing, deleteListing, closeWishlistModal }) => {

    const navigate = useNavigate();

    return (
        <Card variant="outline" className="flex w-full justify-between" style={{ flexDirection: "row" }}>
            <div className="h-full">
                <Image
                    src={listing.thumbnail}
                    alt="Wishlist Listing Thumbnail"
                    className="h-full"
                />
            </div>
            <Stack className="w-[60%] h-full border">
                <CardBody className="flex flex-col justify-between">
                    <Heading size="lg">{listing.title}</Heading>
                    <ButtonGroup className="flex flex-col items-start">
                        <Button variant="solid" colorScheme="blue" onClick={() => { navigate(`/listing/${listing.id}`); closeWishlistModal(); }}>View Listing</Button>
                        <Button variant="solid" colorScheme="red" style={{ margin: "10px 0 0 0" }} onClick={deleteListing}>Delete</Button>
                    </ButtonGroup>
                </CardBody>
            </Stack>
        </Card>
    );
};

export default WishlistCard;