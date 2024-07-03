const categories = [
    "Listing, Top",
    "Listing, Bottom", 
    "Listing, Other",
    "Accessories",
    "Other"
];

const categoryObj: { [key: string]: string; } = {
    CT: "Listing, Top",
    CB: "Listing, Bottom", 
    CO: "Listing, Other",
    A: "Accessories",
    O: "Other"
};

const sizes = [
    "Extra Extra Small",
    "Extra Small",
    "Small",
    "Medium",
    "Large",
    "Extra Large",
    "Extra Extra Large",
    "One Size"
];

const sizeObj: { [key: string]: string; } = {
    XXS: "Extra Extra Small",
    XS: "Extra Small", 
    S: "Small",
    M: "Medium",
    L: "Large",
    XL: "Extra Large",
    XXL: "Extra Extra Large",
    OS: "One Size"
};

const genders = [
    "Male",
    "Female", 
    "Unisex"
];

const genderObj: { [key: string]: string; } = {
    M: "Male",
    F: "Female", 
    U: "Unisex"
};

const filters = { categories, categoryObj, sizes, sizeObj, genders, genderObj };

export default filters;