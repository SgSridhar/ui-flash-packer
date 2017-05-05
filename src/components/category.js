import React from 'react'
import {connect} from 'react-redux'

import {setCategory} from '../actions/category'

const mapDispatchToProps = ((dispatch) => ({
	onComponentWillMount: (() => dispatch(setCategory('My Category')))
}))

@connect(null, mapDispatchToProps)
class Category extends React.Component {
	componentWillMount() {
		this.props.onComponentWillMount()
	}

	render() {
		return (
			<div className="pt-card">Category</div>
		)
	}
}

export default Category
