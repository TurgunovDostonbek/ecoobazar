//  /// ............................ PopularCategories ............................ ///
//  ///............................. images ..........................................///
import freshFruit from "../src/assets/img/Categories/image 1.png";
import freshVegetables from "../src/assets/img/Categories/image 1 (1).png";
import meatFish from "../src/assets/img/Categories/image 1 (2).png";
import snacks from "../src/assets/img/Categories/image 1 (3).png";
import beverages from "../src/assets/img/Categories/image 1 (4).png";
import beautyHealth from "../src/assets/img/Categories/image 1 (5).png";
import breadBakery from "../src/assets/img/Categories/image 1 (6).png";
import bakingNeeds from "../src/assets/img/Categories/image 1 (7).png";
import cooking from "../src/assets/img/Categories/image 1 (8).png";
import diabeticFood from "../src/assets/img/Categories/image 1 (9).png";
import dishDetergents from "../src/assets/img/Categories/image 1 (10).png";
import oil from "../src/assets/img/Categories/image 1 (10).png";

export const popularCategories = [
  { id: 1, name: "Fresh Fruit", image: [freshFruit] },
  { id: 2, name: "Fresh Vegetables", image: [freshVegetables] },
  { id: 3, name: "Meat & Fish", image: [meatFish] },
  { id: 4, name: "Snacks", image: [snacks] },
  { id: 5, name: "Beverages", image: [beverages] },
  { id: 6, name: "Beauty & Health", image: [beautyHealth] },
  { id: 7, name: "Bread & Bakery", image: [breadBakery] },
  { id: 8, name: "Baking Needs", image: [bakingNeeds] },
  { id: 9, name: "Cooking", image: [cooking] },
  { id: 10, name: "Diabetic Food", image: [diabeticFood] },
  { id: 11, name: "Dish Detergents", image: [dishDetergents] },
  { id: 12, name: "Oil", image: [oil] },
];

//  /// ............................ PopularProduct ....................... ///
// /// ............................. images ............................... ///
import greenApple from "../src/assets/img/Product/Image (16).png";
import freshIndianMalta from "../src/assets/img/Product/Image (17).png";
import chineseCabbage from "../src/assets/img/Product/Image (18).png";
import greenLettuce from "../src/assets/img/Product/Image (19).png";
import eggplant from "../src/assets/img/Product/Image (20).png";
import bigPotatoes from "../src/assets/img/Product/Image (21).png";
import corn from "../src/assets/img/Product/Image (22).png";
import freshCauliflower from "../src/assets/img/Product/Image (23).png";
import greenCapsicum from "../src/assets/img/Product/Image (24).png";
import greenChili from "../src/assets/img/Product/Image (25).png";

export const popularProducts = [
  {
    id: 1,
    name: "Green Apple",
    price: "20.99",
    discountedPrice: 14.99,
    image: [greenApple],
    rating: 4.5,
  },
  {
    id: 2,
    name: "Fresh Indian Malta",
    price: "20.00",
    discountedPrice: null,
    image: [freshIndianMalta],
    rating: 4.0,
  },
  {
    id: 3,
    name: "Chinese Cabbage",
    price: "12.00",
    discountedPrice: null,
    image: [chineseCabbage],
    rating: 4.0,
  },
  {
    id: 4,
    name: "Green Lettuce",
    price: "9.00",
    discountedPrice: null,
    image: [greenLettuce],
    rating: 4.0,
  },
  {
    id: 5,
    name: "Eggplant",
    price: "34.00",
    discountedPrice: null,
    image: [eggplant],
    rating: 4.5,
  },
  {
    id: 6,
    name: "Big Potatoes",
    price: "20.00",
    discountedPrice: null,
    image: [bigPotatoes],
    rating: 4.0,
  },
  {
    id: 7,
    name: "Corn",
    price: "20.00",
    discountedPrice: null,
    image: [corn],
    rating: 4.0,
  },
  {
    id: 8,
    name: "Fresh Cauliflower",
    price: "12.00",
    discountedPrice: null,
    image: [freshCauliflower],
    rating: 4.0,
  },
  {
    id: 9,
    name: "Green Capsicum",
    price: "20.990",
    discountedPrice: 9.0,
    image: [greenCapsicum],
    rating: 4.0,
  },
  {
    id: 10,
    name: "Green Chili",
    price: "34.00",
    discountedPrice: null,
    image: [greenChili],
    rating: 4.5,
  },
];
