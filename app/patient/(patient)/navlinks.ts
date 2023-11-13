import { BiHistory } from "react-icons/bi";
import { GoHistory, GoReport } from "react-icons/go";

const navLinks = [
  {
    name: "Appointments",
    link: "appointments",
    icon: GoReport,
  },
  {
    name: "Appointment History",
    link: "appointmentHistory",
    icon: GoHistory,
  },
  {
    name: "Test Report",
    link: "testReport",
    icon: BiHistory,
  },
];

export default navLinks;
