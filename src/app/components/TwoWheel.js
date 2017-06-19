import React from "react";
import {render} from "react-dom";
// TwoWheel as a Class Component
export class TwoWheel extends React.Component {
	constructor(props) {
		super();
	    //this.price = props.price;
		this.state = {price:props.price, visitor:props.visitor}
		this.handlePriceOnClick = this.handlePriceOnClick.bind(this);
		this.handleVisitorOnClick = this.handleVisitorOnClick.bind(this);
	}
	
	handlePriceOnClick() {
		this.setState({price:'Rs. 100000'});
		console.log('Get New Price');
	}
	
	handleVisitorOnClick() {
		this.props.changeVisitor(this.state.visitor);
		console.log('Get New Price');
	}
	
	handleOnChange(event) {
			this.setState({
				visitor:event.target.value
			})
			  
	}
	
    render() {                     
        return ( 
		    <div className="container">
                <div className="row">
				    <div className="row">
						<h1> TwoWheel </h1>
						<ul>
							<li>
								<b>Name :</b> {this.props.name}
							</li>
							<li>
								<b>By :</b> {this.props.specs.manufacturer}
							</li>
							
							<li>
								<b>Price :</b> {this.state.price}
							</li>
							<li>
							<b>Visitor :</b>  {this.props.visitor}
							</li>
							
						</ul>
						 
						<button onClick={this.handlePriceOnClick} className="btn btn-primary" >Get New Price</button>
						<br/><br/><button onClick={this.props.greet} className="btn btn-primary" >Greet Customer</button>
						 
						<br/><br/><b>New Visitor :</b><input type="text" value={this.state.visitor} onChange={(event) => this.handleOnChange(event) } />
						<br/><br/><button onClick={this.handleVisitorOnClick} className="btn btn-primary" >Change Visitor</button>
						
					</div>
				</div>
				</div>
      
        );
    } 
}
