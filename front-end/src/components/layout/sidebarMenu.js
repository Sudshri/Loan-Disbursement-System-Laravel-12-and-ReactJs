export const sidebarMenu = [
  {
    label: "Dashboard",
    icon: "feather-airplay",
    to: "/admin/dashboard",
    roles: ["SUPER_ADMIN", "AGENT"], // visible for both
  },
  {
    label: "Agent",
    icon: "feather-cast",
    roles: ["SUPER_ADMIN"], // sirf super admin
    children: [
      {
        label: "Create Agent",
        to: "/admin/agent/create",
      },
      {
        label: "Agent List",
        to: "/admin/agent/list",
      },
    ],
  },
  {
    label: "Applications",
    icon: "feather-send",
    roles: ["SUPER_ADMIN", "AGENT"],
    children: [
      { label: "Chat", to: "/admin/apps/chat" },
      { label: "Email", to: "/admin/apps/email" },
    ],
  },
];
