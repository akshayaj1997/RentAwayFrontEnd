import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import CondNavBar from "../condNavbar";
import './pageD.css';
import { Card, Button } from 'reactstrap';
import LoginModal from "../loginModal";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import ReactMapGL,{Marker,Popup} from 'react-map-gl';
import MapsDetails from '../mapsDetails';
var print = []

class DetailsPage extends Component {

    constructor(props) {
        super(props);
        this.submitCheckout = this.submitCheckout.bind(this);
        this.state = {
            data: [],
            homeId: ' ',
            fromDate: ' ',
            address:' ',
            location: ' ',
            homeName: ' ',
            latitude1:17.35,
            longitude1:78.48,
            price: ' ',
            toDate: ' ',
            description:'',
            amenities: [],
            output: [],
            output1: [],
            rules: [],
            rules1: [],
            imageUrls: [],
            user:[],
            propertyType: '',
            viewport: {
                width: 500,
                height: 200,
                latitude: 17.3850,
                longitude: 78.4867,
                zoom: 8
              },
           }

    }

    submitCheckout() {
        if (localStorage.getItem('role') === null) {

            var modal = document.getElementById('id01');
            modal.style.display = "block";
            return (
                <LoginModal />
            )

        }

        else {
            window.location.assign('http://localhost:3000/checkOut')
        }
    }
    componentDidMount() {
        const url = "http://localhost:9000/homes/" + this.props.match.params.id;
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        headers.append('Access-Control-Allow-origin', url);
        headers.append('Access-Control-Allow-Credentials', 'true');

        headers.append('GET', 'POST');

        fetch(url, {
            headers: headers,
            method: 'GET'
        })
            .then(response => response.json())
            .then(contents => {
                console.log("in fetch" + contents);
                this.setState({
                    data: contents,
                    amenities: contents.amenities,
                    imageUrls: contents.imageUrls,
                    user: contents.user,
                    latitude1:parseFloat(contents.latitude),
                    longitude1:parseFloat(contents.longitude)
                })
                sessionStorage.setItem("LatPlace",this.state.latitude1)
                sessionStorage.setItem('LongPlace',this.state.longitude1)

            })
            .catch(() => console.log("can't access" + url + "response. "))
    }




