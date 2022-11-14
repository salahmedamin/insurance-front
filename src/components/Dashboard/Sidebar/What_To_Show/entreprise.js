export const entreprise = [
  {
    mapped: [],
    title: "Home",
    to: "/dashboard",
  },

  {
    to: "/dashboard/add/contract/",
    title: "New Contract",
    mapped: [],
  },
  {
    title: "Contracts",
    mapped: [
      {
        to: "/dashboard/view/contracts/",
        text: "All",
      },
      {
        to: "/dashboard/view/contracts/active",
        text: "Active",
      },
      {
        to: "/dashboard/view/contracts/expired",
        text: "Expired",
      },
    ],
  },
  {
    title: "Employees",
    to: "/dashboard/view/employees/",
    state: {
      random: Math.ceil(Math.random() * Math.random() * 100000),
    },
    mapped: [],
  },
];
