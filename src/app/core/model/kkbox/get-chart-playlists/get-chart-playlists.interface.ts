export interface GetChartPlaylistsResponse {
  data: Datum[]
  paging: Paging
  summary: Summary
}

export interface Datum {
  id: string
  title: string
  description: string
  url: string
  images: Image[]
  updated_at: Date
  owner: Owner
}

export interface Image {
  height: number
  width: number
  url: string
}

export interface Owner {
  id: ID
  url: string
  name: Name
  description: string
  images: Image[]
}

export enum ID {
  TYMdq3Gnf6AVbuqgt = 'T-YMdq3gnf6AVbuqgt',
  The5XIttVqe0FoATcIFMp = '5XIttVqe0foATcIFMp',
}

export enum Name {
  Kkbox = 'KKBOX',
  Kkbox西洋小編 = 'KKBOX 西洋小編',
}

export interface Paging {
  offset: number
  limit: number
  previous: null
  next: null
}

export interface Summary {
  total: number
}

enum ETerritory {
  'HK' = 'HK',
  'JP' = 'JP',
  'MY' = 'MY',
  'SG' = 'SG',
  'TW' = 'TW',
}

type ETerritoryKeys = keyof typeof ETerritory

// HK, JP, MY, SG, TW
export interface GetChartPlaylistsRequest {
  /** 國家 */
  territory: ETerritoryKeys
  /** 從第幾筆開始 >=0 */
  offset?: number
  /** 限制筆數：>=1 and <= 50 */
  limit?: number
}
