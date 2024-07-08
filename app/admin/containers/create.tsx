import React, { useState } from "react";
import { Input, Image, Button, FormControl, FormLabel } from "@chakra-ui/react";
import createListing from "../../../services/POST/createListing";
import cloudinaryUpload from "../../../services/POST/cloudinaryUpload";
import { Listing } from "../../../utils/types";

export default function Create() {
    
    const [showWarning, setShowWarning] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    // const [imageURLArray, setImageURLArray] = useState<string[]>([]);
    const [thumbnail, setThumbnail] = useState("");
    const [newListing, setNewListing] = useState<Listing>({
        id: undefined,
        title: "",
        price: 0,
        perks: "",
        address: "",
        description: "",
        application_link: "",
        date: "",
        thumbnail: "",
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

    const validateNewListing = (newListing: Listing) => {
        
        const listing = { ...newListing, thumbnail: thumbnail };

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
            createListing(listing);
            setTimeout(() => {
                window.location.href = `/admin/listing/view`;
            }, 1000);
                
        } else {
            setShowWarning(true);
            setTimeout(() => {
                setShowWarning(false);
            }, 4000);
        };
    };
    
    return (
        <div className="flex fixed bottom-0 right-0 w-[80vw] h-[77.5vh] flex-row">
            <div className="flex relative w-[50%] h-full pl-[5%] justify-start items-center">
                {/* <input id="UploadGallery" type="file" accept="image/*" onChange={(file) => sendImage(file, "gallery")} />
                {imageURLArray.map((image: string, index: number) => (
                    <div id="GalleryImagePreview" key={index}>
                        <Image src={image} alt="Gallery Image" />
                    </div>
                ))} */}
                <div className="flex flex-col">
                    <input id="UploadThumbnail" type="file" accept="image/*" onChange={(file) => sendImage(file, "thumbnail")} />
                    <Image src={thumbnail} alt="Thumbnail Image" className="w-[80%] object-contain" />
                </div>
            </div>

            <div className="flex relative w-[50%] h-full pr-[7.5%] flex-col justify-center items-center">
                <div className="flex absolute w-full h-[90%] rounded-[25px] z-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }} />
                <div className="flex relative w-full h-[80%] pt-[5%] pr-[2%] flex-col justify-start items-start text-white">
                    <div className="flex relative w-full h-[98%] mb-[2%] pt-[2%] pr-[2%] flex-col justify-start items-start overflow-y-scroll">
                        <FormControl variant="floating" isRequired className="h-[60px] mb-[20px]">
                            <Input variant="flushed" placeholder=" " onChange={(e) => setNewListing({...newListing, title: e.target.value})} />
                            <FormLabel>Listing Title</FormLabel>
                        </FormControl>
                        <FormControl variant="floating" isRequired className="h-[60px] mb-[20px]">
                            <Input type="number" variant="flushed" placeholder=" " onChange={(e) => setNewListing({...newListing, price: Number(e.target.value)})} />
                            <FormLabel>Listing Price</FormLabel>
                        </FormControl>
                        <FormControl variant="floating" isRequired className="h-[60px] mb-[20px]">
                            <Input variant="flushed" placeholder=" " onChange={(e) => setNewListing({...newListing, description: e.target.value})} />
                            <FormLabel>Description</FormLabel>
                        </FormControl>
                    </div>
                    <Button isLoading={submitting} onClick={() => validateNewListing(newListing)}>Create</Button>
                    {showWarning && 
                        <div className="flex absolute bottom-0 right-0 h-[40px] items-center text-red-600 text-2xl font-semibold">Invalid Information</div>
                    }
                </div>
            </div>
        </div>
    );
};