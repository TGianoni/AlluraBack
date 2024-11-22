import express from "express";
import routes from "./src/routes/postsRoutes.js";

const posts = [
  {
    id: 1,
    descricao: "Uma foto teste",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    descricao: "Gato dormindo",
    imagem: "https://placekitten.com/200/300",
  },
  {
    id: 3,
    descricao: "Paisagem bonita",
    imagem: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    descricao: "Cachorro brincando",
    imagem: "https://placeimg.com/200/300/animals",
  },
  {
    id: 5,
    descricao: "Comida deliciosa",
    imagem: "https://loremflickr.com/200/300/food",
  },
  {
    id: 6,
    descricao: "Citação inspiradora",
    imagem: "https://source.unsplash.com/random/200x300",
  },
  {
    id: 7,
    descricao: "Arte abstrata",
    imagem: "https://picsum.photos/seed/picsum/200/300",
  },
];

const app = express();
app.use(express.static("uploads"));
routes(app);

app.listen(3000, () => {
  console.log("servidor escutando");
});

/*
function buscarPostPorId(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorId(req.params.id);
  res.status(200).json(posts[index]);
});
*/
