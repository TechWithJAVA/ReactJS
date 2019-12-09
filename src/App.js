import React, {Component} from 'react';
import DisplayData from './DisplayData';
import DisplayForm from './DisplayForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      idError:'',
      nameError:'',
      phoneNameError:'',
      emailError:'',
      selectedData: {
        id: '',
        name: '',
        phoneNumber: '',
        email: '',
        index: -1
      }
    }
  }

  onChange = (event) => {
       this.setState({
         selectedData: {
           ...this.state.selectedData,
           [event.target.name]: event.target.value
         }
       });
     }
 
  onSubmit = () => {
    const {id, name, phoneNumber, email, index} = this.state.selectedData;
    if(!id){
      const idError="Id can't be blank";
      alert(idError);
      return;
    } else if(id){
      const idError="Id must be at least more than one number ";
      if(isNaN(id) || id < 1 ){
        alert(idError);
        return; 
     }
    }
    if(!name){
      const nameError="Name can't be blank";
      alert(nameError);  
    }else if (name){
      const nameError="Name must be at least 6 characters long";
      const alphaExp=new RegExp(/^[a-zA-Z0-9_]{6,20}$/);
	  
      if(!alphaExp.test(name) || !isNaN(name)){  
      alert(nameError);  
      return ; 
      }
    } 
    if(!phoneNumber){
      let phoneNameError="Phone Number can't be blank";
      alert(phoneNameError);
      return;
    }else if(phoneNumber){
      let phoneNameError="Invalid Phone Number";
      const validPhoneRegex=RegExp(/^\d{10}$/);
      if( !validPhoneRegex.test(phoneNumber)){
        alert(phoneNameError); 
        return;
      }
    }
    if(!email){
      let emailError="Email Id can't be blank";
      alert(emailError); 
      return;
    }else if(email){
    let emailError='Email is not valid!';
      let validEmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if(!validEmailRegex.test(email)){
      alert(emailError);
      return;
    }
    }
    
    if(index === -1) {
      this.setState({
        data: [
          ...this.state.data,
          this.state.selectedData
        ]
      });
    } else {
      const data = [...this.state.data];
      data[index] = {...this.state.selectedData};
      this.setState({
        data
      });
    }
      this.setState({
        selectedData: {
          id: '',
          name: '',
          phoneNumber: '',
          email: '',
          index: -1
        }
    });
  }

  onEdit = (index) => {
    this.setState({
      selectedData: {
        ...this.state.data[index],
        index
      }
    });
  }
  onDelete = (index) => {
    this.setState({
      data: this.state.data.filter((_, i) => i !== index)
    });
}
  render() {
      return (
        <div className="App">
          <DisplayForm
            submit={this.onSubmit}
            selectedData={this.state.selectedData}
            onChangeId={this.onChange}
            onChangeName={this.onChange}
            onChangePhone={this.onChange}
            onChangeEmail={this.onChange}
          />
          <DisplayData
            data={this.state.data}
            onEdit={this.onEdit}
            onDelete={this.onDelete}
          />
        </div>
      );
  }
}

export default App;
