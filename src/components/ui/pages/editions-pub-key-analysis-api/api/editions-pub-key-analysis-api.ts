import { instance } from '@/api'

export const editionsPubKeyAnalysisApi = {
  getBarChartData(queryString: any) {
    return instance.get(`sources?filter=${queryString}`)
  },
  getData(iso: string, type: string) {
    return instance.get(`sources?filter=country_code:${iso},type:${type}`)
  },
  getPieChartData(queryString: any) {
    return instance.get(`sources?filter=${queryString}&group_by=type`)
  },
  getTreeMapData(queryString: any) {
    console.log(queryString)

    return instance.get(`sources?filter=x_concepts.id:C41008148,type:journal&group_by=continent`)
  },

  //   getPieChartData(iso?: string, id?: string, publisher?: string) {
  //     return instance.get(`sources?filter=x_concepts.id:${id},country_code:s${iso},display_name.search:${publisher}&group_by=type
  // `)
  //   },
}
//filter: string, filterValue: string, iso: string
//sources?filter=x_concepts.id:C41008148&group_by=type
//x_concepts.id:
//C41008148
//https://api.openalex.org/sources?filter=country_code:BY,display_name.search:Belarusian National Technical University&group_by=type

//https://api.openalex.org/sources?filter=country_code:US,display_name.search:harvard%20university&group_by=type
