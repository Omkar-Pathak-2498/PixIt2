import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import IamgeList from "./ImageList";
import "./App.css";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div>
        <div className="container-md " style={{ marginTop: "10px" }}>
          <SearchBar afterSubmit={this.onSearchSubmit} />
        </div>
        <div
          className="c1 container-md text-center "
          style={{ backgroundColor: "#DFF6FF" }}
        >
          <IamgeList className="c2" imagesArray={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;
