import fetchJsonData from 'json-feed-fetcher'
import { sanitizeVessels } from './json-vessel-sanitizer'

const vesselSchema = {
  required: true,
  type: 'object',
  properties: {
    mmsi: {type: 'string', required: true},
    name: {type: 'string', required: true},
    rs: {type: 'string', required: true},
    state: {type: 'string', required: true},
    email: {type: 'string', required: true},
    mobile: {type: 'string', required: true},
    station: {
      required: true,
      type: 'object',
      properties: {
        name: {type: 'string', required: true},
        region: {type: 'string', required: true}
      },
      additionalProperties: false
    }
  },
  additionalProperties: false
}

const aisDataSchema = {
  required: true,
  type: 'object',
  properties: {
    mmsi: { type: 'string', required: true },
    latitude: { type: 'string', required: true },
    longitude: { type: 'string', required: true },
    decimal_latitude: { type: 'string', required: true },
    decimal_longitude: { type: 'string', required: true },
    time_stamp: { type: 'string', required: true },
    sog: { type: 'string', required: false },
    cog: { type: 'string', required: false }
  },
  additionalProperties: false
}

export default () => {
  return fetchVessels().then(vessels => {
    vessels = sanitizeVessels(vessels)
    return fetchAisData().then(aisData => {
      return mixAisData(vessels, aisData)
    })
  })
}

const fetchVessels = () => {
  return fetchJsonData(process.env.API_URL + '/api/get_vessel/*', vesselSchema)
}

const fetchAisData = () => {
  return fetchJsonData(process.env.AIS_URL, aisDataSchema)
}

// eslint-disable-next-line no-unused-vars
const mixAisData = (vessels, aisDataObjects) => {
  vessels.map(vessel => {
    vessel.ais_data = {}
    aisDataObjects.map(aisData => {
      if (vessel.mmsi === aisData.mmsi) {
        delete aisData.mmsi
        vessel.ais_data = {...vessel.ais_data, ...aisData}
      }
    })
  })
  console.log('MIX', vessels)
  return vessels
}

// Not in use
// eslint-disable-next-line no-unused-vars
const mix1 = (arr1, arr2) => {
  const arr = []
  arr1.map(obj1 => {
    arr2.map(obj2 => {
      if (obj2.mmsi === obj1.mmsi) {
        arr.push({ ...obj1, ...obj2 })
      }
    })
  })
  return arr
}
