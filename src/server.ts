import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("123123Hello World!123");
});

app.listen(port, () => console.log(`123Express is listening at http://localhost:${port}`));

// App.listen(port, () => {
//   Return console.log(`123Express is listening at http://localhost:${port}`);
// });

//some comment
function doSomething(bar: number): number {
  //const foo: number = 3 + 4 + bar + 2;
  return (foo = bar + 3);
}

doSomething(2);
// "arrowParens": "always",
// "semi": true,
