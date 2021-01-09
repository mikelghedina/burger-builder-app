import React, {Component} from 'react'
import Modal from "../../Components/UI/Modal/Modal";
import AuxComponent from "../AuxComponent/auxComponent";


const withErrorHandler =(WrappedComponent, axios)=>{
    return class extends Component{

        constructor(props) {
            super(props);
            this.state={
                error:null
            }
            this.reqInterceptor =axios.interceptors.request.use(req=>{
                this.state={error:null};
                return req;
            });
            this.resInterceptor= axios.interceptors.response.use(res=>res,error => {
                this.state={error:error};
            });
        }


        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = ()=>{
            this.setState({error:null});
        }

        render() {
            return(
                <AuxComponent>
                    <Modal
                        modalClosed={this.errorConfirmedHandler}
                        show={this.state.error}>
                        {this.state.error? this.state.error.message:null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </AuxComponent>
            )
        }
    }
}

export default withErrorHandler;