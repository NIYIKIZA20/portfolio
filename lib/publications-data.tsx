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
    authors: ["Jean Baptiste N."], // Assuming the user is the author, adjust as needed
    journal: "Proceedings of the 14th International Electronic Conference on Sensors and Applications",
    year: 2023,
    url: "https://sciforum.net/paper/view/17629",
    abstract: "This paper presents an innovative approach to monitoring bio-waste levels in home water systems using optical sensors. The research focuses on developing cost-effective, real-time monitoring solutions for ensuring water safety in residential environments.",
    keywords: ["optical sensors", "water safety", "bio-waste monitoring", "home automation"]
  }
];