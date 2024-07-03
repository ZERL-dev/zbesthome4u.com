import React from "react";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import getListingByID from "../../services/GET/getListingByID";
import Update from "../admin/containers/update";
import { Listing } from "utils/types";

export const meta: MetaFunction = () => {
    return [
        { title: "Admin Update Listing - Elias Realtor" },
        { name: "description", content: "Welcome to Elias Realtor!" },
        { name: "viewport", content: "width=device-width, initial-scale=1" }
    ];
};

export async function loader({ params }: LoaderFunctionArgs) {
    const res: Listing[] = await getListingByID(String(params.id));
    return res;
};

export default function AdminListingUpdatePage() {

    const listingByID = useLoaderData<typeof loader>();

    return (
        <Update listing={listingByID[0]} />
    );
};