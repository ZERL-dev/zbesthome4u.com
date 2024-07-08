import React from "react";
import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Header from "../global/header";
import Contact from "../containers/contact";
import { getLanguage } from "../../utils/localStorage";
import { textData } from "../../utils/textData";

export const meta: MetaFunction = () => {
    return [
        { title: "Contact - Elias Realtor" },
        { name: "description", content: "Welcome to Elias Realtor!" }, 
        { name: "viewport", content: "width=device-width, initial-scale=1" }
    ];
};

export function loader() {
    return getLanguage();
};

export default function ContactPage() {

    const language = useLoaderData<typeof loader>();
    const headerText = textData.header;
    const contactText = textData.contact;

    return (
        <>
            <Header language={language} text={headerText} />
            <Contact language={language} text={contactText} />
        </>
    );
};
