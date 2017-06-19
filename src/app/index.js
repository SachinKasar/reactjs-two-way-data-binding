import React from "react";
import {render} from "react-dom";

import {TwoWheel} from "./components/TwoWheel";
import {FourWheel} from "./components/FourWheel";

class App extends React.Component {
	constructor () {
		super()
		this.state = {
			visitor:'XYZ'
		}
		this.handleVisitor = this.handleVisitor.bind(this);
	}
	
	greetCustomer() {
		alert("Hello");		
	}
	
	handleVisitor(name) {
		this.setState({
			visitor:name
		});		
	}
	
    render() {
		var twoWheelSpecs = {manufacturer : "Royal Enfield"};
		var fourWheelSpecs = {manufacturer : "Maruti Suzuki"};
		
        return ( 
			<div>
				 <div className="container">
					<div className="row">
						<div className="row">
							<TwoWheel 
							       name="Enfield Classic" 
								   specs={twoWheelSpecs} 
								   price="0" ariom
								   greet={this.greetCustomer} 
								   visitor={this.state.visitor}
								   changeVisitor={this.handleVisitor}/>
						</div>
					</div>
				  </div>
			  <hr/>
				  <div className="container">
					<div className="row">
						<div className="row">
							<FourWheel 
								name="Grand Vitara" 
								specs={fourWheelSpecs} 
								visitor={this.state.visitor}/>
						</div>
					</div>
				  </div>
			  </div>
        );
    } 
}

render( < App / > , document.getElementById("app"));