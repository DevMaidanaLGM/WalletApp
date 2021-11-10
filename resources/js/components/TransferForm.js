import React, { useEffect,useState } from 'react';


export default function TransferForm(form, onChangeHandler){
//const TransferForm = ({form, onChange}) => (

  /*   useEffect(function () {
        console.log('render transferForm!');
        console.log(onChangeHandler.onChangeHandler);
      }); */



    const [input, setInput] = useState('')

    useEffect(() => {

        // do anything only one time if you pass empty array []
        // keep in mind, that component will be rendered one time (with default values) before we get here
        console.log('render transferForm!');
        console.log(onChangeHandler);
        console.log(onChangeHandler.onChangeHandler);
      }, [] )


      function onChange (e){
        onChangeHandler.onChangeHandler(e);
      }

    return(
<form className="form-inline justify-content-center">
                        <div className="form-goup mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Description"
                                name="description"
                                value={form.description}
                                onChange={
                                    (e) => onChange(e)}

                            />
                        </div>
                        <div className="input-group ms-sm-2 mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text">$</div>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                name="amount"
                                value={form.amount}
                                onChange={(e) => onChange(e)}

                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary mb-2"
                        >
                            Add
                        </button>

    </form>
)
}
