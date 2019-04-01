import React,{Component} from 'react';
import DayPicker,{DateUtils} from 'react-day-picker';

class CalenderBook extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[],
            var:{
                from:undefined,
                to:undefined
            }
          
        }
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }
    

    handleDayClick(day) {
        const range = DateUtils.addDayToRange(day, this.state.var);
        this.setState(range);
      }
      handleResetClick() {
        this.setState(this.getInitialState());
      }

    componentDidMount() {
        const url = "http://10.10.200.24:9000/bookingsByHome/" + this.props.id;
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
                 
                })
                console.log("data"+this.state.data)
               
                // sessionStorage.setItem("LatPlace",this.state.latitude1)
                // sessionStorage.setItem('LongPlace',this.state.longitude1)

            })
            .catch(() => console.log("can't access" + url + "response. "))
    }

    render(){
        const { from, to } = this.state.var;
        const modifiers = { start: from, end: to };
        console.log("ownerToDate"+this.props.ownerToDate);
        console.log(this.props.ownerFromDate);
        if(this.state.data)
        { 
        return(
       
       <div>
            {this.state.data.map((home, index) => {
               

                return (
                    <div>
                   <center>
                       
                     <DayPicker 
                     selectedDays={[from, { from, to }]}
                     disabledDays={[
                         new Date(home.toDate),
                         new Date(home.fromDate),
                         {
                            after: new Date(this.props.ownerToDate),
                            before:new Date(this.props.ownerFromDate)
                        },
                         
                         {
                             after: new Date(home.fromDate),
                             before:new Date(home.toDate)
                         },
                         
                     ]}
                     modifiers={modifiers}
                     onDayClick={this.handleDayClick}
                 />
                     </center>                               
                 </div> 
                )
           
            })}  
            </div>
    
       )
    }
    else{
        return(
           
                          <div>
                              <center>  
                          <DayPicker 
                  
                          
                          disabledDays={[
                              
                              {
                                 after: new Date(this.props.ownerToDate),
                                 before:new Date(this.props.ownerFromDate)
                             },
                              
                             
                              
                          ]}

                          onDayClick={this.handleDayClick}
                      />
                          </center>                               
                      </div> 
                     )
                
                 } 
               
         
            
    }
      
}



export default CalenderBook;
