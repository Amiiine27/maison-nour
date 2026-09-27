export interface OptionParts {
  label: string;
  prix: number;
  aPartirDe?: boolean;
}

export interface OptionParfum {
  label: string;
  supplement: number;
}

export const tarifs: {
  parts: OptionParts[];
  parfums: OptionParfum[];
  inscription: number;
} = {
  parts: [
    { label: "6 parts", prix: 35 },
    { label: "8 parts", prix: 45 },
    { label: "10 parts", prix: 55 },
    { label: "12 parts", prix: 65 },
    { label: "15 parts", prix: 80 },
    { label: "20 parts et plus", prix: 100, aPartirDe: true },
  ],
  parfums: [
    { label: "Vanille-framboise", supplement: 0 },
    { label: "Chocolat", supplement: 0 },
    { label: "Pistache-fleur d'oranger", supplement: 5 },
    { label: "Citron", supplement: 0 },
    { label: "Miel & amandes", supplement: 5 },
  ],
  inscription: 3,
};