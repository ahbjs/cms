import React from 'react';

class T_Home extends React.Component{
    constructor(props){
      super(props);
      this.state = {apiResponse:[]};
    }
  
    callAPI(){
      fetch("http://localhost:9000/thome")
        .then(res=> res.json())
        .then(res => this.setState({apiResponse:res}));
    }
  
    componentWillMount(){
      this.callAPI();
    }
  
    render(){

      var ResData = this.state.apiResponse;

      return(
        ResData.map((data,index) => {
          return(
            <div className="row" style={{padding: "0px 150px"}}>
        
            <div className="col-lg-6 card-main">
            <div className="row">
                
                <div className="col-lg-4 card-icon">
                  <i className="fa fa-user"></i>
                </div>
    
                <div className="col-lg-8 text-center">
                  <p className="card-title">Students</p> 
                  <p className="card-count">{data.student}</p>
                </div>
    
            </div>
            </div>
    
            <div className="col-lg-6 card-main">
            <div className="row">
                
                <div className="col-lg-4 card-icon">
                  <i className="fa fa-book"></i>
                </div>
    
                <div className="col-lg-8 text-center">
                  <p className="card-title">Assignments</p> 
                  <p className="card-count">{data.assignment}</p>
                </div>
    
            </div>
            </div>
    
            <div className="col-lg-6 card-main">
            <div className="row">
                
                <div className="col-lg-4 card-icon">
                  <i className="fa fa-bullhorn"></i>
                </div>
    
                <div className="col-lg-8 text-center">
                  <p className="card-title">Announcements</p> 
                  <p className="card-count">{data.announcement}</p>
                </div>
    
            </div>
            </div>
    
            <div className="col-lg-6 card-main">
            <div className="row">
                
                <div className="col-lg-4 card-icon">
                  <i className="fa fa-bookmark"></i>
                </div>
    
                <div className="col-lg-8 text-center">
                  <p className="card-title">Submissions</p> 
                  <p className="card-count">{data.submission}</p>
                </div>
    
            </div>
            </div>
            
        </div>
          )
        })
      )  
      /*return (
        <div className="row" style={{padding: "0px 150px"}}>
        
        <div className="col-lg-6 card-main">
        <div className="row">
            
            <div className="col-lg-4 card-icon">
            <i className="fa fa-user"></i>
            </div>

            <div className="col-lg-8 text-center">
            <p className="card-title">Students</p> 
            <p className="card-count">{data[0].student}</p>
            </div>

        </div>
        </div>

        <div className="col-lg-6 card-main">
        <div className="row">
            
            <div className="col-lg-4 card-icon">
            <i className="fa fa-book"></i>
            </div>

            <div className="col-lg-8 text-center">
            <p className="card-title">Assignments</p> 
            <p className="card-count">239</p>
            </div>

        </div>
        </div>

        <div className="col-lg-6 card-main">
        <div className="row">
            
            <div className="col-lg-4 card-icon">
            <i className="fa fa-bullhorn"></i>
            </div>

            <div className="col-lg-8 text-center">
            <p className="card-title">Announcements</p> 
            <p className="card-count">239</p>
            </div>

        </div>
        </div>

        <div className="col-lg-6 card-main">
        <div className="row">
            
            <div className="col-lg-4 card-icon">
            <i className="fa fa-bookmark"></i>
            </div>

            <div className="col-lg-8 text-center">
            <p className="card-title">Submissions</p> 
            <p className="card-count">239</p>
            </div>

        </div>
        </div>
        
    </div>
      );*/
    }
    
}

export default T_Home;