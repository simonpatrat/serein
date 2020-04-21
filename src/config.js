export const site = {
  name: "Serein",
};

export const sideBarMenu = {
  title: "Menu",
  items: [
    {
      type: "link",
      to: "/",
      contentText: "Home",
      iconName: "igloo",
    },

    {
      type: "link",
      to: "/posts",
      contentText: "Posts",
      iconName: "th-list",
    },
    {
      type: "link",
      to: "/categories",
      contentText: "Categories",
      iconName: "list",
    },

    {
      type: "submenu",
      contentText: "Pages",
      iconName: "sticky-note",
      items: [
        {
          type: "link",
          to: "/login",
          contentText: "Login",
          iconName: "user-lock",
        },
        {
          type: "link",
          to: "/register",
          contentText: "Register",
          iconName: "user-plus",
        },
      ],
    },
  ],
};
