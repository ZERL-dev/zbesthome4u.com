import React from "react";
import type { MetaFunction, LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import getAllListings from "../../services/GET/getAllListings";
import Header from "../global/header";
import AllListings from "../containers/allListings";
import Footer from "../global/footer";
import { getLanguage, setLanguage } from "../../utils/serverCookies";
import { textData } from "../../utils/textData";
import { Listing } from "../../utils/types";

export const meta: MetaFunction = () => {
    return [
        { title: "Listings - Elias Realtor" },
        { name: "description", content: "Welcome to Elias Realtor!" },
        { name: "viewport", content: "width=device-width, initial-scale=1" }
    ];
};

export async function loader({ request }: LoaderFunctionArgs) {
    return await getLanguage(request.headers.get("Cookie"));
};

export async function listingsLoader() {
    return await getAllListings();
};

export async function action({ request }: ActionFunctionArgs) {
    return await setLanguage(request);
};

export default function AllListingsPage() {

    const { language } = useLoaderData<typeof loader>();
    const allListings = useLoaderData<typeof listingsLoader>();
    const parsedLanguage = language.includes("amharic") ? Symbol("amharic") : "english";
    const headerText = textData.header;
    const listingsText = textData.listings;

    return (
        <>
            <Header language={parsedLanguage} text={headerText} />
            <AllListings allListings={allListings} language={parsedLanguage} text={listingsText} />
            <Outlet />
            <Footer />
        </>
    );
};