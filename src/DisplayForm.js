import React from 'react';

    const DisplayForm =(props) =>{
        const {id, name, phoneNumber, email} = props.selectedData;
        return (
            <div className="App">
            <div className="well well-small">
            <div className="form-group">
                <div>
                    <label>
                        ID:
                        <input 
                            className="form-control"
                            placeholder="id"
                            name="id"
                            value={id}
                            onChange={props.onChangeId}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Name:
                        <input className="form-control"
                               placeholder="name"
                               name="name"
                               value={name}
                               onChange={props.onChangeName}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Phone:
                        <input className="form-control"
                               name="phoneNumber"
                               placeholder="phone number"
                               value={phoneNumber}
                               onChange={props.onChangePhone}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input className="form-control"
                            placeholder="email"
                            name="email"
                            value={email}
                            onChange={props.onChangeEmail}
                        />
                    </label>
                </div>
                <div>
                    <button 
                        className="btn btn-primary"
                        onClick={props.submit}
                    >
                        Submit
                    </button>
                </div>
            </div>
            </div>
        </div>
        );
    }

export default DisplayForm;