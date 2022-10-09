import blog, { ga } from "https://deno.land/x/blog@0.5.0/blog.tsx";

blog({
  author: "Thuan Pham",
  title: "Thuan Pham",
  description: "Random nerd (Front-end Developer/Creator)",
  avatar: "avata.jpeg",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:phamtanthuan2311@gmail.com" },
    { title: "GitHub", url: "https://github.com/thuanpham2311" },
    { title: "Links", url: "https://bio.link/thuanpham2311" },
  ],
  lang: "en",
  dateStyle: "long",
  middlewares: [ga("G-4V1R393JHN")],
});
