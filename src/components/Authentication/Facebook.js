import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import axios from 'axios';

import config from '../../config';


import FacebookLogin from 'react-facebook-login'

class Facebook extends Component {

  constructor(props) {
    super(props);

    this.state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        lastname: "",
        age: 0,
        username: "",
        email: '',
        avatar: '',
        sex: "",
        password: ""
    }

    this.componentClicked = this.componentClicked.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
  }

  componentClicked() {
    console.log("Clicked")
  }

  async responseFacebook(response) {
    console.log(response)

    this.setState({
        name: response.first_name,
        lastname: response.last_name,
        age: 0,
        username: response.email.split('@')[0],
        email: response.email,
        avatar: response.picture.data.url,
        sex: 'O',
        password: 'password'
    })


    var path = '/api/v1/users/people/';
    var url = config.urlServer + path;
    var token = 'token-key';

    var data = undefined;

    // CORS Configuration
    axios.defaults.withCredentials = true;
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";

    var {
      name,
      lastname,
      age,
      username,
      password,
      email,
      sex,
      avatar
    } = this.state;


    var data = await axios.post(url, {
      name: name,
      lastName: lastname,
      age: age,
      nickname: username,
      password: password,
      avatar: avatar,
      mail: email,
      token: token,
      role: 1, // Role 1 ==> Usuario
      sex: sex
    }).then((response) => {
      data = response.data;
      console.log(data);

      return data;
    })

    if(data.status === 400 && data.message === "USERNAME_ALREADY_EXISTS") {
        // alert('Ya tiene una cuenta registrada, por favor inicie sesion');
    }

    // Iniciar Sesion
    path = '/api/v1/users/api-token-auth/';

    url = config.urlServer + path;

    var {
      username,
      password
    } = this.state;

    data = await axios.post(url, {
      username: username,
      password: password
    })
    .then(response => {
      data = response.data;
      console.log(data);

      return data;
    })
    .catch(error => {
      alert('Ocurrio un Error');
    });

    if(data.status === 400 && data.message === 'INCORRECT_PASSWORD_OR_USERNAME') {
        alert('Nombre de Usuario o Contraseña Incorrecta')
    }

    if(data.status === 400 && data.message === 'USERNAME_OR_PASSWORD_IS_NONE') {
        alert('Nombre de Usuario o Contraseña Incorrecta')
    }

    if(data.status === 200 && data.message === 'OK') {
        localStorage.removeItem('TOKEN');
        localStorage.setItem('TOKEN', data.Token);
        this.props.history.push('/')
    }

  }

  render() {
    let fbComponent;

    if(this.state.isLoggedIn){
        fbComponent = null;
    } else {
        fbComponent = (
            <FacebookLogin
                appId="1029172187420220"
                autoLoad={true}
                fields="name,email,picture,last_name,first_name"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
                cssClass="btn btn-social btn-facebook btn-lg btn-block"
                textButton=" Registrarse Con Facebook"
                icon="fab fa-facebook-square"
            />
        )
    }

    return (
      <div >
        {fbComponent}
      </div>
    )
  }
}

export default withRouter(Facebook);