const express = require('express')
const app = express()
const port = 3000
const data = require("./data.json");

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/pokemons', (req, res) => {
    const data = require("./data.json");
    res.json(data);
  })

app.get('/pokemons/:name', (req, res) => {
    const pokemonName=req.params.name;
    const pokemon = data.find((pokemon) => pokemon.name.toLowerCase() === pokemonName.toLowerCase());

    if (!pokemon) {
        res.status(404);
        res.send(`NOT FOUND`);
    }

    res.json(pokemon);
    //res.send(`FOUND - id: ${pokemon.id}, name: ${pokemon.name}, types: ${pokemon.types.join(",")}`);
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})