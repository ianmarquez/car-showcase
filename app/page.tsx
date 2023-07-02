import { CarCard, CustomFilter, Hero, Searchbar } from "@/components";
import { Car } from "@/types";
import { fetchCars } from "@/utils";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: any };
}) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || "",
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || "",
    model: searchParams.model || "",
  });

  const isDataEmpty =
    !Array.isArray(allCars) || allCars.length === 0 || !allCars;

  const renderAllCars = () => {
    if (!isDataEmpty) {
      return (
        <section>
          <div className="home__cars-wrapper">
            {allCars.map((car: Car) => (
              <CarCard car={car} />
            ))}
          </div>
        </section>
      );
    }

    return (
      <div className="home__error-container">
        <h2 className="text-black text-xl font-bold">Oops, no results</h2>
        <p>{allCars?.message}</p>
      </div>
    );
  };

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <Searchbar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="fuel" />
          </div>
        </div>

        {renderAllCars()}
      </div>
    </main>
  );
}
