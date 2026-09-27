import { tarifs } from "./tarifs";

export const produits = [
  { titre: "Paris-Brest pistache", prix: "5,50 €", description: "Pâte à choux croustillante et crème pralinée à la pistache.", image: "/images/paris-brest.jpg", vedette: true },
  { titre: "Tarte citron-fleur d'oranger", prix: "5 €", description: "Crème citron acidulée parfumée à la fleur d'oranger.", image: "/images/tarte-citron.jpg", vedette: false },
  { titre: "Millefeuille vanille", prix: "5,20 €", description: "Feuilletage caramélisé et crème légère à la vanille.", image: "/images/millefeuille.jpg", vedette: false },
  { titre: "Cornes de gazelle (les 6)", prix: "8 €", description: "Pâte d'amande et fleur d'oranger dans une pâte fine.", image: "/images/cornes-gazelle.jpg", vedette: true },
  { titre: "Makrout au miel (les 6)", prix: "7 €", description: "Semoule, dattes et miel, dorés au four.", image: "/images/makrout.jpg", vedette: false },
  { titre: "Baklava assortis (les 8)", prix: "9 €", description: "Pâte filo, fruits secs et sirop de miel.", image: "/images/baklava.jpg", vedette: true },
  { titre: "Gâteau d'anniversaire", prix: `dès ${tarifs.parts[0].prix} €`, description: "Sur commande, à partir de 6 personnes.", image: "/images/gateau-anniversaire.jpg", vedette: false, lien: "/commande" }
];

export const accompagnements = [
  { titre: "Thé à la menthe", prix: "3 €", description: "Thé vert à la menthe fraîche, servi à l'orientale.", image: "/images/the-menthe.jpg", vedette: false },
  { titre: "Café / Café au lait", prix: "2 € / 3,50 €", description: "Pour accompagner votre pâtisserie.", image: "/images/cafe.jpg", vedette: false },
];