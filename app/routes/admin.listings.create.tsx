import React from "react";
import type { MetaFunction } from "@remix-run/node";
import Create from "../admin/containers/create";

export const meta: MetaFunction = () => {
    return [
        { title: "Admin Create Listing - Elias Realtor" },
        { name: "description", content: "Welcome to Elias Realtor!" },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ];
};

export default function AdminListingCreatePage() {

    return (
        <Create />
    );
};