function importAll(r, names) {
  let images = [];
  r.keys().forEach((item, index) => {
    images.push({
      img: r(item),
      img_name: names[index],
    });
  });
  return images;
}

const names = [
  "Brochette de volaille",
  "Symphonie Pecheur",
  "Crepe Nutella",
  "Symphonie Pecheur",
  "Crepe Nutella",
  "Riz au poulet",
  "Riz au poulet",
  "Emince de poulet",
  "Emince de poulet",
  "Brochette de volaille",
  "Crepe Nutella",
  "Brochette de volaille",
  "Cigar de Crepe",
  "Paella Italienne",
  "Escalope sauce champignion",
  "Escalope sauce champignion",
  "Sheesekake",
];

export const images = importAll(
  require.context("./assets/images", false, /\.(jpg)$/),
  names
);
