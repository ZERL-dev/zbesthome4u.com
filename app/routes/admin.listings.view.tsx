import React from "react";
import type { MetaFunction } from "@remix-run/node";
import { useLoaderData, Outlet } from "@remix-run/react";
import getAllListings from "../../services/GET/getAllListings";
import View from "../admin/containers/view";
import { Listing } from "../../utils/types";

export const meta: MetaFunction = () => {
    return [
        { title: "Admin View Listings - Elias Realtor" },
        { name: "description", content: "Welcome to Elias Realtor!" },
        { name: "viewport", content: "width=device-width, initial-scale=1" }
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
            <View listings={allListings} />
            <Outlet />
        </>
    );
};