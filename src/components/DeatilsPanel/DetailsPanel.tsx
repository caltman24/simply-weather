import SearchIcon from "../Utility/SearchIcon";

const DetailsPanel = () => {
  return (
    <div className="details-panel">
      <div className="search-bar">
        <input type="text" placeholder="Another Location" />
        <SearchIcon />
        {/* TODO: Fix search icon hover state. To do so, you will have to programatically assign the path styles. If that doesnt work you may have to ditch the svg approach and find a different solution. */}
      </div>
    </div>
  );
};

export default DetailsPanel;
