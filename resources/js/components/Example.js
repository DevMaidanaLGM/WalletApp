import React, { useEffect,useState } from 'react';
import ReactDOM from 'react-dom';
import TransferList from './TransferList';
import TransferForm from './TransferForm';
import Axios from 'axios';
import { data } from 'jquery';


export default function Example() {



    const [state, setState] = useState({
        money:'',
        transfers: [],
        error: null,
        form: {
            description: '',
            amount: '',
            wallet_id: 1
        }
    })

    useEffect(() => {


        console.log('render example! state: ')
        console.log({state})
        console.log(state.form)

        Axios.get('http://127.0.0.1:8000/api/wallet')
        .then((info) => {
            setState({

                money: info.data.money,
                transfers: info.data.transfers

            })

        })
        .catch((err) => {
            console.log(err)
        })


      }, [] )



      useEffect(() => {
          console.log("Rendering...") //Console log que muestra lo que va pasando con el form
          console.log(state.form)
      })



    function onChangeHandler(e){
        console.log("In the onChangeHandler")
        setState({
            form: {
                ...state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(e.targe.value);
    }



    return (
        <>
            <div className="container">
                <div className="d-column justify-content-center">
                <div className="row justify-content-center">

                    <div className="col-md-12-m-t-md">
                            <p className="title display-4"> $ {state.money} </p>
                    </div>

                    <div className="col-md-12 my-3">

                        {state.form ?
                        <TransferForm
                        form={state.form}
                        onChangeHandler={onChangeHandler}></TransferForm>

                     : <h2>Loading...</h2>}
                    </div>

                </div>
                <div className="align-items-center d-flex justify-content-center">
                    <div className="m-t-md d-block justify-content-between col-10 border-1">
                        <TransferList
                        transfers={state.transfers}
                        ></TransferList>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}


if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
