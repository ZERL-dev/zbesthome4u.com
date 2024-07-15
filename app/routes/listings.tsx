import React from "react";
import type { MetaFunction, LoaderFunctionArgs, ActionFunctionArgs, TypedResponse } from "@remix-run/node";
import { json, Outlet, useLoaderData } from "@remix-run/react";
import getAllListings from "../../services/GET/getAllListings";
import Header from "../global/header";
import AllListings from "../containers/allListings";
import Footer from "../global/footer";
import { getLanguage, setLanguage, parseLanguage } from "../../utils/serverCookies";
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
    const language = await getLanguage(request.headers.get("Cookie"));
    const listings = await getAllListings();

    const res: TypedResponse<{ parsedLanguage: TypedResponse<{ language: string }>; listings: Listing[] }> = json({ parsedLanguage: language, listings: listings });
    return res;
};

export async function action({ request }: ActionFunctionArgs) {
    return await setLanguage(request);
};

export default function AllListingsPage() {

    const { parsedLanguage, listings } = useLoaderData<typeof loader>();
    const { language } = parsedLanguage;
    const headerText = textData.header;
    const listingsText = textData.listings;

    return (
        <>
            <Header language={parseLanguage(language)} text={headerText} />
            <AllListings listings={listings} language={parseLanguage(language)} text={listingsText} />
            <Outlet />
            <Footer />
        </>
    );
};