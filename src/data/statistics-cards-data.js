import {
  BanknotesIcon,
  UserPlusIcon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "gray",
    icon: BanknotesIcon,
    title: "Fees to paid",
    value: "₹53k",
    footer: {
      color: "text-green-500",
      value: "₹1L",
      label: "Total fees",
    },
  },
  {
    color: "gray",
    icon: UsersIcon,
    title: "Class Strength",
    value: "66",
    footer: {
      color: "text-green-500",
      value: "Overall 93% present",
      label: "than last month",
    },
  },
  {
    color: "gray",
    icon: UserPlusIcon,
    title: "Project Team",
    value: "4 Members",
    footer: {
      color: "text-blue-500",
      value: "69%",
      label: "Project performance",
    },
  },
  {
    color: "gray",
    icon: ChartBarIcon,
    title: "Academic Performance",
    value: "A+",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than last year",
    },
  },
];

export default statisticsCardsData;