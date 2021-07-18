import React, {useState} from "react";
import "./styles.css";
import Navigation from "./components/Navigation";
import Scene3d from "./scene3d";


export default function App() {

const [rClick,setRClick]= useState(0.5);
const [gClick,setGClick]= useState(0.5);
const [bClick,setBClick]= useState(0.5);
const [xClick,setXClick]= useState(1);
const [yClick,setYClick]= useState(1);
const [zClick,setZClick]= useState(1);

/****************Onchanges****************/
const onChangeR = (e) => {
  setRClick(e.target.value);
}
const onChangeG = (e) => {
  setGClick(e.target.value);
}
const onChangeB = (e) => {
  setBClick(e.target.value);
}
const onChangeX = (e) => {
  setXClick(e.target.value);
}
const onChangeY = (e) => {
  setYClick(e.target.value);
}
const onChangeZ = (e) => {
  setZClick(e.target.value);
}
/***************IF RGB********************/
if(rClick  == 1) {
  alert('Вы достигли предела значения R');
}
if(rClick  == 0) {
  alert('Вы достигли минимума значения R');
}
if( gClick == 1) {
  alert('Вы достигли предела значения G');
}
if( gClick == 0) {
  alert('Вы достигли минимума значения G');
}
if( bClick == 1) {
  alert('Вы достигли предела значения B');
}
if( bClick == 0) {
  alert('Вы достигли минимума значения B');
}

/***************IF XYZ*****************/ 
if(xClick  == 10) {
  alert('Вы достигли предела значения X');
}
if(xClick  == 0) {
  alert('Вы достигли минимума значения X');
}
if( yClick == 10) {
  alert('Вы достигли предела значения Y');
}
if( yClick == 0) {
  alert('Вы достигли минимума значения Y');
}
if( zClick == 10) {
  alert('Вы достигли предела значения Z');
}
if( zClick == 0) {
  alert('Вы достигли минимума значения Z');
}

  return (
    <div className='container'>
      <div className='SceneContainer'>
      <Scene3d 
              rClick={rClick}
              gClick={gClick}
              bClick={bClick}
              xClick={xClick}
              yClick={yClick}
              zClick={zClick}
      />
      </div>
      <div className='buttonContainer'>
      <Navigation 
      rClick={rClick} setRClick={setRClick} onChangeR={onChangeR}
      gClick={gClick} setGClick={setGClick} onChangeG={onChangeG}
      bClick={bClick} setBClick={setBClick} onChangeB={onChangeB}
      xClick={xClick} setXClick={setXClick} onChangeX={onChangeX}
      yClick={yClick} setYClick={setYClick} onChangeY={onChangeY}
      zClick={zClick} setZClick={setZClick} onChangeZ={onChangeZ}
      
      />
      </div>

    </div>
  );
}
