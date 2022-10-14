import React, { useState} from "react";
import "./search.css";
import SearchBox from "./SearchBox";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { addArtData } from "../../redux/artDataSlice";
import axios from "axios";
import SearchResult from "./SearchResults";
import { useNavigate } from "react-router-dom";
import { ArrowRightAltOutlined, KeyboardBackspace} from "@mui/icons-material";

const Search = () => {

  //state for the input field
  const [searchInput, setSearchInput] = useState("");

  //creating a state to toggle the api link
  const [useSearchLink, setUseSearchLink] = useState(false);

  //creating a state to use for the pagination
  const [activePage, setActivePage] = useState(1);

  //declaring variables
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Toggling the apilink based on if user has inputted a value and submitted
  const apiLink = !useSearchLink
    ? `https://api.artic.edu/api/v1/artworks`
    : `https://api.artic.edu/api/v1/artworks/search?q=${searchInput}`;

  //navigate function to the details page passing the
  //art id as a parameter to the route
  const viewDetails = (id) => {
    navigate(`/details/${id}`);
  };

  //Code to save the data gotten back from the api in redux
  const onSuccess = (data) => {
    dispatch(addArtData(data));
  };

  //Fetching the data using react - query
  const { data, isLoading, error, isError, refetch } = useQuery(
    ["fetchArts"],
    () => {
      return axios
        .get(`${apiLink}?page=${activePage}&limit=12`)
        .then((res) => res.data);
    },
    {
      onSuccess,
    }
  );

  //Text to display if the api is loading
  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  //Text to display if the api returns an error
  if (isError) {
    console.log(error);
    return <h1>Oops.... An Error Occurred!... Please Try Again</h1>;
  }

  //function to update the input field
  const searchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  //function to call the api again with the search value
  const onSearch = (e) => {
    e.preventDefault();
    setUseSearchLink(true);
    refetch();
  };

  //function to call the api with pagination
  const pagination = (value) => {
    if (value === "next") {
      setActivePage((page) => page + 1);
    } else if (value === "prev") {
      setActivePage((page) => page - 1);
    }
    refetch();
  };

  return (
    <div className="search_-container">
      <header className="search__header">
        <div className="search__header__text">
          <h1>Art in the Collection</h1>
          <p>
            Browse a curated selection of art around the world, including museum
            exhibitions, gallery openings, upcoming an many more
          </p>
        </div>
        <div className="search__header__input">
          <form onSubmit={onSearch} className="search__input__container">
            <SearchBox
              value={searchInput}
              searchInputChange={searchInputChange}
              onSubmit={onSearch}
            />
          </form>
        </div>
      </header>
      <main className="search__main">
        <SearchResult data={data} viewDetails={viewDetails} />
      </main>
      <footer className="search__footer">
        {activePage > 1 && <button className="search__footer__buttons" onClick={()=>pagination("prev")}><KeyboardBackspace/> Prev</button>}
        <button className="search__footer__buttons next" onClick={()=>pagination("next")}>Next <ArrowRightAltOutlined/></button>
      </footer>
    </div>
  );
};

export default Search;
