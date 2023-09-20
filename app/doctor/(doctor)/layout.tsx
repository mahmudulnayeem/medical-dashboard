import React from "react";

const DoctorLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        DoctorLayout
        {children}
      </body>
    </html>
  );
};

export default DoctorLayout;
