import React,{ Component } from 'react';
import './edit.css';


var body;
class EditProfile extends Component {
    constructor(){
        super();
        //this.onClickB=this.onClickB.bind(this);
        this.onClickN=this.onClickN.bind(this);
        this.onUsernameChange=this.onUsernameChange.bind(this);
       
        this.onFormSubmit=this.onFormSubmit.bind(this);

        this.state={
         
          username : ' ',
          
          data:[]

        }
    }

    onUsernameChange(event){
      this.setState({username:event.target.value})
    }

    
    onFormSubmit(event){
      event.preventDefault();
      console.log("after submit"+this.state.password)
      body = {
 
          username : this.state.username,
          passwordHash : this.state.password
         
       
      }
    }

                
                    



    render() {
        return (
            <div>
  <div id="id03" className="modal">
    <form className="modal-content animate" action="/action_page.php">
    <button
          onClick={this.onClickN}
          className="close1"
          title="Close Modal">×</button>
        <br></br>
      <div className="imgcontainer">
        
        <img src={require('./img_login.png')} alt="Avatar" className="avatar" />
      </div>
      <div className="container">
        <label htmlFor="uname">
          <b>User Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          
          required
        />

      <label htmlFor="name">
          <b>Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Name"
          name="uname"
          onChange={this.onUsernameChange}
          required
        />

        <label htmlFor="gender">
        <b>Gender</b>
        </label>
        <br></br>
        <label>
         <input type="radio"
        name="gender"
        value="male" checked/>
        Male<br></br>
        <input type="radio"
        name="gender"
        value="female"/>
        Female
        </label>
        <br></br>
        <label htmlFor="bday">
        <b>Birthday</b>
        </label>
        <br></br>
        <input 
        type="date"
        name="dob"
        required/>
        <br></br>

        <label htmlFor="mbr">
                    <b>Mobile Number</b>
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter Mobile Number"
                    name="mbr"
                    required
        />

        <label htmlFor="addr">
                    <b>Address</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Address"
                    name="addr"
                    required
        />

        <label htmlFor="AdhrNbr">
                  <b>Aadhar Number/Passport Number</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Number"
                    name="AdhrNbr"
                    required/>

        
        <button type="submit">Submit</button>
        <br></br>
        
      </div>
      <div
        className="container"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        <button
          type="button"
          onClick={this.onClickN}
          className="cancelbtn"
        >
        <center>
          Cancel
          </center>
        </button>
        
      </div>
    </form>
  </div>
  </div>
)
}
onClickN(event) {
  var modal = document.getElementById('id03');
        modal.style.display = "none";
}

// onClickB(event) {
//   var modal = document.getElementById('id01');
//   modal.style.display = "block";
// }

}

export default EditProfile;