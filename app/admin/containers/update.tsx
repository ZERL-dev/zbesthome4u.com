import React, { useState } from "react";
import { Input, Image, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { NavLink } from "@remix-run/react";
import updateListingByID from "../../../services/PUT/updateListingByID";
import cloudinaryUpload from "../../../services/POST/cloudinaryUpload";
import { IoClose } from "react-icons/io5";
import { Listing } from "../../../utils/types";

interface UpdateProps {
    listing: Listing;
};

const Update: React.FC<UpdateProps> = ({ listing }) => {

    const [showWarning, setShowWarning] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    // const [imageURLArray, setImageURLArray] = useState<string[]>([]);
    const [thumbnail, setThumbnail] = useState(listing.thumbnail);
    const [updatedListing, setUpdatedListing] = useState<Listing>({
        id: listing.id,
        title: listing.title,
        price: listing.price,
        perks: listing.perks,
        address: listing.address,
        description: listing.description,
        application_link: listing.application_link,
        date: listing.date,
        thumbnail: listing.thumbnail,
        gallery: ["temp"]
    });

    const stringPattern = new RegExp("^(?!\s*$).+");

    const sendImage = async (file: any, type: string) => {

        const res = await cloudinaryUpload(file.target.files?.[0]);

        if (type === "gallery") {
            // setImageURLArray([...imageURLArray, res]);
        } else if (type === "thumbnail") {
            setThumbnail(res);
        };
    };

    const validateUpdatedListing = (updatedListing: Listing) => {

        const listing = {...updatedListing, thumbnail: thumbnail};

        if (
            stringPattern.test(listing.title) &&
            stringPattern.test(listing.address) &&
            stringPattern.test(listing.date) &&
            stringPattern.test(listing.thumbnail) &&
            stringPattern.test(String(listing.price)) &&
            typeof listing.price === "number"
            // stringPattern.test(listing.gallery)
        ) {

            setSubmitting(true);
            updateListingByID(listing, String(listing.id));
            setTimeout(() => {
                window.location.href = `/admin/listings/view`;;
            }, 1000);
                
        } else {
            setShowWarning(true);
            setTimeout(() => {
                setShowWarning(false);
            }, 4000);
        };
    };

    return (
        <div className="flex fixed top-0 left-[20vw] w-[80vw] h-screen justify-center items-center backdrop-blur-[50px] z-[2]">
            <NavLink to={`/admin/listing/view`} className="flex fixed top-0 left-0 w-[65px] h-[65px] justify-end items-end text-[55px] z-[3]" unstable_viewTransition><IoClose /></NavLink>
            <div className="flex relative w-[50%] h-full pl-[5%] justify-start items-center">
                {/* <input id="UploadGallery" type="file" accept="image/*" onChange={(file) => sendImage(file, "gallery")} />
                {imageURLArray.map((image: string, index: number) => (
                    <div id="GalleryImagePreview" key={index}>
                        <Image src={image} alt="Gallery Image" />
                    </div>
                ))} */}
                <div className="flex flex-col">
                    <input id="UploadThumbnail" type="file" accept="image/*" onChange={(file) => sendImage(file, "thumbnail")} />
                    <Image src={thumbnail} alt="Thumbnail Image" className="w-[80%] object-contain" style={{ viewTransitionName: "admin-image" }} />
                </div>
            </div>

            <div className="flex relative w-[50%] h-full pr-[7.5%] flex-col justify-center items-center">
                <div className="flex absolute w-full h-[90%] rounded-[25px] z-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }} />
                <div className="flex relative w-full h-[80%] pt-[5%] pr-[2%] flex-col justify-start items-start text-white">
                    <div className="flex relative w-full h-[98%] mb-[2%] pt-[2%] pr-[2%] flex-col justify-start items-start overflow-y-scroll">
                        <FormControl variant="floating" isRequired className="h-[60px] mb-[20px]">
                            <Input variant="flushed" value={updatedListing.title} placeholder=" " onChange={(e) => setUpdatedListing({...updatedListing, title: e.target.value})} />
                            <FormLabel>Listing Title</FormLabel>
                        </FormControl>
                        <FormControl variant="floating" isRequired className="h-[60px] mb-[20px]">
                            <Input type="number" variant="flushed" value={updatedListing.price} placeholder=" " onChange={(e) => setUpdatedListing({...updatedListing, price: Number(e.target.value)})} />
                            <FormLabel>Listing Price</FormLabel>
                        </FormControl>
                        <FormControl variant="floating" isRequired className="h-[60px] mb-[20px]">
                            <Input variant="flushed" value={updatedListing.description} placeholder=" " onChange={(e) => setUpdatedListing({...updatedListing, description: e.target.value})} />
                            <FormLabel>Description</FormLabel>
                        </FormControl>
                    </div>
                    <Button isLoading={submitting} onClick={() => validateUpdatedListing(updatedListing)}>Update</Button>
                    {showWarning && 
                        <div className="flex absolute bottom-0 right-0 items-center text-red-600 text-2xl font-semibold">Invalid Information</div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Update;