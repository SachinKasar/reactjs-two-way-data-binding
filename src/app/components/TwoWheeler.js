import React from "react";
import {render} from "react-dom";

// TwoWheel as a Class Component
export class TwoWheeler extends React.Component {
	constructor(props) {
		super();
	    //this.price = props.price;
		this.state = {price:props.price, visitor:props.initvisitor}
		 
	}
	
	 
	
	handleOnChange(event) {
			this.setState({
				visitor:event.target.value
			})
			setTimeout(
				() => {
					this.props.changeVisitor(this.state.visitor);
				}
				,2000
			);
	}
	
    render() {                     
        return ( 
		    <div  className="alert alert-warning" >
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
							     <b>Visitor :</b>  {this.props.initvisitor} 
							</li>
							<li>
							     <b>New Visitor : </b>
                                 <input type="text" value={this.state.visitor} onChange={(event) => this.handleOnChange(event) } />
							</li>
						</ul>
						 
						  
					</div>
				 
        );
    } 
}
