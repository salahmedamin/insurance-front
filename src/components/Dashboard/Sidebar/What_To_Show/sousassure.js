export const sousassure = [
  {
    mapped: [],
    title: "Home",
    to: "/dashboard",
  },
  {
    mapped: [],
    title: "Generate Bulletin",
    to: "/dashboard/add/bulletin/",
  },
  {
    mapped: [
      {
        to: "/dashboard/view/bulletins/",
        text: "All",
      },
      {
        to: "/dashboard/view/bulletins/accepted",
        text: "Accepted",
      },
      {
        to: "/dashboard/view/bulletins/pending",
        text: "Pending",
      },
      {
        to: "/dashboard/view/bulletins/rejected",
        text: "Rejected",
      },
    ],
    title: "Bulletins",
  },
  {
    mapped: [],
    title: "Medical Acts",
    to: "/dashboard/view/medical-acts",
  },
];
