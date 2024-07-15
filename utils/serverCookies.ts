import { createCookie, redirect, json } from "@remix-run/node";

export const languageCookie = createCookie("language");

export const setLanguage = async (request: Request) => {

    const cookieHeader = request.headers.get("Cookie");
    const cookie = (await languageCookie.parse(cookieHeader)) || {};
    const formData = await request.formData();
    const route = formData.get("route") ? String(formData.get("route")) : "/";

    if (cookie.language === "english") {
        cookie.language = "amharic";
    } else {
        cookie.language = "english";
    };

    return redirect(route, {
        headers: { "Set-Cookie": await languageCookie.serialize(cookie) }
    });
};

export const getLanguage = async (cookieHeader: string | null) => {
    const cookie = (await languageCookie.parse(cookieHeader)) || {};
    return json({ language: cookie.language });
};

export const parseLanguage = (language: string | undefined) => {
    if (language && language.includes("amharic")) {
        return Symbol("amharic");
    } else {
        return "english";
    };
};
