import { Group } from "./types";
import axios from 'axios'

interface APIGetGroups {
  groups: { group: Group }
  total_pages: number
}

export function getGroups(page?: number): Promise<{ groups: Group[], total_pages: number }> {
  return new Promise((resolve, reject) => {
    console.log(`https://${process.env.SUBDOMAIN}.ezrentout.com/assets/classification_view.api?show_document_details=true&page=${page ? page : 1}&access_token=${process.env.SECRET_KEY}`)
    axios.get(`https://${process.env.SUBDOMAIN}.ezrentout.com/assets/classification_view.api?show_document_details=true&page=${page ? page : 1}&access_token=${process.env.SECRET_KEY}`, {
      headers: {
        
      }
    })
      .then(res => {
        console.log(res.data)
        if (!res.data || !res.data.groups) 
          reject('API returned no data')
        else
          resolve({ total_pages: res.data.total_pages, groups: res.data.groups.map((item: { group: Group}) => item.group)})
      })
      .catch(err => reject(err))
  })
}