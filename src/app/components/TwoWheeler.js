import React from "react";
import {render} from "react-dom";

// TwoWheel as a Class Component
export class TwoWheeler extends React.Component {
	constructor(props) {
		super();
	    //this.price = props.price;
		this.state = {price:props.price, visitor:props.visitor}
		this.handlePriceOnClick = this.handlePriceOnClick.bind(this);
		this.handleVisitorOnClick = this.handleVisitorOnClick.bind(this);
	}
	
	handlePriceOnClick() {
		this.setState({price:'Rs. 100000'});
		console.log('New Price');
	}
	
	handleVisitorOnClick() {
		this.props.changeVisitor(this.state.visitor);
		console.log('New Visitor');
	}
	
	handleOnChange(event) {
			this.setState({
				visitor:event.target.value
			})
			setTimeout(
				() => {
					this.props.changeVisitor(this.state.visitor);
				}
				,3000
			);
	}
	
    render() {                     
        return ( 
		    <div className="container">
                <div className="row">
				    <div className="row">
						<h1 style={{color:'blue'}}> Two Wheeler </h1>
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
						 
						 <div className="btn-group btn-group-sm">
						   <button onClick={this.handlePriceOnClick} className="btn btn-primary" >Get New Price</button>
						  <button onClick={this.props.greet} className="btn btn-primary" >Greet Customer</button>
						   <b>New Visitor :</b><input type="text" value={this.state.visitor} onChange={(event) => this.handleOnChange(event) } />
						  <button onClick={this.handleVisitorOnClick} className="btn btn-primary" >Change Visitor</button>
						</div>
					</div>
				</div>
				</div>
      
        );
    } 
}
