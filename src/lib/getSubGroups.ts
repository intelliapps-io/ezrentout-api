import { Group, SubGroup } from "./types";
import axios from 'axios'

interface APIGetSubGroups {
  groups: { group: Group }
  total_pages: number
}

export function getSubGroups(): Promise<SubGroup[]> {
  return new Promise((resolve, reject) => {
    axios.get(`https://${process.env.SUBDOMAIN}.ezrentout.com/groups/get_sub_groups.api?&token=${process.env.SECRET_KEY}`)
      .then(res => {
        console.log(res.data)
        if (!res.data || !res.data.sub_groups) 
          reject('API returned no data')
        else
          resolve(res.data.sub_groups)
      })
      .catch(err => reject(err))
  })
}