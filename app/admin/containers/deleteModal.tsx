import React, { useState } from "react";
import { Modal, Button, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Text } from "@chakra-ui/react";
import deleteListingByID from "../../../services/DELETE/deleteListingByID";

interface DeleteModalProps {
    listingID: string;
    showModal: boolean;
    closeModal: () => void;
};

const DeleteModal: React.FC<DeleteModalProps> = ({ listingID, showModal, closeModal }) => {

    const [showDeleteModal, setShowDeleteModal] = useState(showModal);
    const [deleting, setDeleting] = useState(false);

    const closeDeleteModal = () => {
        setShowDeleteModal(false);
        closeModal();
    };

    const deleteListing = () => {

        setDeleting(true);
        deleteListingByID(listingID);

        setTimeout(() => {
            window.location.href = `/admin/listings/view`;
        }, 1000);
    };

    return (
        <Modal isOpen={showDeleteModal} onClose={closeDeleteModal}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Delete Confirmation</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>Are you sure you want to delete this item?</Text>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={closeDeleteModal}>Cancel</Button>
                    <Button colorScheme="red" isLoading={deleting} onClick={deleteListing}>Delete</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default DeleteModal;