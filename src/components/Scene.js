import React from 'react';
import ReactSVG from 'react-svg';
import classNames from 'classnames';
import { scaleLinear } from 'd3-scale';
import './Scene.css';

export const Scene = ({ record }) => {
  return (
    <div className='Scene'>
      <Sky record={ record } />
      <Aura record={ record } />
      <Hummock record={ record } />
      <Bummock record={ record } />
      <Wave record={ record } />
      <Sea />
    </div>
  )
};

export const Sky = ({ record }) => {
  const conduciveness = scaleLinear().domain([0, 1, 3, 5]).range(["#FF5627", "#FF7D54", "#E5CCC5" , "#B6E2F4"]);
  const topColor = conduciveness(record.conduciveness);
  const bottomColor = conduciveness(record.conduciveness - 1);
  return (
    <div
      className='Sky'
      style={{
        background: "linear-gradient(" + topColor + " 50%, " + bottomColor + ")"
      }}
    >
    </div>
  )
};

export const Aura = ({ record }) => {
  const filename = 'A_' + record.action;
  const path = 'assets/vectors/aura/' + filename + '.svg';
  return (
    <div className='Aura'>
      <ReactSVG path={ path } />
    </div>
  )
};

export const Hummock = ({ record }) => {
  const filename = "Key_" + record.valence + "_" + record.intensity + "_" + record.controllability;
  const path = 'assets/vectors/hummock/' + filename + '.svg';
  return (
    <div className='Hummock'>
      <ReactSVG path={ path } />
    </div>
  )
};

export const Bummock = ({ record }) => {
  const triggers = record.trigger;
  const allTriggers = triggers.map((trigger, i) => {
    const filename = 'T' + ( 3 - i) + '_' + record.trigger[i];
    const path = 'assets/vectors/bummock/' + filename + '.svg';
    return (
      <ReactSVG path={ path } key={ i }/>
    )
  });

  return (
    <div className={ classNames('Bummock', 'Bummock--' + triggers.length) }>
      { allTriggers }
    </div>
  )
};

export const Wave = ({ record }) => {
  const filename = 'Waves_' + record.arousal;
  const path = 'assets/vectors/wave/' + filename + '.svg';
  return (
    <div className='Wave'>
      <ReactSVG path={ path } />
    </div>
  )
};

const random = (m, n) => {
  return Math.floor( Math.random() * (n - m + 1) ) + m;
};

const Bubble = () => {
  const size = random(40,80) / 10;
  const style = {
    top: random(20,80) + '%',
    left: random(0,95) + '%',
    width: size + 'px',
    height: size + 'px',
    animationDelay: random(0,30)/10 + 's',
  }
  return <span className='SeaBubble' style={style}></span>
};

export const Sea = () => {

  const bubbles = [];
  for(let i = 0; i <= 10; i++) {
    bubbles.push(<Bubble key={i} />);
  }

  return (
    <div className='Sea'>
      <div className='SeaBackground'>{ bubbles }</div>
      <div className='SeaForeground'></div>
    </div>
  )
};
