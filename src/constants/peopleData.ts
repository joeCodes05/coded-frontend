import ProfileImage1 from "../assets/images/dominus_kelvin.jpg";
import ProfileImage2 from "../assets/images/anyabisi.jpg";
import ProfileImage3 from "../assets/images/devTobs.jpg";
import ProfileImage4 from "../assets/images/dave_herbart.jpg";
import ProfileImage5 from "../assets/images/geeky_nath.jpg";
import ProfileImage6 from "../assets/images/ivan.jpg";

interface People {
  userName: string;
  name: string;
  image: string;
}

export const peopleData: People[] = [
  {
    userName: "Dominus_kelvin",
    name: "K.O.O",
    image: ProfileImage1,
  },

  {
    userName: "AJ_Ayanbisi",
    name: "Akorede J. Ayanbisi",
    image: ProfileImage2,
  },

  {
    userName: "DevTobs",
    name: "Dev.tobs🇳🇬🏴󠁧󠁢󠁥󠁮󠁧󠁿|MDsc. EMCDs.",
    image: ProfileImage3,
  },
  {
    userName: "DaveyHert",
    name: "David Herbert👨🏽‍💻🚀",
    image: ProfileImage4,
  },
  {
    userName: "nathanCodes05",
    name: "geeky_nath",
    image: ProfileImage5,
  },
  {
    userName: "iximiuz",
    name: "Ivan Velichko",
    image: ProfileImage6,
  },
];
