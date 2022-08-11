import { useEffect, useState } from "react";
import SearchIcon from "../Utility/SearchIcon";
import FadeInOut from "../Utility/FadeInOut";
import { useContext } from "react";
import WeatherDataContext from "../../WeatherDataContext";
import { ISearchData, WeatherDataContextType } from "../../@types/weather";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const { searchData, setSearchData } = useContext(
    WeatherDataContext
  ) as WeatherDataContextType;

  useEffect(() => {
    searchData.length > 0 ? setIsSearching(true) : setIsSearching(false);
    searchAPI(searchTerm);
  }, [searchTerm, searchData]);

  const searchAPI = async (location: string) => {
    if (location === "") return;
    const API_KEY: string = import.meta.env.VITE_API_KEY;
    const url = `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${location}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      const formatedData: ISearchData[] = data.map((item: any) => {
        return {
          name: item.name,
          region: item.region,
          country: item.country,
          id: item.id,
        } as ISearchData;
      });

      setSearchData(formatedData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = () => {
    console.log("Searching for:", searchTerm);
  };

  const searchResults = searchData.map((item: ISearchData) => {
    return <li key={item.id}>{item.name}</li>;
  });

  return (
    <div className="search-bar">
      <div className="search-input">
        <input
          type="text"
          placeholder="Another Location"
          value={searchTerm}
          onChange={handleChange}
        />
        <FadeInOut isMounted={isSearching} className="search-input-results">
          <ul>{searchResults}</ul>
        </FadeInOut>
      </div>

      <SearchIcon handleClick={handleClick} />
    </div>
  );
};

export default SearchBar;
