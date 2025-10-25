import React, { ReactNode } from "react";

interface PageProps {
    children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
    return (
        <section>
            {children}
            <p>Invoices Page</p>
        </section>
    );
};

export default Page;









