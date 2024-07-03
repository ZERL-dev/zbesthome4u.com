import React from "react";
import type { MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import getAllListings from "../../services/GET/getAllListings";
import Header from "../global/header";
import AllListings from "../containers/allListings";
import Footer from "../global/footer";
import { Listing } from "../../utils/types";

export const meta: MetaFunction = () => {
    return [
        { title: "Listings - Elias Realtor" },
        { name: "description", content: "Welcome to Elias Realtor!" },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ];
};

export async function loader() {
    const res: Listing[] = await getAllListings();
    return res.reverse();
};

export default function AllListingsPage() {

    const allListings = useLoaderData<typeof loader>();
    
    return (
        <>
            <Header />
            <AllListings allListings={allListings} />
            <Outlet />
            <Footer />
        </>
    );
};