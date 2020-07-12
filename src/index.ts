import dotenv from "dotenv"
import express from "express"
import bodyparser from "body-parser"
import asyncHandler from "express-async-handler"
import { getGroups } from "./lib/getGroups"

async function main() {
  const app = express()

  app.use(bodyparser.json())

  app.get('/groups', asyncHandler(async (req, res, next) => {
    const groups = await getGroups(1)
    res.json(groups)
    next()
  }))

  app.listen(8080)
}

main()
  .catch(err => console.log(err))