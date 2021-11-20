import React, { useEffect,useState } from 'react';


export default function TransferForm({form, onChangeHandler}){

    const [input, setInput] = useState('')

    useEffect(() => {

        console.log('Rendering transferForm')
        console.log('Form object: ')
        console.log(form);
        console.log('Form description: ');
        console.log(form.description);
        console.log(onChangeHandler);


      }, [] )

    return(



<form className="form-inline justify-content-center">
                        <div className="form-goup mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Description"
                                name="description"
                                onChange={onChangeHandler}

                                value={form.description}

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
                                onChange={(e) => onChange(e)}
                                value={form.amount}

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
