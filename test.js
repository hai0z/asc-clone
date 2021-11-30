const data = [
  {
    id: "1",
    name: "1 (2019 - 2020)",
    expand: false,
    sub: [
      {
        id: "000585",
        name: "Toán",
        tc: 2,
        mark: 6.8,
        all: [
          {
            id: Math.floor(Math.random() * 1000),
            expand: false,
            tl: "--",
            tk: "--",
            th: 9.4,
            dt: 9.0,
            dc: "A",
            xl: "Giỏi",
          },
        ],
      },
    ],
  },
];

const [sub] = data;

console.log(sub);
