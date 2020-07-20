import React from 'react';

const HomepageConainer= (WrappedComponent)=> class extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            test:1
        }
    }


    render(){
       return(
            <WrappedComponent {...this.state}/>
        )  
    }       
}

export default HomepageConainer;