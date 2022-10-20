enum ETerritory {
  'HK' = 'HK',
  'JP' = 'JP',
  'MY' = 'MY',
  'SG' = 'SG',
  'TW' = 'TW',
}

type ETerritoryKeys = keyof typeof ETerritory

export interface GetANewHitsPlaylistRequest {
  playlist_id: string
  /** 國家 */
  territory: ETerritoryKeys
}

export interface GetANewHitsPlaylistResponse {
  tracks: Tracks
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
  id: string
  url: string
  name: string
  description?: string
  images: Image[]
}

export interface Tracks {
  data: Datum[]
  paging: Paging
  summary: Summary
}

export interface Datum {
  id: string
  name: string
  duration: number
  isrc: string
  url: string
  track_number: number
  explicitness: boolean
  available_territories: AvailableTerritory[]
  album: Album
}

export interface Album {
  id: string
  name: string
  url: string
  explicitness: boolean
  available_territories: AvailableTerritory[]
  release_date: Date
  images: Image[]
  artist: Owner
}

export enum AvailableTerritory {
  Hk = 'HK',
  Jp = 'JP',
  My = 'MY',
  Sg = 'SG',
  Tw = 'TW',
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
