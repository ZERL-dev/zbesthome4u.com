import React from "react";
import AdminCard from "../components/adminCard";
import { Listing } from "../../../utils/types";

interface ViewProps {
    listings: Listing[];
};

const View: React.FC<ViewProps> = ({ listings }) => {

    return (
        <div className="flex fixed bottom-0 right-0 w-[80vw] h-[77.5vh]">
            <div className="grid relative w-full h-full px-[3%] py-[2%] gap-[25px] overflow-y-scroll" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}>
                {listings.map((listing: Listing, index: number) => (
                    <div key={index}>
                        <AdminCard listing={listing} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default View;