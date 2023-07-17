import SingleLocation from '../types/SingleLocation';

/**
 * @desc    Takes a Single Location, pulls the list of services from each then filters
 *          the object into a unique list of alphabetized services.
 * @param   locations Array of SingleLocations
 * @returns Unique string array containing all services available in the dataset
 * @author LocalNewsTV
 */
const extractServiceList = (locations: Array<SingleLocation>): Array<string> => {
  const result: Array<string> = [];
  locations.forEach((location) => result.push(...location.services));
  return [...new Set(result.sort())];
};

export default extractServiceList;
