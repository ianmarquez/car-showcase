export async function fetchCars() {
  const apiKey = process.env.RAPID_API_KEY;
  const apiEndpoint = process.env.RAPID_API_ENDPOINT;

  if (!apiKey || !apiEndpoint) {
    return;
  }

  const headers = {
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": apiEndpoint,
  };

  const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
  const response = await fetch(url, { headers });
  const result = await response.json();
  return result;
}

export const calculateRent = (city_mpg: number, year: number): string => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
