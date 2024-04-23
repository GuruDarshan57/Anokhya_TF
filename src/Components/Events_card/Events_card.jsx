import React from 'react';
import './Events_card.css';
import e1 from '../../Assets/techtalkimg.jpg'
import e2 from '../../Assets/eventsimg.png'
import e3 from '../../Assets/workshopcard.png'

const YourComponent = () => {
  return (
    <div className='cardmaindiv'>
    <div className="eventheadcontainer">
      <div className="eventcontainer">
        <div className="eventcard">
          <div className="eventimgbx">
            <img src={e1} alt="Card 1" className='cardimg' />
          </div>
          <div className="eventcontent">
            <h2>Tech Talk</h2>
            <p>
              Using the fuel alternatives such as Electrical and hydrogen powered technologies instead of fossil fuels
            </p>
          </div>
        </div>

        <div className="eventcard">
          <div className="eventimgbx">
            <img src={e2} alt="Card 2" className="cardimg" />
          </div>
          <div className="eventcontent">
            <h2>Events</h2>
            <p>
              Avoiding the wastage of excess energy generated by renewable sources during unfavourable conditions by Grid technology
            </p>
          </div>
        </div>

        <div className="eventcard">
          <div className="eventimgbx">
            <img src={e3} alt="Card 3" className="cardimg" />
          </div>
          <div className="eventcontent">
            <h2>Workshop</h2>
            <p>
              Adapting a smart measure to avoid the wastage of fuel and minimise its consumption by making the vehicles fuel usage system smart
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default YourComponent;
