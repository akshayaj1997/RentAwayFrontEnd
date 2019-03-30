import React, {Component} from 'react';
import CondNavBar from '../condNavbar';
import './checkout.css';
import Notifications, {notify} from 'react-notify-toast';

class CheckOut extends Component{

  constructor(props){
    super(props);
    this.onCheckOut=this.onCheckOut.bind(this)
    this.show = notify.createShowQueue();
  }

 onCheckOut(){
  console.log("entered");
     
  let body = { 
    "homeId": 88,
      "toDate": "2020-08-31",
      "fromDate": "2019-03-01"
   }
   console.log("become a host"+body);
   var bearerToken = localStorage.getItem('accessToken');
   const url = "http://10.10.200.24:9000/booking";
   var accesstoken = 'Bearer ' + bearerToken;
   console.log(accesstoken);
   let headers = new Headers();

   headers.append('Content-Type','application/json');
   headers.append('Accept','application/json');

   headers.append('Access-Control-Allow-origin',url);
   headers.append('Access-Control-Allow-Credentials','true');

   headers.append('GET','POST');

   fetch(url, {
     headers: headers,
     method: 'POST',
     withCredentials:true,
     credentials:'include',
     headers:{
       'Authorization':accesstoken,
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': url
     },
     body: JSON.stringify(body) 
 })
   .then(response => {
     console.log(response.status);
     if(response.status===200)
         {
           window.location.reload();
           localStorage.setItem('role',response.role)
         }
         else if(response.status===400){
           alert("Username already exists");
           window.location.reload();
         }
         else if(response.status===401){
           alert("Username or password is incorrect");
           window.location.reload();
         }
         else{
           alert("Unauthorized");
           window.location.reload();
         }})
   .then(contents => {console.log("in fetch"+contents);
               
                     
})
.catch(()=> console.log("can't access" + url))

 }
 
    
    render(){
        
        return(<div className="CheckImg">
            <CondNavBar/>
            <div className='boxC'>
            <form>
                <div class="aaa">
                    <center><h1>CheckOut</h1></center>
                    <form action="/action_page.php">
  <div >
    <div >
      <h3>Billing Address</h3>
      <label htmlFor="fname"><i className="fa fa-user" /> Full Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Full Name" required />
      <label htmlFor="email"><i className="fa fa-envelope" /> Email</label>
      <input type="text" id="email" name="email" placeholder="E-mail" required />
      <label htmlFor="adr"><i className="fa fa-address-card-o" /> Address</label>
      <input type="text" id="adr" name="address" placeholder="Address" required/>
      <label htmlFor="city"><i className="fa fa-institution" /> City</label>
      <input type="text" id="city" name="city" placeholder="City"  required/>
      <div >
        <div >
          <label htmlFor="state">State</label>
          <input type="text" id="state" name="state" placeholder="State" required/>
        </div>
        <div >
          <label htmlFor="zip">Zip</label>
          <input type="text" id="zip" name="zip" required/>
        </div>
      </div>
    </div>
    <div >
      
      <h3>Payment</h3>
      <label htmlFor="fname">Accepted Cards</label>
      <div className="icon-container">
        <i className="fa fa-cc-visa" style={{color: 'navy'}} />
        <i className="fa fa-cc-amex" style={{color: 'blue'}} />
        <i className="fa fa-cc-mastercard" style={{color: 'red'}} />
        <i className="fa fa-cc-discover" style={{color: 'orange'}} />
      </div>
      <label htmlFor="cname">Name on Card</label>
      <input type="text" id="cname" name="cardname" placeholder="Name on Card" required />
      <label htmlFor="ccnum">Credit card number</label>
      <input type="text" id="ccnum" name="cardnumber" placeholder=" " required />
      <label htmlFor="expmonth">Exp Month</label>
      <input type="text" id="expmonth" name="expmonth" placeholder=" " required/>
      <div >
        <div>
          <label htmlFor="expyear">Exp Year</label>
          <input type="text" id="expyear" name="expyear"  required/>
        </div>
        <div>
          <label htmlFor="cvv">CVV</label>
          <input type="text" id="cvv" name="cvv"  required/>
        </div>
      </div>
    </div>
  </div>
  <label>
    <input type="checkbox" defaultChecked="checked" name="sameadr" /> Shipping address same as billing
  </label>
  <br/>
 <center><input type="submit" value="Continue to checkout" className="btn" onClick={this.onCheckOut} /></center> 
 
</form>
</div>
 </form>
</div>
 </div>
            )
    }

    }

export default CheckOut;