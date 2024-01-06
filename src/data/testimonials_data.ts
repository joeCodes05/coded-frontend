import { TestimonailsObjectStructure } from "../types/object_types";
import imageOne from "../assets/images/1.jpg";
import imageTwo from "../assets/images/2.jpg";
import imageThree from "../assets/images/3.jpg";
import imageFour from "../assets/images/4.jpg";
import imageFive from "../assets/images/5.jpg";
import imageSix from "../assets/images/6.jpg";

export const tesimonial_data: TestimonailsObjectStructure[] = [
  {
    name: "John Doe",
    occupation: "Software Developer",
    image: imageOne,
    content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
    rating: 5,
  },

  {
    name: "Kylie Jenner",
    occupation: "Product Designer",
    image: imageTwo,
    content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
    rating: 3,
  },

  {
    name: "Nathaniel Joseph",
    occupation: "Frontend Developer",
    image: imageThree,
    content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
    rating: 4,
  },

  {
    name: "Tamzyn French",
    occupation: "Data Scientist",
    image: imageFour,
    content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
    rating: 5,
  },

  {
    name: "Morgan Freeman",
    occupation: "Hollywood Actor",
    image: imageFive,
    content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
    rating: 5,
  },

  {
    name: "Tamzyn French",
    occupation: "Data Scientist",
    image: imageSix,
    content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
    rating: 5,
  },
];
