import { PricingPlansStructure } from "../types/object_types";

export const pricingPlans: PricingPlansStructure[] = [
  {
    price: 49,
    plan: "Free",
    plansAddOns: ["On-page SEO", "Off-page SEO", "Technical SEO"],
  },

  {
    price: 100,
    plan: "Professional",
    plansAddOns: [
      "Mobile Development",
      "Webstie Development",
      "Desktop Development",
      "Responsive Design",
    ],
  },

  {
    price: 150,
    plan: "Company",
    plansAddOns: [
      "Cloud Computing",
      "Devops Development",
      "User Authentication",
      "Restful API",
    ],
  },
];
