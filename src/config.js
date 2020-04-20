export const sideBarMenu = {
  title: "Menu",
  items: [
    {
      type: "link",
      to: "/",
      contentText: "Home",
    },

    {
      type: "link",
      to: "/posts",
      contentText: "Posts",
    },
    {
      type: "link",
      to: "/categories",
      contentText: "Categories",
    },

    {
      type: "submenu",
      contentText: "Pages",
      items: [
        {
          type: "link",
          to: "/login",
          contentText: "Login",
        },
        {
          type: "link",
          to: "/register",
          contentText: "Register",
        },
      ],
    },
  ],
};
