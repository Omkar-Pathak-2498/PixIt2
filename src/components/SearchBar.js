import React from "react";

class SearchBar extends React.Component {
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  state = { term: "" };

  onSubmitForm = (e) => {
    e.preventDefault();

    this.props.afterSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment p-3 mb-2 bg-dark text-white border border-primary">
        <form onSubmit={this.onSubmitForm}>
          {/* <div className="mb-3">
            <label className="form-label">Image Search</label>
            <input
              type="text"
              className="form-label"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div> */}

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Image Search"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            <button
              className="btn btn-outline-primary"
              type="button"
              id="button-addon2"
              onClick={this.onSubmitForm}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
