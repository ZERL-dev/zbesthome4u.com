import React from "react";
import type { MetaFunction, LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Header from "../global/header";
import Home from "../containers/home";
import { getLanguage, setLanguage } from "../../utils/serverCookies";
import { textData } from "../../utils/textData";

export const meta: MetaFunction = () => {
    return [
        { title: "Home - Elias Realtor" },
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

export default function HomePage() {

    const { language } = useLoaderData<typeof loader>();
    console.log(language)
    const parsedLanguage = language.includes("amharic") ? Symbol("amharic") : "english";
    const headerText = textData.header;
    const homeText = textData.home;

    return (
        <>
            <Header language={parsedLanguage} text={headerText} />
            <Home language={language} text={homeText} />
        </>
    );
};