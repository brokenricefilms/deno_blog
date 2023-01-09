import blog, { ga } from "https://deno.land/x/blog@0.5.0/blog.tsx";

blog({
  author: "Thuan Pham",
  title: "Thuan Pham",
  description: "thuanowa blog, thuanowa, front-end dev",
  avatar: "profile_picture.png",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:thuanowa@gmail.com" },
    { title: "GitHub", url: "https://github.com/thuanOwa" },
    { title: "Links", url: "https://bio.link/thuanOwa" },
  ],
  dateFormat: (date) =>
    new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(date),
  lang: "en",
  middlewares: [ga("G-4V1R393JHN")],
});
