import React from "react";
import Card from "../Card/Card";
import './cardList.css';

const CardList = ({ handy }) => {
    const cardComponent = handy.map((user,i) => {
        return (
            <Card
                key={i} 
                id={user.id} 
                name={user.name} 
                skill={user.skill} 
                ratings={user.ratings}
            />
        );
    });
    return (
        <div className="card-list">
        {cardComponent}
        </div>
    
    );
}

export default CardList;