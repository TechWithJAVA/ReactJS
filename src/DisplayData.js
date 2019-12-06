import React from 'react';
   
   const DisplayData =(props) =>{
        return (
            <div className="App">
                <table className="table table-borderd">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.phoneNumber}</td>
                                <td>{item.email}</td>
                                <td>
                                <button className="btn btn-success" onClick={() => props.onEdit(index)}style={{marginLeft: '10px'}}>Edit</button>
                                <button className="btn btn-success" onClick={() => props.onDelete(index)} style={{marginLeft: '10px'}}>Delete</button> 
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          );
    }

    export default DisplayData;