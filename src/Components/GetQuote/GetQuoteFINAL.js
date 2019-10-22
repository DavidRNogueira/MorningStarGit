import React, {Component} from 'react'


    
class GetQuote extends Component{
    
    state={
        doorcost:0,
        citycost:0,
        sizecost:0,
        zipcode:''
    }
    

    handleClickLexington = () =>{
        this.setState({doorcost:800})
    }
    handleClickFlush = () =>{
        this.setState({doorcost:800})
    }
    handleClickCarriage = () =>{
        this.setState({doorcost:1150})
    }
    handleClickMesa = () =>{
        this.setState({citycost:30})
    }

distanceGoogleMaps = (customerZip) =>{
    fetch("https://maps.googleapis.com/maps/api/distancematrix/json?origins=1628+E+Saint+Anne+St+Phoenix+AZ&destinations=" + this.customerZipCode+ "&units=imperial&key=AIzaSyD6PN0x-VvRy0nsDybsv0SGc_MbfJHX9qY")
    .then(res => {console.log(res)})
}

handleDistanceSubmit = (e) =>{
    e.preventDefault();
    var customerZip = this.state.zipcode
    this.distanceGoogleMaps(customerZip)
}

handleChangeZipCode = (e) =>{
this.setState({zipcode:e.target.value})
}



render(){
        return(
        <div className="getquote">
        <h2>Get Quote</h2>
        <hr/>
        <p className="getquotesubheader">Our prices will continue as quoted on this page unless information changes. Please select all of the following that apply.</p>
            <div className="doortype">
            <h4>Garage Door Type</h4>
            <form action="">

            <label htmlFor="lexington">16 x 7 Lexington</label>
            <input onChange = {this.handleClickLexington} type="radio" id="lexington" name="door"></input> 

            <label htmlFor="carriage">16 x 7 Carriage</label>
            <input onChange = {this.handleClickCarriage} type="radio" id="Carriage" name="door"></input> 

            <label htmlFor="flush">16 x 7 Flush</label>
            <input onChange = {this.handleClickFlush} type="radio" id="flush" name="door"></input> 

            </form>
            </div>


            <div className="cities">
            <h4>Location</h4>
            <form action="">

            <label htmlFor="mesa">Mesa</label>
            <input onChange = {this.handleClickMesa} type="radio" id="mesa" name="city"></input> 

            <label htmlFor="Chandler">Chandler</label>
            <input type="radio" id="Chandler" name="city"></input> 

            <label htmlFor="wood">Tempe</label>
            <input type="radio" id="wood" name="city"></input> 

            </form>
            </div>
            <div className="distance">
                <h4>Travel Cost</h4>
                <form onSubmit={(e)=>{this.handleDistanceSubmit(e)}}>
                <label htmlFor="zipcode">Enter Zip Code</label>
                <input onChange={this.handleChangeZipCode} type="number" name="zipcode" id="zipcode" placeholder="Your zipcode"/>
                <button type="submit" id="zipcode">Calculate</button>
                </form>

            </div>

            <h3>Total:${this.state.doorcost + this.state.citycost + this.state.sizecost}</h3>
        
        </div> 
    )
}}



export default GetQuote

