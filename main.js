import blog, { ga } from "https://deno.land/x/blog/blog.tsx";

blog({
  author: "Thuan Pham",
  title: "Thuan Pham",
  description: "Random nerd (Front-end Developer/Creator)",
  avatar: "avata.jpeg",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:phamtanthuan2311@gmail.com" },
    { title: "GitHub", url: "https://github.com/thuanOwa" },
    { title: "Links", url: "https://bio.link/thuanOwa" },
  ],
  dateFormat: (date) =>
    new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(date),
  lang: "en",
  middlewares: [ga("G-4V1R393JHN")],
});
