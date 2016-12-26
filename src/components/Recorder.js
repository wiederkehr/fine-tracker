import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import { ActionForm, EmotionForm, EventForm, DimensionsForm, TriggerForm } from '../components/Form';
import './Recorder.css';

export class Recorder extends Component {
  render() {
    switch (this.props.step) {
      case 0:
        return (
          <ReactCSSTransitionGroup
            transitionName="RecorderTransition"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <div className='Recorder' key={0}>
              <EmotionForm
                record={this.props.record}
                onChange={this.props.onChange}
                onSubmit={this.props.onSubmit}
              />
            </div>
          </ReactCSSTransitionGroup>
        )
      case 1:
        return (

          <ReactCSSTransitionGroup
            transitionName="RecorderTransition"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <div className='Recorder' key={1}>
              <EventForm
                record={this.props.record}
                onChange={this.props.onChange}
                onSubmit={this.props.onSubmit}
              />
            </div>
          </ReactCSSTransitionGroup>
        )
      case 2:
        return (
          <ReactCSSTransitionGroup
            transitionName="RecorderTransition"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <div className='Recorder' key={2}>
              <DimensionsForm
                record={this.props.record}
                onChange={this.props.onChange}
                onSubmit={this.props.onSubmit}
              />
            </div>
          </ReactCSSTransitionGroup>
        )
      case 3:
        return (
          <ReactCSSTransitionGroup
            transitionName="RecorderTransition"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <div className='Recorder' key={3}>
              <TriggerForm
                record={this.props.record}
                onChange={this.props.onChange}
                onSubmit={this.props.onSubmit}
              />
            </div>
          </ReactCSSTransitionGroup>
        )
      case 4:
        return (
          <ReactCSSTransitionGroup
            transitionName="RecorderTransition"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <div className='Recorder' key={4}>
              <ActionForm
                record={this.props.record}
                onChange={this.props.onChange}
                onSubmit={this.props.onSubmit}
              />
            </div>
          </ReactCSSTransitionGroup>
        )
      case 5:
        return (
          <ReactCSSTransitionGroup
            transitionName="RecorderTransition"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <div className='Recorder' key={5}>
              <table style={{marginBottom:'30px', width:'100%'}}>
                <thead>
                  <tr>
                    <th style={{textAlign: 'left'}}>Dimension</th>
                    <th style={{textAlign: 'right'}}>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Emotion</td><td style={{textAlign: 'right'}}>{this.props.record.emotion}</td></tr>
                  <tr><td>Event</td><td style={{textAlign: 'right'}}>{this.props.record.event}</td></tr>
                  <tr><td>Trigger</td><td style={{textAlign: 'right'}}>{this.props.record.trigger}</td></tr>
                  <tr><td>Action</td><td style={{textAlign: 'right'}}>{this.props.record.action}</td></tr>
                  <tr><td>Arousal</td><td style={{textAlign: 'right'}}>{this.props.record.arousal}</td></tr>
                  <tr><td>Conduciveness</td><td style={{textAlign: 'right'}}>{this.props.record.conduciveness}</td></tr>
                  <tr><td>Controllability</td><td style={{textAlign: 'right'}}>{this.props.record.controllability}</td></tr>
                  <tr><td>Intensity</td><td style={{textAlign: 'right'}}>{this.props.record.intensity}</td></tr>
                  <tr><td>Valence</td><td style={{textAlign: 'right'}}>{this.props.record.valence}</td></tr>
                </tbody>
              </table>
            </div>
          </ReactCSSTransitionGroup>
        )
      default:
        return (
          <div className='Recorder'>Default</div>
        )
    }
  }
}
