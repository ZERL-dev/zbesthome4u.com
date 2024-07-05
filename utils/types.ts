export interface Admin {
    username: string;
    password: string;
};

export interface Listing {
    id?: number;
    title: string;
    price: number;
    perks?: string;
    address: string;
    description?: string;
    application_link?: string;
    date: string;
    thumbnail: string;
    gallery?: string[];
    // hidden: boolean;
};