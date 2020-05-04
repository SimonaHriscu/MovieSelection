const movies = [
  {
    id: 1,
    title: "Friends",
    description:
      "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
    image: "./img/photo1.jpg",
  },
  {
    id: 2,
    title: "O Brother, Where Art Thou?",
    description:
      "In the deep south during the 1930s, three escaped convicts search for hidden treasure while a relentless lawman pursues them.",
    image: "./img/photo2.jpg",
  },
  {
    id: 3,
    title: "Tais-toi!",
    description:
      "One prisoner tells to another that he hid a very large amount of money before the arrest. Together they manage to escape, but this is where their adventures are just beginning.",
    image: "./img/photo3.jpg",
  },
  {
    id: 4,
    title: "How to Steal a Million",
    description:
      "A woman who must steal a statue from a Paris museum to help conceal her father's art forgeries is assisted by a man.",
    image: "../img/photo4.jpg",
  },
  {
    id: 5,
    title: "Woman in Gold",
    description:
      "Maria Altmann, an octogenarian Jewish refugee, takes on the Austrian government to recover artwork she believes rightfully belongs to her family.",
    image: "../img/photo5.jpg",
  },
];

let data = JSON.stringify(movies);
export { data };
