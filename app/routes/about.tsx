import React from "react";
import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Header from "../global/header";
import About from "../containers/about";
import Footer from "../global/footer";
import { getLanguage } from "../../utils/localStorage";
import { textData } from "../../utils/textData";

export const meta: MetaFunction = () => {
    return [
        { title: "About - Elias Realtor" },
        { name: "description", content: "Welcome to Elias Realtor!" }, 
        { name: "viewport", content: "width=device-width, initial-scale=1" }
    ];
};

export function loader() {
    return getLanguage();
};

export default function AboutPage() {

    const language = useLoaderData<typeof loader>();
    const headerText = textData.header;
    const aboutText = textData.about;

    return (
        <>
            <Header language={language} text={headerText} />
            <About language={language} text={aboutText} />
            <Footer />
        </>
    );
};
