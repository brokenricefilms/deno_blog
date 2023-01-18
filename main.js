import blog, { ga, redirects } from "https://deno.land/x/blog/blog.tsx";

blog({
  author: "Thuan Pham",
  title: "Thuan Pham",
  description: "Yo! I was born on Nov 23, 2001 in Ho Chi Minh City and in the process of making the internet more beautiful and blazingly fast.",
  avatar: "profile_picture.png",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:thuanowa@gmail.com" },
    { title: "GitHub", url: "https://github.com/thuanOwa" },
    { title: "link in bio/ links", url: "https://bio.link/thuanOwa" },
  ],
  dateFormat: (date) =>
    new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(date),
  lang: "en",
  middlewares: [ga("G-4V1R393JHN"), redirects({})],
});
