import fetchJsonData from 'json-feed-fetcher'
import { sanitizeVessels } from './json-vessel-sanitizer'

const vesselSchema = {
  mmsi: { type: 'string', required: true },
  name: { type: 'string', required: true },
  rs: { type: 'string', required: true },
  state: { type: 'string', required: true },
  station: { type: 'string', required: true }
}
const aisDataSchema = {
  mmsi: { type: 'string', required: true },
  latitude: { type: 'string', required: true },
  longitude: { type: 'string', required: true },
  decimal_latitude: { type: 'string', required: true },
  decimal_longitude: { type: 'string', required: true },
  time_stamp: { type: 'string', required: true },
  sog: { type: 'string', required: false },
  cog: { type: 'string', required: false }
}

export default () => {
  return fetchVessels().then(vessels => {
    vessels = sanitizeVessels(vessels)
    return fetchAisData().then(aisData => {
      return mix(vessels, aisData)
    })
  })
}

const fetchVessels = () => {
  return fetchJsonData('http://localhost:3000/api/get_vessel/*', vesselSchema)
}

const fetchAisData = () => {
  return fetchJsonData('http://ais.rs.no/aktive_pos.json', aisDataSchema)
}

const mix = (arr1, arr2) => {
  const arr = []
  arr1.map(obj1 => {
    arr2.map(obj2 => {
      if (obj2.mmsi === obj1.mmsi) {
        arr.push({ ...obj1, ...obj2 })
      }
    })
  })
  console.log('MIXED RESULT', arr)
  return arr
}
