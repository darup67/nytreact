import React, { Component } from 'react';
import Helpers from '../../utils/helpers';
import Panel from '../common/Panel';

class Results extends Component {
	constructor() {
		super();
		this.state = {
			articles: []
		}
		// this.getArticles = this.getArticles.bind(this);
		this.renderArticles = this.renderArticles.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		// console.log('TAG');
		// this.getArticles();
		Helpers.getArticles(nextProps.topic, nextProps.startYear, nextProps.endYear).then((res) => {
			// console.log(res.data.response.docs);
			this.setState({articles: res.data.response.docs});
		});
	}
	// getArticles() {

	// }
	renderArticles() {
		return this.state.articles.map(article => (
			<Panel
				article={article}
				key={article._id}
			/>
		));
	}
	render() {
		return (
			<div className="container-fluid">
				<div className="panel panel-default">
				  	<div className="panel-heading">
				    	<h3 className="panel-title">Results</h3>
				  	</div>
				  	<div className="panel-body">
				  		{this.renderArticles()}
				  	</div>
				</div>
			</div>
		);
	}
}

export default Results;
