import React from "react";
import type { MetaFunction, LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Header from "../global/header";
import About from "../containers/about";
import Footer from "../global/footer";
import { getLanguage, setLanguage } from "../../utils/serverCookies";
import { textData } from "../../utils/textData";

export const meta: MetaFunction = () => {
    return [
        { title: "About - Elias Realtor" },
        { name: "description", content: "Welcome to Elias Realtor!" }, 
        { name: "viewport", content: "width=device-width, initial-scale=1" }
    ];
};

export async function loader({ request }: LoaderFunctionArgs) {
    return await getLanguage(request.headers.get("Cookie"));
};

export async function action({ request }: ActionFunctionArgs) {
    return await setLanguage(request);
};

export default function AboutPage() {

    const { language } = useLoaderData<typeof loader>();
    const parsedLanguage = language.includes("amharic") ? Symbol("amharic") : "english";
    const headerText = textData.header;
    const aboutText = textData.about;

    return (
        <>
            <Header language={parsedLanguage} text={headerText} />
            <About language={language} text={aboutText} />
            <Footer />
        </>
    );
};
