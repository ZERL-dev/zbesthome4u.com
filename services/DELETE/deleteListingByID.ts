import axios from "axios";
import { env } from "../../utils/env";

export default function deleteListingByID(id: string) {
    try {
        axios.delete(`${env.API_URL}/listing/delete/${id}`);
    } catch (error) {
        return error;
    };
};