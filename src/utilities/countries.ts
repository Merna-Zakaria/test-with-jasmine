/** Use Axios to get data from restcountries api */
import axios from 'axios';

/** Create getCountry Function here */
interface countryData {
    capital: string,
    region: string,
    numericCode: string
  }
async function getCountry(countryName: string):Promise<countryData>  {
  const getApi = await axios(
    `https://restcountries.eu/rest/v2/name/${countryName}`
  );
  const data = getApi.data;
 return {
        capital: data.capital, 
        region: data.region,
        numericCode: data.numericCode
    };
}
/** Create a test for this getRegion function */
async function getRegionCountries(regionalbloc: string) {
  const getApi = await axios(
    `https://restcountries.eu/rest/v2/regionalbloc/${regionalbloc}`
  );
  const data = getApi.data;
  const countries = [];
  for (let i = 0; i < data.length; i++) {
    countries.push(data[i].name);
  }
  return countries;
}

/** Create getRegionCapitals function here */
async function getRegionCapitals(regionalbloc: string) {
    const countryEndpoints = await getRegionCountries(regionalbloc);
    const promises = countryEndpoints.map((endpoint: any) => 
       axios(`https://restcountries.eu/rest/v2/name/${endpoint}`
    ));
    const arr = await Promise.all(promises);
    const capitals = [];
    for (let i=0; i < arr.length; i++) {
        capitals.push(arr[i].data[0].capital);
    }
    return capitals;
}

export default {
  getCountry,
  getRegionCountries,
  getRegionCapitals
};
