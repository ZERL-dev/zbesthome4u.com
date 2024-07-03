import React, { useState, useEffect } from "react";
import { Heading, Text, Image, Stack } from "@chakra-ui/react";
import { NavLink } from "@remix-run/react";
import { IoClose } from "react-icons/io5";
import { Listing } from "../../utils/types";

interface ListingByIDProps {
    listing: Listing;
};

const ListingByID: React.FC<ListingByIDProps> = ({ listing }) => {

    const [category, setCategory] = useState(listing.category);
    const [size, setSize] = useState(listing.size);
    const [gender, setGender] = useState(listing.gender);

    const categoryOptions: { [key: string]: string; } = {
        "CT": "Listing, Top",
        "CB": "Listing, Bottom", 
        "CO": "Listing, Other",
        "A": "Accessories",
        "O": "Other"
    };

    const sizeOptions: { [key: string]: string; } = {
        "XXS": "Extra Extra Small",
        "XS": "Extra Small", 
        "S": "Small",
        "M": "Medium",
        "L": "Large",
        "XL": "Extra Large",
        "XXL": "Extra Extra Large",
        "OS": "One Size"
    };

    const genderOptions: { [key: string]: string; } = {
        "M": "Male",
        "F": "Female", 
        "U": "Unisex"
    };
    
    const updateFilterName = (filter: string) => {
        
        if (filter in categoryOptions) {
            setCategory(categoryOptions[filter]);
        };
        
        if (filter in sizeOptions) {
            setSize(sizeOptions[filter]);
        };

        if (filter in genderOptions) {
            setGender(genderOptions[filter]);
        };

    };

    useEffect(() => {
        
        if (category === listing.category) {
            updateFilterName(category);
        };

        if (size === listing.size) {
            updateFilterName(size);
        };

        if (gender === listing.gender) {
            updateFilterName(gender);
        };

    }, [category, size, gender]);
    
    return (
        <div id="ListingByID">
            <div id="ListingByIDContainer">
                <NavLink id="ListingByIDCloseButton" to={`/listings`} unstable_viewTransition><IoClose /></NavLink>
                <div id="IndividualListing">
                    <div id="IndividualListingContainer">
                        <div id="IndividualListingLeftContainer">
                            {/* {listing.gallery.map((gallery: string) => (
                                <div id="IndividualListingGalleryContainer">
                                    <Image id="IndividualListingGalleryImage" src={gallery} alt="Gallery Listing Item Picture" />
                                </div>
                            ))} */}
                            <Image 
                                id="IndividualListingThumbnail" 
                                src={listing.thumbnail} 
                                alt="Listing Item Picture"
                                style={{ viewTransitionName: "listing-image" }}
                            />
                        </div>
                        <div id="IndividualListingRightContainer">
                            <div id="IndividualListingStackBackground" />
                            <Stack id="IndividualListingStack" spacing={10}>
                                <Heading size="4xl">{listing.title}</Heading>
                                <Text fontSize="3xl">${listing.price}</Text>
                                <Text fontSize="2xl">{listing.description}</Text>
                                <Text fontSize="lg">Category: {category}</Text>
                                <Text fontSize="lg">Size: {size}</Text>
                                <Text fontSize="lg">Gender: {gender}</Text>
                                <Text fontSize="lg">Measurements: {listing.measurements}</Text>
                                {listing.notes ? (
                                    <Text fontSize="md">
                                        Notes: {listing.notes}
                                        <br/>
                                        <br/>
                                        Contact Genet to purchase or request a custom order! (202-597-6466)
                                    </Text>
                                ) : (
                                        <Text>
                                            No Notes
                                            <br/>
                                            <br/>
                                            Contact Genet to purchase or request a custom order! (202-597-6466)
                                        </Text>
                                    )}
                            </Stack>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingByID;