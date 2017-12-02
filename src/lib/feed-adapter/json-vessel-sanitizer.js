import {vesselStates} from './vessel-states'

/**
 * returns true if a nine digit string
 * @param {string} mmsi
 */
export const isValidMMSI = mmsi => {
  return typeof mmsi === 'string' && mmsi.match(/^\d{9}$/)
}
/**
 * returns true if a string digit
 * @param {*} rs
 */
export const isValidRSNumber = rs => {
  return typeof rs === 'string' && rs.match(/^\d+$/)
}

/**
 * removes whitespace. return empty string if not string
 * @param {string} str
 */
export const removeWhiteSpaces = str => {
  return typeof str === 'string' ? str.split(' ').join('') : ''
}

/**
 * Adds image url
 * @param {*} vessel
 */
export const addVesselImageUrl = vessel => {
  vessel.image_url =
    'https://raw.githubusercontent.com/kenguru33/rs-vessel-images/master/img/' +
    vessel.mmsi +
    '.jpg'
}

/**
 * Adds state desription and assosiated color code and reason
 * Sets all reasons to not yet implemented.
 * @param {*} vessel
 */
export const addStateObject = vessel => {
  vessel.state = vesselStates[vessel.state - 1]
}

/**
 * Sanitize vessel list and remove vessels that conains invalid values
 * @param {*} vessels
 */
export const sanitizeVessels = vessels => {
  return vessels.filter(vessel => {
    vessel.mmsi = removeWhiteSpaces(vessel.mmsi)
    vessel.rs = removeWhiteSpaces(vessel.rs)
    addVesselImageUrl(vessel)
    addStateObject(vessel)
    return isValidMMSI(vessel.mmsi) && isValidRSNumber(vessel.rs)
  })
}
