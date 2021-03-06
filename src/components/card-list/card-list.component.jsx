import React from "react";
import './card-list.style.css';
import { Card } from "../Card/card.component";

export const CardList = props =>{
    console.log('cardlistcomponent');
    return <div className="card-list">
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster}></Card>
          ))}
    </div>
}