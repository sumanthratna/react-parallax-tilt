import React from 'react';

import Tilt from '../../src';
import './MultipleTilt.demotab.scss';
import DefaultComponent from '../_DefaultComponent/DefaultComponent';

const MultipleTilt = () => (
  <div className="multiple-tilt">
    <div className="col">
      <Tilt>
        <DefaultComponent />
      </Tilt>
      <Tilt>
        <DefaultComponent />
      </Tilt>
    </div>
    <div className="col">
      <Tilt>
        <DefaultComponent />
      </Tilt>
      <Tilt>
        <DefaultComponent />
      </Tilt>
    </div>
  </div>
);

export default MultipleTilt;
