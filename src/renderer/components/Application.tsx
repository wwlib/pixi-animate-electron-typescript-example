import * as React from "react";
import * as ReactBootstrap from "react-bootstrap";

export interface ApplicationProps { eyeInstance: any }
export interface ApplicationState { }

export default class Application extends React.Component < ApplicationProps, ApplicationState > {

    componentWillMount() {
        // this.setState({
        // });
    }

    componentDidMount() {
    }

    onButtonClicked(action: string): void {
        // console.log(`onButtonClicked: ${action}`);
        switch (action) {
            case 'idle':
                this.props.eyeInstance.gotoAndStop('idle');
                this.props.eyeInstance.eye.eye_blue.visible = false;
                break;
            case 'listen':
                this.props.eyeInstance.eye.eye_blue.visible = true;
                break;
            case 'blink':
                this.props.eyeInstance.gotoAndPlay('blink');
                break;
            case 'lookLeft':
                this.props.eyeInstance.gotoAndPlay('to_left');
                break;
            case 'lookRight':
                this.props.eyeInstance.gotoAndPlay('to_right');
                break;
        }
    }

    render() {
        return(
            <div>
                <ReactBootstrap.Button bsStyle={'success'} key={"idle"} style = {{width: 100}}
                    onClick={this.onButtonClicked.bind(this, "idle")}>Idle</ReactBootstrap.Button>
                <ReactBootstrap.Button bsStyle={'success'} key={"listen"} style = {{width: 100}}
                    onClick={this.onButtonClicked.bind(this, "listen")}>Listen</ReactBootstrap.Button>
                <ReactBootstrap.Button bsStyle={'success'} key={"blink"} style = {{width: 100}}
                    onClick={this.onButtonClicked.bind(this, "blink")}>Blink</ReactBootstrap.Button>
                <ReactBootstrap.Button bsStyle={'success'} key={"lookLeft"} style = {{width: 100}}
                    onClick={this.onButtonClicked.bind(this, "lookLeft")}>Look Left</ReactBootstrap.Button>
                <ReactBootstrap.Button bsStyle={'success'} key={"lookRight"} style = {{width: 100}}
                    onClick={this.onButtonClicked.bind(this, "lookRight")}>Look Right</ReactBootstrap.Button>
            </div>
        );
    }
}
