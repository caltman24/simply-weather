import { useEffect, useState, useContext } from "react";
import SearchIcon from "../Utility/SearchIcon";
import FadeInOut from "../Utility/FadeInOut";
import WeatherDataContext from "../../WeatherDataContext";
import { ISearchData, WeatherDataContextType } from "../../@types/weather";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchData, setSearchData] = useState<ISearchData[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const { setCurrentLocation } = useContext(
    WeatherDataContext
  ) as WeatherDataContextType;

  useEffect(() => {
    searchAPI(searchTerm).then((data) => {
      if (!data) return;
      setSearchData(data);
    });
  }, [searchTerm]);

  const searchAPI = async (location: string) => {
    if (location === "") return;
    try {
      const response = await fetch(`/api/search?location=${location}`);
      const data = await response.json();

      const formatedData: ISearchData[] = data.map((item: any) => {
        return {
          name: item.name,
          region: item.region,
          id: item.id,
          url: item.url,
        } as ISearchData;
      });

      return formatedData;
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = () => {
    if (searchTerm === "") return;
    setCurrentLocation(searchTerm);
    setSearchData([]);
    setSearchTerm("");
  };

  const selectSearchItem = (item: ISearchData) => {
    setCurrentLocation(item.url as string);
    setIsSearching(false);
    setSearchData([]);
    setSearchTerm("");
  };

  const searchResults = searchData.map((item: ISearchData) => {
    return (
      <li key={item.id} onClick={() => selectSearchItem(item)}>
        {item.name}, {item.region}
      </li>
    );
  });

  return (
    <div className="search-bar">
      <div className="search-input">
        <input
          type="text"
          placeholder="City, Zip, Lat / Long, or IP Address"
          value={searchTerm}
          onFocus={() => setIsSearching(true)}
          onBlur={() => setIsSearching(false)}
          onChange={handleChange}
        />
        <FadeInOut
          isMounted={isSearching && searchTerm.length > 0}
          className="search-input-results"
        >
          <ul>{searchResults}</ul>
        </FadeInOut>
      </div>

      <SearchIcon handleClick={handleClick} />
    </div>
  );
};

export default SearchBar;
