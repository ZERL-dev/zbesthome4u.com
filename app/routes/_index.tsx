import React from "react";
import type { MetaFunction } from "@remix-run/node";
import Header from "../global/header";
import Home from "../containers/home";

export const meta: MetaFunction = () => {
    return [
        { title: "Home - Elias Realtor" },
        { name: "description", content: "Welcome to Elias Realtor!" }, 
        { name: "viewport", content: "width=device-width, initial-scale=1" }
    ];
};

export default function HomePage() {

    return (
        <>
            <Header />
            <Home />
        </>
    );
};