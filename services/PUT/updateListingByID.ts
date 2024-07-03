import axios from "axios";
import { env } from '../../utils/env';
import { Listing } from "../../utils/types";

export default function updateListingByID(data: Listing, id: string) {
    try {
        axios.put(`${env.API_URL}/listing/update/${id}`, data);
    } catch (error){
        return error;
    };
};