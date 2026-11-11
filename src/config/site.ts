
export const siteConfig = {
  name: "Biznex",
  description:
    "Your Marketplace. Your Opportunity.",
  url: "http://localhost:3000",
  apiUrl:
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:4000/api/v1",

  navigation: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Products",
      href: "/products",
    },
    {
      label: "Categories",
      href: "/categories",
    },
  ],
};
