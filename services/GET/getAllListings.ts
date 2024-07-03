import axios from "axios";
import { env } from "../../utils/env";

export default async function getAllListings() {
    try {
        const res = await axios.get(`${env.API_URL}/listing/all`);
        return res.data;
    } catch (error) {
        return error;
    };
};