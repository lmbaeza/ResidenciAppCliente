import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import StudentHousingCard from '../../components/Card/StudentHousingCard';

class StudentHousingCardView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="StudentHousingCardView" className="container">

        <br/>
        <br/>
        <br/>
        
        <div className="row justify-content-center">
          <div className="col-7">

            <h2 align="center" >
              <strong>
                Los sitios mejor valorados para alojarse
              </strong>
            </h2>

            <blockquote className="blockquote text-center">

              <footer className="blockquote-footer">
                Explora alguna de las residencias con mejor valoración de la ciudad
              </footer>

            </blockquote>

          </div>
        </div>

        <div className="card">
          <div className="card-body">
          <div className="row">

            <StudentHousingCard
              title="Nombre de la Residencia"
              img="https://vivienda.uniandes.edu.co/images/img/Individual_04.jpg"
              desc="Pequeña descripción de la Residencia"
              review="152 reviews"
              orders="154 orders"
              url="#"
              price="$1.280.000"
              price_old="$1.980.000"
            />

            <StudentHousingCard
              title="Nombre de la Residencia"
              img="https://vivienda.uniandes.edu.co/images/img/Suite_01.jpg"
              desc="Pequeña descripción de la Residencia"
              review="152 reviews"
              orders="154 orders"
              url="#"
              price="$1.280.000"
              price_old="$1.980.000"
            />

            <StudentHousingCard
              title="Nombre de la Residencia"
              img="https://vivienda.uniandes.edu.co/images/img/Suite_02.jpg"
              desc="Pequeña descripción de la Residencia"
              review="152 reviews"
              orders="154 orders"
              url="#"
              price="$1.280.000"
              price_old="$1.980.000"
            />

            <StudentHousingCard
              title="Nombre de la Residencia"
              img="https://vivienda.uniandes.edu.co/images/img/Suite_04.jpg"
              desc="Pequeña descripción de la Residencia"
              review="152 reviews"
              orders="154 orders"
              url="#"
              price="$1.280.000"
              price_old="$1.980.000"
            />

            <StudentHousingCard
              title="Nombre de la Residencia"
              img="https://vivienda.uniandes.edu.co/images/img/Individual_02.jpg"
              desc="Pequeña descripción de la Residencia"
              review="152 reviews"
              orders="154 orders"
              url="#"
              price="$1.280.000"
              price_old="$1.980.000"
            />

            <StudentHousingCard
              title="Nombre de la Residencia"
              img="https://vivienda.uniandes.edu.co/images/img/Doble_06.jpg"
              desc="Pequeña descripción de la Residencia"
              review="152 reviews"
              orders="154 orders"
              url="#"
              price="$1.980.000"
            />

          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(StudentHousingCardView);