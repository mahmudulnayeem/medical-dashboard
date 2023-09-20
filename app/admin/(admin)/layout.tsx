import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <p>Admin layout</p>
        {children}
      </body>
    </html>
  );
};

export default Layout;
