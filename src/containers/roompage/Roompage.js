import React from 'react';

const RoompageConainer= (WrappedComponent)=> class extends React.Component {
    constructor(props){
        super(props)
    }


    render(){
       return(
            <WrappedComponent {...this.state}/>
        )  
    }       
}

export default RoompageConainer;