import React from "react";
import {render} from "react-dom";

import {TwoWheeler} from "./components/TwoWheeler";
import {FourWheeler} from "./components/FourWheeler";

class App extends React.Component {
	constructor () {
		super()
		this.state = {
			visitor:'Visitor 1'
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
		let twoWheelSpecs = {manufacturer : "Royal Enfield"};
		let fourWheelSpecs = {manufacturer : "Maruti Suzuki"};
		
        return ( 
			<div style={{border: '5px solid grey'}}>
				 <div className="container">
					<div className="row">
						<div className="row">
							<TwoWheeler 
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
							<FourWheeler 
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