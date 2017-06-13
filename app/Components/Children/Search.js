// Include React
import React from "react";
import Results from "./Results"
import Helpers from "../../utils/helpers";

class Search extends React.Component {

    // Here we set a generic state associated with the text being searched for
    getInitialState() {
        return {
          searchQuery: "",
          term: "",
          begin: "",
          end: "",
          results: []
        };
    }

    componentDidUpdate(prevProps, prevState) {
        // If we have a new search term, run a new search
        if (prevState.searchQuery !== this.state.searchQuery) {
            console.log("UPDATED");

            helpers.runQuery(this.state.searchQuery).then(function(data) {
                if (data !== this.state.results) {
                    console.log(data);
                    this.setState({results: data});
                }
                // This code is necessary to bind the keyword "this" when we say this.setState
                // to actually mean the component itself and not the runQuery function.
            }.bind(this));
        }
    }

    postSavedArticle(article) {
        //console.log('this is the saved Article', article)
        helpers.postSavedArticle(article);

    }

    // This function will respond to the user input
    handleChange(e) {
        var newState = {};
        newState[e.target.id] = e.target.value;
        this.setState(newState);
    }

    // When a user submits...
    handleSubmit(e) {
        // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
        // clicking the button
        e.preventDefault();
        var newQuery = "&q=" + this.state.term + "&begin_date=" + this.state.begin + "&end_date=" + this.state.end;

        this.setState({searchQuery: newQuery});
    }

    // Here we render the function
    render() {

        return (

            <div>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title text-center">Search</h3>
                    </div>
                    <div className="panel-body text-center">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <h4 className="">
                                    <strong>Topic</strong>
                                </h4>
                                <input type="text" onChange={this.handleChange} className="form-control text-left" id="term" required/>
                                <div className="row">
                                    <div className="col-md-6">
                                        <h4 className="">
                                            <strong>Start Date (YYYY)</strong>
                                        </h4>
                                        <input value={this.state.begin} onChange={this.handleChange} type="number" className="form-control text-center" id="begin" required/>
                                    </div>
                                    <div className="col-md-6">
                                        <h4 className="">
                                            <strong>End Date (YYYY)</strong>
                                        </h4>
                                        <input value={this.state.end} onChange={this.handleChange} type="number" className="form-control text-center" id="end" required/>
                                    </div>
                                </div>

                                <br/>
                                <button className="btn btn-primary" type="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <Results results={this.state.results} postSavedArticle={this.postSavedArticle}/>
                    </div>
                </div>
            </div>
        );
    }
};

export default Search;
