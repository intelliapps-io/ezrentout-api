require('dotenv').config()
import express from "express"
import bodyparser from "body-parser"
import asyncHandler from "express-async-handler"
import { getGroups } from "./lib/getGroups"
import { getSubGroups } from "./lib/getSubGroups"
import { getCategories } from "./lib/getCategories"


async function main() {
  const app = express()

  app.use(bodyparser.json())

  app.get('/groups', asyncHandler(async (req, res, next) => {
    const groups = await getGroups(1)
    res.json(groups)
    next()
  }))

  app.get('/subgroups', asyncHandler(async (req, res, next) => {
    const subgroups = await getSubGroups()
    res.json(subgroups)
    next()
  }))

  app.get('/categoires', asyncHandler(async (req, res, next) => {
    const categoires = await getCategories()
    res.json(categoires)
    next()
  }))

  app.listen(8080)
}

main()
  .catch(err => console.log(err))