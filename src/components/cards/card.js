import React from 'react';

function FlipCard(props) {
    return (
        <div className="flip-card" tabIndex="0">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h3 className={props.typo}>{props.frontContent}</h3>
            </div>
            <div className="flip-card-back">
              <h3>{props.backContent}</h3>
            </div>
          </div>
        </div>
    );
}

export default FlipCard;