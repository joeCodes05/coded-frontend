import { BlogObjectStructure } from "../types/object_types";
import PostImageOne from "../assets/images/post_img_1.jpg";
import PostImageTwo from "../assets/images/post_img_2.jpg";
import PostImageThree from "../assets/images/post_img_3.jpg";

export const blogPostData: BlogObjectStructure[] = [
  {
    title: "Easy & most powerful server platform",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    postCategory: "Technology",
    postAuthor: "John Doe",
    postImage: PostImageOne,
    postDate: "2021-01-01",
  },

  {
    title: "Becoming a software developer in 2024?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    postCategory: "Technology",
    postAuthor: "Nathaniel Joseph",
    postImage: PostImageTwo,
    postDate: "2021-01-01",
  },
  {
    title: "Best and fast ways to travel today!",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    postCategory: "Travel",
    postAuthor: "John Ojo",
    postImage: PostImageThree,
    postDate: "2021-01-01",
  },
];
