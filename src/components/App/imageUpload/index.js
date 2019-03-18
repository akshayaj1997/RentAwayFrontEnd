import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn} from 'mdbreact';


class ImageUpload extends React.Component {

constructor() {
    super();
    this.state = {
      form: {
        name:'',
        location: '',
        description:'',
        amenities:'',
        price:'',
        rating:'',
        url:'',
        imageUrls:[]
      },
      fields: {},
      errors: {},
      file: '',
      imagePreviewUrl: '',
      result:'',
      img:[]
    };
    this.handleChange = this.handleChange.bind(this);
    this._handleImageChange=this._handleImageChange.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    console.log('handle uploading-', this.state.file);
    const url = "http://10.10.200.24:9000/images"; 
    const formdata=new FormData()
   
    let headers = new Headers();

        formdata.append("file",this.state.file);

        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
    
        headers.append('Access-Control-Allow-Origin', url);
        headers.append('Access-Control-Allow-Credentials', 'true');
    
        headers.append('GET', 'POST');
        
        e.preventDefault();
        
        fetch(url, {
          headers: headers,
          method: 'POST',
          withCredentials:true,
          credentials:'include',
          headers:{
            'Access-Control-Allow-Origin': url
          },
          body: formdata
        })       
        .then(response=>{
          console.log(response);
          response.json().then((responseData)=>{console.log(responseData.image_url)
            this.state.img.push(responseData.image_url)
          console.log(this.state.img)
          sessionStorage.setItem('imgURLs',JSON.stringify(this.state.img))
          })
         
        })

        
   }
  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }
  handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });
  }

  

render() {
  let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img style={{width:"20%",height:"20%"}} src={imagePreviewUrl} />);
      } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }
const { form } = this.state;
return(
  <div className="hotelformb">
    <div className="imgform">
        <form>
                <div className="errorMsg">{this.state.errors.url}</div>
                <input className="fileInput" type="file" onChange={(e)=>this._handleImageChange(e)} /><br></br>
                <div className="imgPreview" ><br></br>
                  {$imagePreview  }
                </div><br></br>
                <button className="submitButton" type="submit" onClick={(e)=>this._handleSubmit(e)}>Upload Image</button><br></br>
                <div className="text-center mb-3">
                <br></br>
                </div>
            
              </form>
            
      
    </div>
    
  </div>
  );
  };
}

export default ImageUpload;