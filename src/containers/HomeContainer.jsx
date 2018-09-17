import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomersActions from '../components/CustomersActions';

class HomeContainer extends Component {

    handleOnCLick = () => {
        console.log("handleOnCLick");
        this.props.history.push('/customers');
    }

    render() {
        return (
            <div>
                <AppFrame
                    header='Inicio'
                    body={
                        <div>
                            <img src="https://c1.staticflickr.com/4/3420/3364250371_c632ff60aa_m.jpg" alt="" />
                            <CustomersActions>
                                <button onClick={this.handleOnCLick}>Listado de clientes</button>
                            </CustomersActions>
                        </div>
                    } />
            </div>
        )
    }
}

export default withRouter(HomeContainer);