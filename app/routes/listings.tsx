import React from "react";
import type { MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import getAllListings from "../../services/GET/getAllListings";
import Header from "../global/header";
import AllListings from "../containers/allListings";
import Footer from "../global/footer";
import { getLanguage } from "../../utils/localStorage";
import { textData } from "../../utils/textData";
import { Listing } from "../../utils/types";

export const meta: MetaFunction = () => {
    return [
        { title: "Listings - Elias Realtor" },
        { name: "description", content: "Welcome to Elias Realtor!" },
        { name: "viewport", content: "width=device-width, initial-scale=1" }
    ];
};

export async function loader() {
    const language = getLanguage();
    const allListings: Listing[] = await getAllListings();
    return { language: language, allListings: allListings.reverse() };
};

export default function AllListingsPage() {

    const loadedData = useLoaderData<typeof loader>();
    const headerText = textData.header;
    const listingsText = textData.listings;

    return (
        <>
            <Header language={loadedData.language} text={headerText} />
            <AllListings allListings={loadedData.allListings} language={loadedData.language} text={listingsText} />
            <Outlet />
            <Footer />
        </>
    );
};