import fetchVessels from './json-vessel-feed'
import {vesselStates} from '../models/vessel-states'
import {vesselStateReasons} from '../models/vessel-state-reasons'
import fetchStations from './json-station-feed'
/**
 * Interface Vessel, Vessel states, Station etc...
 * See doc for interface specification
 */
export {
  fetchVessels,
  vesselStates,
  vesselStateReasons,
  fetchStations
}
