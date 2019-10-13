import React, { Component } from 'react';

import './CheckInOwner.css';

export default class CheckInOwner extends Component {
  render() {
    return (
      <div className="container checkin-owner">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <br/>

            <div className="card">
              <div className="card-header">
                <h3 className="text-center title-login">Registrar <span className="badge badge-residenciapp-green">Propietario</span></h3>
              </div>
              <div className="card-body">

                <form>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="name">
                        <i className="fas fa-address-card"></i>
                      </span>
                    </div>
                    <input type="text" className="form-control" aria-label="Default" aria-describedby="name" placeholder="Ingrese su Nombre" />
                    <div className="input-group-prepend">
                      <span className="input-group-text">Nombre</span>
                    </div>
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="lastname">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <input type="text" className="form-control" aria-label="Default" aria-describedby="lastname" placeholder="Ingrese su Apellido" />
                    <div className="input-group-prepend">
                      <span className="input-group-text">Apellido</span>
                    </div>
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="age">
                        <i className="fas fa-sort-numeric-up"></i>
                      </span>
                    </div>
                    <input type="number" className="form-control" aria-label="Default" aria-describedby="age" placeholder="Ingrese su Edad"/>
                    <div className="input-group-prepend">
                      <span className="input-group-text">Edad</span>
                    </div>
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="username">
                        <i className="fas fa-user"></i>
                      </span>
                    </div>
                    <input type="text" className="form-control" aria-label="Default" aria-describedby="username" placeholder="Ingrese su Nombre de Usuario" />
                    <div className="input-group-prepend">
                      <span className="input-group-text">Username</span>
                    </div>
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="email">
                        <i className="fas fa-envelope"></i>
                      </span>
                    </div>
                    <input type="email" className="form-control" aria-label="Default" aria-describedby="email" placeholder="Ingrese su Correo" />
                    <div className="input-group-prepend">
                      <span className="input-group-text">Correo</span>
                    </div>
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <label className="input-group-text">
                        <i class="fas fa-file"></i>
                      </label>
                    </div>
                    <select className="custom-select" id="document-type">
                      <option defaultValue="N">Elegir Tipo de Documento...</option>
                      <option value="CC">Cedula de Ciudadania</option>
                      <option value="TI">Tarjeta de Identidad</option>
                    </select>
                    <div className="input-group-prepend">
                      <label className="input-group-text" htmlFor="document-type">Tipo de Doc</label>
                    </div>
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="id-number">
                        <i class="fas fa-passport"></i>
                      </span>
                    </div>
                    <input type="number" className="form-control" aria-label="Default" aria-describedby="id-number" placeholder="Ingrese su Numero de Documento"/>
                    <div className="input-group-prepend">
                      <span className="input-group-text">N° de Documento</span>
                    </div>
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <label className="input-group-text">
                      <i className="fas fa-users"></i>
                      </label>
                    </div>
                    <select className="custom-select" id="sex">
                      <option defaultValue="N">Elegir Sexo...</option>
                      <option value="F">Femenino</option>
                      <option value="M">Masculino</option>
                      <option value="O">Otro</option>
                    </select>
                    <div className="input-group-prepend">
                      <label className="input-group-text" htmlFor="sex">Sexo</label>
                    </div>
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="password">
                        <i className="fas fa-unlock"></i>
                      </span>
                    </div>
                    <input type="password" className="form-control" aria-label="Default" aria-describedby="password" placeholder="Ingrese su Contraseña" />
                    <div className="input-group-prepend">
                      <span className="input-group-text">Contraseña</span>
                    </div>
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="password-again">
                        <i className="fas fa-lock"></i>
                      </span>
                    </div>
                    <input type="text" className="form-control" aria-label="Default" aria-describedby="password-again" placeholder="Confirme su Contraseña" />
                    <div className="input-group-prepend">
                      <span className="input-group-text">Repetir Contraseña</span>
                    </div>
                    
                  </div>

                
                  <button type="submit" className="btn btn-residenciapp-green btn-lg btn-block">Submit</button>
                  <br />

                  <p className="text-center">
                    <a href="#" className="badge badge-residenciapp-green">¿Ya tienes una cuenta? Inicia Sesión.</a>
                  </p>
                </form>
              </div>
            </div>


          </div>
        </div>
      </div>
    )
  }
}
