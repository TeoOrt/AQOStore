import type { Posts } from "$lib/types";

export const posts: Posts[] = [
  {
    slug: "carousel",
    title: "escape the ordinary",
    content: `
            <div class="flex justify-center ">
            <img src="https://aqo-balloon-gallery.s3.amazonaws.com/Escape.svg" alt="Intro" class="h-full 
            max-w-m
            lg:max-w-xl rounded-lg shadow-lg
            shadow-black/30 
            transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/40  
            lg:w-s
            "/>
          </div>
          `,
  },
  {
    slug: "gallery-title",
    title: "gallery-title",
    content: `
  <h1 class="flex justify-center mt-5 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Gallery</h1>`,
  },
];
