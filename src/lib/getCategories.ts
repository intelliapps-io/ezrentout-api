import { Group, SubGroup } from "./types";
import axios from 'axios'
import { getGroups } from "./getGroups";
import { getSubGroups } from "./getSubGroups";
import { group } from "console";

interface Category extends Group {
  subgroups: SubGroup[]
}

export async function getCategories(): Promise<Category[]> {
  let categories: Category[] = []
  const groups = await getGroups(), subgroups = await getSubGroups()

  groups.groups.forEach((group) => {
    const { id, name, company_id } = group
    const filteredSubgroups = subgroups.filter(({ group_id }) => group_id === id)
    categories.push({...group, subgroups: filteredSubgroups })
  })

  return categories
}