import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export const CountriesDetailPage = () => {
  const { id }= useParams();


  const fetchData = async (id) => {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const jsonData = await response.json();
    return jsonData[id];
  };

  const { data: countryData, isLoading } = useQuery({
    queryKey: ["singleCountry", id],
    queryFn: () => fetchDataById(id),
    enabled: !!id,
  });

  if (isLoading || !countryData) {
    return <h1>LOADING...</h1>;
  }

  return ( // eslint-disable-line no-console
    <>
      <h1>{countryData.name.official}</h1>
      <p>Country Code: {countryData.cca2}</p>
      <p>Capital: {countryData.capital} </p>
      <p>Region: {countryData.region}</p>
      <img src={countryData.flags.png} alt="" />
    </>
  );
}