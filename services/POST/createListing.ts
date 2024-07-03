import axios from "axios";
import { env } from "../../utils/env";
import { Listing } from "../../utils/types";

export default function createListing(data: Listing) {
    try {
        axios.post(`${env.API_URL}/listing/new`, JSON.stringify(data));
    } catch (error) {
        return error;
    };
};