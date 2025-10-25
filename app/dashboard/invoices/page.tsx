import React, { ReactNode } from "react";

interface PageProps {
    children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
    return (
        <div>
            <h1>Invoices</h1>
        </div>
    );
};

export default Page;


