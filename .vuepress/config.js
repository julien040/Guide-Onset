// THIS IS FILE IS OPTIONAL, you can delete it if you don't want to use it

// config.js is the entry file for your VuePress app configuration
// It can also be written in yml or toml instead of js
// See the documentation for more information on how to use it
// https://v1.vuepress.vuejs.org/config/

module.exports = {
  title: "Onset guide ",
  description: "An Onset guide for who wants some informations",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Tutorials", link: "/guide/" },
      { text: "Guide", link: "/guide/" },
      { text: "Onset's website", link: "https://playonset.com/" },
      {
        text: "Languages",
        ariaLabel: "Language Menu",
        items: [
          { text: "English", link: "/" },
          { text: "Français", link: "/fr/" }
        ]
      },
      { text: "Lakoya", link: "https://lakoya-rp.fr" }
    ],
    sidebar: [
      {
        title: "Setup Framework", // required
        path: "/framework/setup/", // optional, which should be a absolute path.
        collapsable: true, // optional, defaults to true
        sidebarDepth: 2, // optional, defaults to 1
        children: ["/"]
      },
      {
        title: "Tutorials", // required
        path: "/guide/", // optional, which should be a absolute path.
        collapsable: true, // optional, defaults to true
        sidebarDepth: 2, // optional, defaults to 1
        children: ["/"]
      },
      {
        title: "Use Framework", // required
        path: "/framework/", // optional, which should be a absolute path.
        collapsable: true, // optional, defaults to true
        sidebarDepth: 2, // optional, defaults to 1
        children: ["/"]
      }
    ]
  },
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "en-US", // this will be set as the lang attribute on <html>
      title: "Onset guide ",
      description: "An Onset guide for who wants some informations"
    },
    "/fr/": {
      lang: "fr-FR",
      title: "Guide d'Onset",
      description:
        "Un guide pour ceux qui souhaitent avoir plus d'infos sur le jeu"
    }
  }
};
