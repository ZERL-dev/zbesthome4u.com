import React from "react";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import getListingByID from "../../services/GET/getListingByID";
import ListingByID from "../containers/listingByID";
import { Listing } from "utils/types";

export const meta: MetaFunction = () => {
    return [
        { title: "View Listing - Elias Realtor" },
        { name: "description", content: "Welcome to Elias Realtor!" },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ];
};

export async function loader({ params }: LoaderFunctionArgs) {
    const res: Listing[] = await getListingByID(String(params.id));
    return res;
};

export default function ListingByIDPage() {

    const listingByID = useLoaderData<typeof loader>();

    return (
        <ListingByID listing={listingByID[0]} />
    );
};