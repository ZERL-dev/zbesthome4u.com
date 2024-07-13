import { createCookie, redirect, json } from "@remix-run/node";

export const amharicCookie = createCookie("amharic");

export const setLanguage = async (request: Request) => {

    const cookieHeader = request.headers.get("Cookie");
    const cookie = (await amharicCookie.parse(cookieHeader)) || {};
    const formData = await request.formData();
    const route = formData.get("route") ? String(formData.get("route")) : "/";

    if (formData.get("language") === "amharic") {
        cookie.language = "amharic";
    } else {
        cookie.language = "english";
    };

    return redirect(route, {
        headers: { "Set-Cookie": await amharicCookie.serialize(cookie) }
    });
};

export const getLanguage = async (cookieHeader: string | null) => {

    const cookie = (await amharicCookie.parse(cookieHeader)) || {};

    return json(
        { language: cookie.language }
    );
};
