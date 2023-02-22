import React from 'react';

function FlipCard(props) {
    return (
        <div className="flip-card" tabIndex="0">
          <div className="flip-card-inner">
            <div className="flip-card-front" >
              <h3 className={props.typo}>{props.frontContent}</h3>
            </div>
            <div className="flip-card-back center">
              <h4 className='font'>{props.backContent}</h4>
              <img src={props.backImage} alt="stack" />
            </div>
          </div>
        </div>
    );
}

export default FlipCard;