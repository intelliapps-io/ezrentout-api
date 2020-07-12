import express from "express"
import bodyparser from "body-parser"

async function main() {
  const app = express()

  app.use(bodyparser.json())

  
}

main()
  .catch(err => console.log(err))