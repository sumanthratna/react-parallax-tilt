import React from 'react';

import DemoTab from 'react-demo-tab';
import Demo from './EventTiltAngle.demotab';

const code = `import React, { PureComponent } from 'react';

import Tilt from '../../src';
import DefaultComponent from '../_DefaultComponent/DefaultComponent';
import './EventTiltAngle.demotab.scss';

class EventTiltAngle extends PureComponent {
  state = {
    tiltAngleX: 0,
    tiltAngleY: 0,
  };

  onMove = (tiltAngleX, tiltAngleY) => {
    this.setState({
      tiltAngleX,
      tiltAngleY,
    });
  };

  render() {
    const { tiltAngleX, tiltAngleY } = this.state;

    return (
      <div className="event-tilt-angle">
        <Tilt onMove={this.onMove}>
          <DefaultComponent />
        </Tilt>
        <Tilt tiltAngleXManual={tiltAngleX} tiltAngleYManual={tiltAngleY}>
          <div className="component-tilt">
            Component tilt:
            <div className="row">
              x axis:<div>{tiltAngleX.toFixed(2)}°</div>
            </div>
            <div className="row">
              y axis:<div>{tiltAngleY.toFixed(2)}°</div>
            </div>
          </div>
        </Tilt>
      </div>
    );
  }
}

export default EventTiltAngle;
`;

const style = `@import '../ReactParallaxTilt.scss';

.event-tilt-angle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .component-tilt {
    font-style: italic;
    margin-top: 30px;
    font-size: 24px;
    text-align: center;
    border: 2px solid black;
    border-radius: 8px;
    padding: 10px;

    .row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
    }
  }
}
`;

const _EventTiltAngle = () => (
  <DemoTab code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </DemoTab>
);

export default _EventTiltAngle;
