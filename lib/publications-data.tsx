export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi?: string;
  url: string;
  abstract?: string;
  keywords?: string[];
}

export const publications: Publication[] = [
  {
    id: "1",
    title: "Optical Sensor-based Assessment of bio-waste Levels for Home Water Safety Monitoring",
    authors: ["J. Gabriel", "F. Ingabire", "J.B. Niyikiza", "J.P. Ndabakuranye"],
    journal: "Proceedings of the 4th International Electronic Conference on Biosensors, MDPI",
    year: 2024,
    url: "https://sciforum.net/paper/view/17629",
    abstract: "This paper presents an innovative approach to monitoring bio-waste levels in home water systems using optical sensors. The research focuses on developing cost-effective, real-time monitoring solutions for ensuring water safety in residential environments.",
    keywords: ["optical sensors", "water safety", "bio-waste monitoring", "home automation"]
  }
];