    render() {

        console.log(this.state.data);
        console.log("location "+typeof parseFloat(this.state.data.latitude))
        console.log(this.state.amenities);
        console.log("Images" + this.state.imageUrls)
        console.log("amenities keys" + this.state.amenities);
        if (this.state.amenities.wifi == true) {

            this.state.output1.push(<img src={require('./wireless-internet.png')}></img>)

            this.state.output.push("Wifi  ");



        }

        if (this.state.amenities.airConditioner == true) {

            this.state.output1.push(<img src={require('./AC.png')}></img>)

            this.state.output.push("Air Conditioner  ");



        }
        if (this.state.amenities.breakfast == true) {
            this.state.output1.push(<img src={require('./break.png')}></img>)

            this.state.output.push("Breakfast  ");

        }
        if (this.state.amenities.fireExtinguisher == true) {
            this.state.output1.push(<img src={require('./fire.png')}    ></img>)

            this.state.output.push("Fire Extinguisher ");
        }
        if (this.state.amenities.firstAidKit == true) {
            this.state.output1.push(<img src={require('./first.png')} ></img>)

            this.state.output.push("First Aid Kit  ");
        }
        if (this.state.amenities.gym == true) {
            this.state.output1.push(<img src={require('./gym.png')}></img>)

            this.state.output.push("Gym  ");
        }
        if (this.state.amenities.parking == true) {
            this.state.output1.push(<img src={require('./parking.png')} style={{alignSelf:'center'}}></img>)

            this.state.output.push("Parking  ");
        }
        if (this.state.amenities.pool == true) {
            this.state.output1.push(<img src={require('./pool.png')}></img>)

            this.state.output.push("Pool  ");
        }
        if (this.state.amenities.tv == true) {
            this.state.output1.push(<img src={require('./tv.png')}></img>)

            this.state.output.push("TV  ");
        }
        if (this.state.amenities.workspace == true) {
            this.state.output1.push(<img src={require('./work.png')} ></img>)

            this.state.output.push("Work Space  ");

        }
        if (this.state.amenities.smokeDetector == true) {
            this.state.output1.push(<img src={require('./smoke-detector.png')} style={{borderRadius:'100%'}}></img>)

            this.state.output.push("Smoke Detector  ");

        }
        if (this.state.amenities.noPets == true) {

            this.state.rules1.push(<img src={require('./pet.png')} ></img>)

            this.state.rules.push(" No Pets ");



        }
        if (this.state.amenities.noDrinking == true) {
            this.state.rules1.push(<img src={require('./event.png')}></img>)
            this.state.rules.push(" No Drinking  ");



        }
        if (this.state.amenities.noSmoking == true) {

            this.state.rules1.push(<img src={require('./smoke.png')}></img>)

            this.state.rules.push(" No Smoking  ");



        }






        return (
            <div className="details">
                <CondNavBar />
                <div className="HomenameBox">
                    <i class="fab fa-houzz fa-3x"></i>
                    <br />
                    <div style={{ fontSize: '26px', textTransform: 'uppercase', paddingTop: '10px', fontWeight: '120' }}>{this.state.data.propertyType} in {this.state.data.location} </div>
                    <br />
                    <i style={{ fontSize: '66px' }}>{this.state.data.homeName}
                    </i>
                </div>
                <div className="images"><UncontrolledCarousel indicators={false} items={[
                    {
                        src: this.state.imageUrls[0],
                        
                    },
                    {
                        src: this.state.imageUrls[1],
                        
                    },
                    {
                        src: this.state.imageUrls[2],
                       
                    }
                ]} /></div>
                <div>

                    <div className="cardD"  >
                    <Card className='HR'>
                            <br />
                            
                                {this.state.data.description}
                            
                        </Card>

                        <br/>
                        <hr/>
                        <Card className='HR'>
                            <b><h1 style={{ fontSize: '50px' }}>Amenities</h1></b>
                            <br />
                            <center>

                                {this.state.output.map((home, index) => {
                                    const id = `${home.id}`
                                    // const path= `/detailsPage/`+id
                                    return (
                                        <li key={index} style={{ listStyle: 'none', float: 'left', paddingLeft: '10px', paddingBottom: '10px', paddingRight: '10px', paddingTop: '20px', display: 'inline' }}>
                                            <div className='listitemsAmen' >
                                                {this.state.output1[index]}
                                                <br /> <br />
                                               <span className='imgcaption'> {this.state.output[index]}</span>
                                            </div>
                                        </li>
                                    )
                                })}
                            </center>
                        </Card>
                        <br />
                        <hr />
                        <Card className='HR'>
                            <b><h1 style={{ fontSize: '50px' }}>House Rules</h1></b><br />
                            <center>
                                {this.state.rules.map((home, index) => {
                                    const id = `${home.id}`
                                    // const path= `/detailsPage/`+id
                                    return (
                                        <li key={index} style={{ listStyle: 'none', float: 'left', paddingLeft: '10px', paddingBottom: '10px', paddingRight: '10px', paddingTop: '20px', display: 'inline' }}>
                                            <div className='listitemsAmen' >
                                                {this.state.rules1[index]}<br />
                                                <br /><br/>
                                                {this.state.rules[index]}
                                            </div>

                                        </li>

                                    )
                                })}
                            </center>



                        </Card>
                        <br />
                        <hr />
                        <Card className='HR'>
                            <h1 style={{fontSize:'50px'}}>Availability</h1>
                            <DayPicker
                                disabledDays={[
                                    {
                                        after: new Date(this.state.data.toDate),
                                        before:new Date(this.state.data.fromDate)
                                    },
                                    {
                                        before:new Date()
                                    },

                                ]}
                            />
                            
                        </Card>
                        <hr/>
                        <Card className='HR'>
                        <h1 style={{fontSize:'50px'}}>Location</h1>
                        <br/>
                        <i style={{fontSize:'25px',textTransform:'uppercase',float:'left'}}>{this.state.data.location}</i>
                        <br/>
                        <i style={{fontSize:'30px',float:'right'}}>{this.state.data.address}</i>
                        <br/>
                        <MapsDetails/>  
                        </Card>
                        <hr/>
                        <Card className='HR'>
                        <h1 style={{fontSize:'50px'}}>Meet Your Host</h1>
                        <i style={{fontSize:'25px'}}>
                        <br/>
                        <b>Hi, I'm   
                        {this.state.user.name}
                        <br/>
                        Contact me at
                        {this.state.user.mobilenbr}</b>
                        </i>
                        <br/>
                        </Card>
                        <hr/>
                        <Card className='HR'>
                        <h1 style={{fontSize:'50px'}}>Cancellation Policy and House Rules</h1>
                        <br/>
                        <i style={{fontSize:'25px'}}>
                        This home has a Strict (grace period) cancellation policy.
                        <br/>
                         Cancel within 48 hours of booking and at least 14 days prior to check-in to get a full refund.
                        </i>
                        </Card>
                        <br /><br />
                        <br /> <br /> <br /> <br />
                    </div>
                </div>

                <div className="fixed-footer">

                    <span style={{ fontSize: '16px', marginLeft: '25px', textTransform: 'uppercase', marginTop: '20px', fontWeight: '500', fontStyle: 'oblique' }}><i class="fa fa-home fa-3x" aria-hidden="true"></i> &nbsp; &nbsp; {this.state.data.propertyType} in {this.state.data.location} </span>
                    <Button style={{
                        width: '7%',
                        padding: '10px 30px',
                        marginRight: '15px',
                        backgroundColor: '#f44336',
                        float: 'right',
                        borderRadius:'10%'
                    }} onClick={this.submitCheckout}><h4>Book</h4></Button>
                    <i style={{ float: 'right', marginRight: '30px', marginTop: '20px' }}>  &#8377;{this.state.data.price}/ night</i>
                </div>

            </div>
        )
    }
}

export default DetailsPage;