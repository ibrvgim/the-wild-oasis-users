import { getCountries } from '@/libraries/data-service';

async function SelectCountry({ defaultCountry, name, id, className }) {
  const countries = await getCountries();
  const allCountries = countries.data.map((country) => country.country);

  return (
    <select
      name={name}
      id={id}
      defaultValue={defaultCountry}
      className={className}
    >
      <option value='' className='hidden'>
        Select country...
      </option>

      {allCountries.map((country) => (
        <option key={country} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
