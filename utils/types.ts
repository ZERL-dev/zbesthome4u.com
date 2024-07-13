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

export interface TextData {
    header: HeaderText;
    home: HomeText;
    about: AboutText;
    contact: ContactText;
    listings: ListingsText;
};

export interface HeaderText {
    home: {
        [english: string]: string;
        [amharic: symbol]: string;
    },
    about: {
        [english: string]: string;
        [amharic: symbol]: string;
    },
    contact: {
        [english: string]: string;
        [amharic: symbol]: string;
    },
    listings: {
        [english: string]: string;
        [amharic: symbol]: string;
    },
    wishlist: {
        title: {
            [english: string]: string;
            [amharic: symbol]: string;
        },
        emptyMessage: {
            [english: string]: string;
            [amharic: symbol]: string;
        }
    }
};

export interface HomeText {
    hero: {
        title: {
            [english: string]: string;
            [amharic: symbol]: string;
        },
        subtitle: {
            [english: string]: string;
            [amharic: symbol]: string;
        }
    },
    resources: {
        assistance: {
            homeBuyers: {
                title: {
                    [english: string]: string;
                    [amharic: symbol]: string;
                },
                md: {
                    [english: string]: string;
                    [amharic: symbol]: string;
                },
                dc: {
                    [english: string]: string;
                    [amharic: symbol]: string;
                },
                va: {
                    [english: string]: string;
                    [amharic: symbol]: string;
                }
            },
            hud: {
                title: {
                    [english: string]: string;
                    [amharic: symbol]: string;
                },
                hud: {
                    [english: string]: string;
                    [amharic: symbol]: string;
                },
                md: {
                    [english: string]: string;
                    [amharic: symbol]: string;
                },
                dc: {
                    [english: string]: string;
                    [amharic: symbol]: string;
                },
                va: {
                    [english: string]: string;
                    [amharic: symbol]: string;
                }
            }
        },
        connections: {
            lenders: {
                title: {
                    [english: string]: string;
                    [amharic: symbol]: string;
                },
                contact: LenderCard[];
            },
            contractors: {
                title: {
                    [english: string]: string;
                    [amharic: symbol]: string;
                },
                contact: ContractorCard[];
            }
        }
    }
};

export interface AboutText {
    title: {
        [english: string]: string;
        [amharic: symbol]: string;
    },
    biography: {
        title: {
            [english: string]: string;
            [amharic: symbol]: string;
        },
        paragraph: {
            [english: string]: string;
            [amharic: symbol]: string;
        }
    },
    mission: {
        title: {
            [english: string]: string;
            [amharic: symbol]: string;
        },
        paragraph: {
            [english: string]: string;
            [amharic: symbol]: string;
        }
    }
};

export interface ContactText {
    title: {
        [english: string]: string;
        [amharic: symbol]: string;
    },
    form: {
        title: {
            [english: string]: string;
            [amharic: symbol]: string;
        },
        name: {
            [english: string]: string;
            [amharic: symbol]: string;
        },
        email: {
            [english: string]: string;
            [amharic: symbol]: string;
        },
        body: {
            [english: string]: string;
            [amharic: symbol]: string;
        },
        submit: {
            [english: string]: string;
            [amharic: symbol]: string;
        }
    },
    info: {
        title: {
            [english: string]: string;
            [amharic: symbol]: string;
        }
    }
};

export interface ListingsText {
    title: {
        [english: string]: string;
        [amharic: symbol]: string;
    }
};

export interface LenderCard {
    company: string;
    name: string;
    title: string;
    nmls: string;
    number: string;
    email: string;
    address: string;
    website: string;
};

export interface ContractorCard {
    name: string;
    services: string;
    perks: string;
    number: string;
    email: string;
    website: string;
};