export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "612e81e25a99d121db3c930c",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-yvbmhkv4",
                  apiId: "166eec9b-761f-4dcd-8428-33bfaa8e4410",
                },
                {
                  buildHookId: "612e81e3e6ce2a1faf762bcb",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-x8iwgman",
                  apiId: "a616a45a-06ff-48f7-91c7-2be6da38164d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/aaronlee777/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-x8iwgman.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
