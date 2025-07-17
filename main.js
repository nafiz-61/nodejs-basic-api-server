// URL Module / events Module / http

const { log } = require("console");
const http = require("http");
const url = require("url");
const myUrl = "https://dummyjson.com/test";

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);
  if (pathname == "/photos") {
    res.end(
      JSON.stringify([
        {
          albumId: 1,
          id: 1,
          title: "accusamus beatae ad facilis cum similique qui sunt",
          url: "https://via.placeholder.com/600/92c952",
          thumbnailUrl: "https://via.placeholder.com/150/92c952",
        },
        {
          albumId: 1,
          id: 2,
          title: "reprehenderit est deserunt velit ipsam",
          url: "https://via.placeholder.com/600/771796",
          thumbnailUrl: "https://via.placeholder.com/150/771796",
        },
        {
          albumId: 1,
          id: 3,
          title: "officia porro iure quia iusto qui ipsa ut modi",
          url: "https://via.placeholder.com/600/24f355",
          thumbnailUrl: "https://via.placeholder.com/150/24f355",
        },
        {
          albumId: 1,
          id: 4,
          title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
          url: "https://via.placeholder.com/600/d32776",
          thumbnailUrl: "https://via.placeholder.com/150/d32776",
        },
        {
          albumId: 1,
          id: 5,
          title: "natus nisi omnis corporis facere molestiae rerum in",
          url: "https://via.placeholder.com/600/f66b97",
          thumbnailUrl: "https://via.placeholder.com/150/f66b97",
        },
        {
          albumId: 1,
          id: 6,
          title: "accusamus ea aliquid et amet sequi nemo",
          url: "https://via.placeholder.com/600/56a8c2",
          thumbnailUrl: "https://via.placeholder.com/150/56a8c2",
        },
      ])
    );
  }
  if (pathname == "/users") {
    res.end(
      JSON.stringify([
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
              lat: "-37.3159",
              lng: "81.1496",
            },
          },
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
          },
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
              lat: "-43.9509",
              lng: "-34.4618",
            },
          },
          phone: "010-692-6593 x09125",
          website: "anastasia.net",
          company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains",
          },
        },
      ])
    );
  }
  if (pathname == "/todos") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end(
      JSON.stringify([
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false,
        },
        {
          userId: 1,
          id: 3,
          title: "fugiat veniam minus",
          completed: false,
        },
      ])
    );
  } else {
    res.end("Not Found");
  }
});

server.listen(4000, () => {
  log(`surver running on http://localhost:4000`);
});
