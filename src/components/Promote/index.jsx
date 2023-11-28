import React from 'react';
import imageOne from '../../img/image-1.png';
import imageTwo from '../../img/image-2.png';
import imageThree from '../../img/image-3.png';

const Promote = () => {
  return (
    <section className="promote">
      <div className="promote__inner">
        <h2 className="promote__title">This is a copy and 3 pictures module</h2>
        <p className="promote__descr">
          Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard
          seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water
          chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress.
        </p>
        <div className="promote__images">
          <img src={imageOne} alt="Image One" />
          <img src={imageTwo} alt="Image Two" />
          <img src={imageThree} alt="Image Two" />
        </div>
        <h2 className="promote__title">Best picks for woman collection</h2>
        <p className="promote__descr">
          Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard
          seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander.
        </p>
      </div>
      <div className="promote__visible">
        <div className="promote__visible-info">
          <h3 className="promote__visible-title">The title of the component</h3>
          <p className="promote__visible-descr">
            Very visible component to promote something.
          </p>
        </div>
        <div className="">
          <button className="promote__visible-button">Book an Appointment</button>
        </div>
      </div>
    </section>
  );
};

export default Promote;
