export const menus = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Profile",
      to: "/profile",
      children: [
        {
          label: "Details",
          to: "details",
          children: [
            {
              label: "Location",
              to: "location",
              children:{
                label:"City",
                to:"city",
              }
            },
            {
              label: "Settings",
              to: "settings",
            },
          ],
        },
      ],
    },
    {
      label: "Dashboard",
      to: "/dashboard",
      children: [
        {
          label: "Analytics",
          to: "analytics",
        },
        {
          label: "Reports",
          to: "reports",
        },
        {
          label: "Users",
          to: "users",
          children: [
            {
              label: "Admins",
              to: "admins",
            },
            {
              label: "Moderators",
              to: "moderators",
            },
          ],
        },
      ],
    },
    {
      label: "Settings",
      to: "/settings",
      children: [
        {
          label: "Account",
          to: "account",
        },
        {
          label: "Preferences",
          to: "preferences",
        },
        {
          label: "Security",
          to: "security",
        },
      ],
    },
    {
      label: "Help",
      to: "/help",
      children: [
        {
          label: "FAQ",
          to: "faq",
        },
        {
          label: "Contact Support",
          to: "support",
        },
      ],
    },
  ];
  export default menus