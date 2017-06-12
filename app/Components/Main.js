// Include React
import React from "react";

import Search from "./Children/Search";
import Saved from "./Children/Saved";
import Results from "./Children/Results";

class Main extends React.Component {

  // Here we render the component
  render() {

    return (
        <div>
          <div className="jumbotron">
            <h1>New York Times Articles</h1>
          </div>
          <div className="container content">
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">Search Parameters</h3>
              </div>
              <div className="panel-body">
                <form role="form">
                  <div className="form-group">
                    <label>Search Term:</label>
                    <input type="text" className="form-control" id="search" />
                  </div>
                  <div className="form-group">
                    <label>Start Year:</label>
                    <input type="text" className="form-control start-year" />
                  </div>
                  <div className="form-group">
                    <label>End Year:</label>
                    <input type="text" className="form-control" id="end-year" />
                  </div>
                  <button type="submit" className="btn btn-primary" id="search-btn">Search</button>
                  <button type="button" className="btn btn-default clear">Clear</button>
                </form>
              </div>
            </div>
            <Search/>
            <Results/>
            <Saved/>
          </div>
        </div>
    );
  }
}

// Export the component back for use in other files
export default Main;