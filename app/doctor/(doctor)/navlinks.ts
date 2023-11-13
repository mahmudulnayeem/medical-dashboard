import { BiHistory } from "react-icons/bi";
import { GoReport } from "react-icons/go";
import { MdConnectWithoutContact } from "react-icons/md";

const navLinks = [
  {
    name: "Appointments",
    link: "appointments",
    icon: MdConnectWithoutContact,
  },
  {
    name: "History",
    link: "history",
    icon: BiHistory,
  },
  {
    name: "Patients Report",
    link: "patientReport",
    icon: GoReport,
  },
];

export default navLinks;
