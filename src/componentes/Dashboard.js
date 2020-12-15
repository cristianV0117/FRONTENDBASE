import React, { Component } from 'react';
//import 'rsuite/dist/styles/rsuite.min.css';
import Carousel from '../publico/Carousel';


class Dashboard extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            load:false
        };
    }

    componentDidMount()
    {
        if (this.state.load) {
            setTimeout(function(){ 
                window.location.reload();
            }, 3000);
        } else {

        }
        
    }

    render()
    {
        return(
            <div>
                <Carousel />
            </div>
        );
    }
     
}

export default Dashboard;