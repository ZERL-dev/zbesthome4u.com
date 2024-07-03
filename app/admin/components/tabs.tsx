import React from "react";
import { NavLink, useLocation } from "@remix-run/react";
import { Heading, Tabs, TabList, Tab } from "@chakra-ui/react";

export default function AdminTabs() {

    const location = useLocation();
    const index = location.pathname === `/admin/listing/view` ? 0 : 1;
    
    return (
        <div className="fixed top-0 right-0 w-[80vw] h-[22.5vh] border-[#ccc] border-b">
            <div className="flex h-[50%] pl-[20px] items-end">
                <Heading size="2xl">Listings</Heading>
            </div>
            <div className="flex h-[50%] pl-[20px] items-end">
                <Tabs size="lg" defaultIndex={index}>
                    <TabList>
                        <NavLink to={`/admin/listing/view`}>
                            <Tab>View</Tab>
                        </NavLink>
                        <NavLink to={`/admin/listing/create`}>
                            <Tab>Create</Tab>
                        </NavLink>
                    </TabList>
                </Tabs> 
            </div>   
        </div>
    );
};