This real estate brochure site that displays homes on sale from Elias Realtor was built with [**Remix.js**](https://remix.run), [**React**](https://react.dev), [**TypeScript**](https://www.typescriptlang.org), [**Chakra UI**](https://chakra-ui.com), and [**Tailwind CSS**](https://tailwindcss.com) connected to a Java Spring Boot server [**(Github Repo)**](https://github.com/ZERL-dev/server).

# Home Page

A general overview of Elias Realtor's home page.

Video

[**Code**](https://github.com/ZERL-dev/client/blob/main/app/containers/home.tsx)

Hovering over different header items has a background that smoothly follows where the user's mouse is hovering over.

Video

[**Code**](https://github.com/ZERL-dev/client/blob/main/app/global/header.tsx)

# Listing Pages

Clicking on the heart icon on a card adds that listing to the user's wishlist, which is stored in the browser's local host. Clicking the heart icon on the header opens up the wishlist modal where you can go to view those listing items or delete the listing item from the wishlist. Clicking on a red heart will also remove from the wishlist.

Video

### Listing By ID Page

Using the View Transition API [**(Docs)**](https://developer.chrome.com/docs/web-platform/view-transitions), selecting a card takes you to the id page and preforms a smooth animation where the image from the card transitions into the image on the id page. 

Video

[**Listing Card Code**](https://github.com/ZERL-dev/client/blob/main/app/components/cards/listingCard.tsx) and [**ID Page Code**](https://github.com/ZERL-dev/client/blob/main/app/containers/listingByID.tsx)

### Filters

Clicking on an option in the filter dropdowns shows the listings based on the filters and multiple to all filters can be selected at once. Filter options that don't currently exist on the listings are greyed out to prevent showing a blank page.

Video

[**Filter Bar Code**](https://github.com/ZERL-dev/client/blob/main/app/components/filters/filterBar.tsx) and one of the categories' components [**code**](https://github.com/ZERL-dev/client/blob/main/app/components/filters/categoryFilter.tsx).

See [**Server Github Repo**](https://github.com/ZERL-dev/server) for GraphQL explanation.

# Admin Portal

Following [**Remix's Modular Design**](https://remix.run/docs/en/main/discussion/routes#modular-design) to take advantage of Remix's child route rendering style, the admin portal has authentication and a smooth experience for the website's admin. 

Video

[**Code**](https://github.com/ZERL-dev/client/tree/main/app/admin)

# Notes

To use this project locally, run `npm run dev`.
