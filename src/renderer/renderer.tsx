import * as React from 'react';
import { render } from 'react-dom';
import Application from './components/Application';

import * as PIXI from 'pixi.js'
import animate = require('pixi-animate');

const findRoot = require('find-root');
const root = findRoot(__dirname);
const eyeSourcePath = root + '/assets/eye/eye.js';
const basePath = root + '/assets/eye';
const eyeSource: any = require(eyeSourcePath);
console.log(eyeSource);
let eyeInstance: any = null;

const canvasElement: HTMLCanvasElement = document.getElementById("stage") as HTMLCanvasElement;

var renderer = PIXI.autoDetectRenderer(1280, 720, {
    view: canvasElement,
    backgroundColor: 0x0,
    antialias: true
});

var stage: PIXI.Container = new PIXI.Container();
animate.load(eyeSource.library.eye, stage, loaderCallback as any, basePath);
function update() {
    renderer.render(stage);
    requestAnimationFrame(update);
}
update();

function loaderCallback(instance: any, loader: any):void {
    console.log(instance, loader);
    eyeInstance = instance;
    eyeInstance.gotoAndStop('idle');
    eyeInstance.eye.eye_blue.visible = false;

    render(
        <Application eyeInstance={eyeInstance}/>,
        document.getElementById('app')
    );
}
