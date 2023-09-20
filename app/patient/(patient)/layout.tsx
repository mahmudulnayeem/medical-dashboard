import React from "react";

const PatientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        PatientLayout
        {children}
      </body>
    </html>
  );
};

export default PatientLayout;
