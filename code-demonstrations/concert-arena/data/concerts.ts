export type Concert = {
  id: string;
  name: string;
  date: string;
  venue: string;
  pricePerTicket: number;
};

export const concerts: Concert[] = [
  {
    id: "1",
    name: "Taylor Swift",
    date: "2025-06-12",
    venue: "Wembley Stadium, London",
    pricePerTicket: 15990,
  },
  {
    id: "2",
    name: "Billie Eilish",
    date: "2025-07-04",
    venue: "The O2 Arena, London",
    pricePerTicket: 12990,
  },
  {
    id: "3",
    name: "The Weeknd",
    date: "2025-07-19",
    venue: "Anfield Stadium, Liverpool",
    pricePerTicket: 14990,
  },
  {
    id: "4",
    name: "Dua Lipa",
    date: "2025-08-02",
    venue: "Co-op Live, Manchester",
    pricePerTicket: 11990,
  },
  {
    id: "5",
    name: "Arctic Monkeys",
    date: "2025-08-23",
    venue: "Utilita Arena, Sheffield",
    pricePerTicket: 13990,
  },
];
