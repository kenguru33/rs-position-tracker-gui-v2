import fetchJsonData from 'json-feed-fetcher'

const vesselSchema = {
  required: true,
  type: 'object',
  properties: {
    name: {type: 'string', required: true},
    region: {type: 'string', required: true}
  },
  additionalProperties: false
}

const fetchStations = () => {
  return fetchJsonData(process.env.API_URL + '/api/get_station/*', vesselSchema)
}

export default fetchStations
