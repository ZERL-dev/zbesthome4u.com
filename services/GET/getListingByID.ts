import axios from "axios";
import { env } from "../../utils/env";

export default async function getListingByID(id: string) {
    try {
        const res = await axios.get(`${env.API_URL}/listing/id/${id}`);
        return res.data;
    } catch (error) {
        return error;
    };
};