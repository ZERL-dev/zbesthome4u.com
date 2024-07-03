import React, { useState } from "react";
import { NavLink, unstable_useViewTransitionState, useLocation } from "@remix-run/react";
import { Card, CardBody, Image, Stack, Heading, Text, Button, ButtonGroup } from "@chakra-ui/react";
import DeleteModal from "../containers/deleteModal";
import { Listing } from "../../../utils/types";

interface AdminCardProps {
    listing: Listing;
};

const AdminCard: React.FC<AdminCardProps> = ({ listing }) => {
    
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const isTransitioning = unstable_useViewTransitionState(`update/${listing.id}`);
    const location = useLocation();

    const openDeleteModal = () => {
        setShowDeleteModal(true);
    };

    const closeDeleteModal = () => {
        setTimeout(() => {
            setShowDeleteModal(false);
        }, 100);
    };

    return (
        <Card className="flex h-full items-start">
            <CardBody>
                <Image
                    src={listing.thumbnail}
                    alt="Listing Card Thumbnail"
                    className="rounded-[5px]"
                    style={ isTransitioning && location.pathname === "/admin/listings/view" ? { viewTransitionName: "admin-image" } : undefined }
                />
                <Stack mt="6" spacing="3">
                    <Heading size="md">{listing.title}</Heading>
                    <Text fontSize="lg">${listing.price}</Text>
                </Stack>
            </CardBody>
            <ButtonGroup className="flex flex-row">
                <Button variant="ghost" colorScheme="blue" className="ml-[10px] mb-[10px]">
                    <NavLink to={`/admin/listings/view/update/${listing.id}`} unstable_viewTransition>Update</NavLink>
                </Button>
                <Button variant="ghost" colorScheme="red" className="mr-[10px] mb-[10px]" onClick={openDeleteModal}>Delete</Button>
                {showDeleteModal && <DeleteModal listingID={String(listing.id)} showModal={true} closeModal={closeDeleteModal} />}
            </ButtonGroup>
        </Card>
    );
};

export default AdminCard;