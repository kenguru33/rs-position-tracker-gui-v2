/* eslint-disable no-unused-vars */
import {vesselStates} from './vessel-states'
import {vesselStateReasons} from '@/lib/feed-adapter/vessel-state-reasons'
import fetchJsonData from 'json-feed-fetcher'

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
    process.env.IMG_URL +
    vessel.mmsi +
    '.jpg'
}

/**
 * Adds state description and associated color code and reason
 * Sets all reasons to randomized value until implemented.
 * @param {*} vessel
 */
export const addStateObject = vessel => {
  vessel.state = vesselStates[Math.floor((Math.random() * 3))]
  vessel.state = {...vessel.state, ...{reason: vesselStateReasons[Math.floor((Math.random() * 4) + 1)]}}
  vessel.state = {...vessel.state, ...{note: vessel.name}}
}

/**
 * Sanitize vessel list and remove vessels that contains invalid values
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
