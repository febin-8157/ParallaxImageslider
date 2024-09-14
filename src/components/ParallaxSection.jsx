
import React from 'react';
import { Parallax } from 'react-parallax';
import './ParallaxSection.css'; 
import ImageSlider from './ImageSlider';
import Header from './Header'
import Button from 'react-bootstrap/Button';
const ParallaxSection = () => {
  return (
    <div>
        <Header/>
      <Parallax
        blur={0}
        bgImage={'https://images.squarespace-cdn.com/content/v1/599c75ede9bfdfe898f03f2a/1723913128080-JI8AOI6Z0NRZN2P19ZQ2/7.jpeg?format=2500w'}
        bgImageAlt="the background"
        strength={500}
        className="parallax-container"
      >
        
        <div className="content">
          <img style={{width:'800px',height:'300px'}} src="https://images.squarespace-cdn.com/content/v1/599c75ede9bfdfe898f03f2a/1503443109830-MPY9LBAY5IH18MWEUNEM/Supernatural-Logo.png?format=1500w" alt="" />
          <img style={{width:'800px',height:'600px'}} src="https://images.squarespace-cdn.com/content/v1/599c75ede9bfdfe898f03f2a/fea24f99-e4a1-45e9-b096-58b0c4351cc6/Dye-Free+Header.png?format=1500w" alt="" />
        </div>
      </Parallax>
      <div className="content-section">
        <div className="row">
          <div className="col-md-6">
            <img style={{width:'600px',height:'500px'}} src="https://images.squarespace-cdn.com/content/v1/599c75ede9bfdfe898f03f2a/419f19c0-f625-419b-905d-e04384d456b5/Untitled+design+%281%29.png?format=1000w" alt="" />
          </div>


          <div className="col-md-6 ">
            <h1 className='fw-bold'>Wild imaginations, natural formulations.</h1>
            <p className='fs-3 mt-4'> 
Colorful baking is full of controversy. So we’re reinventing it with ingredients you can feel good about, American manufacturing, colors from plants, and plenty of creativity.

</p>
          </div>
        </div>
      </div>
      <Parallax
        blur={0}
        bgImage={'https://images.squarespace-cdn.com/content/v1/599c75ede9bfdfe898f03f2a/1724078169153-BJ7QU9C87ZUVB6WKX1O5/Dye-Free+Decorations+For+Healthier+Baking+%28960+x+500+px%29+%281%29.png?format=2500w'}
        bgImageAlt="the background"
        strength={500}
        className="parallax-container"
      >
        <div className="content">
          <div className="row ">
            <div className="col-md-4 ">
              <img style={{width:'300px',height:'300px'}} src="https://images.squarespace-cdn.com/content/v1/599c75ede9bfdfe898f03f2a/102efb73-c78f-4424-8f5b-b758e48b1819/2.png?format=750w" alt="" />
              <p className='fs-5 fw-bolder'>Our colorful baking ingredients get their bold hues from highly concentrated plants and veggies, not chemicals.</p>
              <Button className='w-50 bg-primary text-light fw-bolder fs-4 ' variant="primary">Shop</Button>{' '}
            </div>

            <div className="col-md-4">
            <img style={{width:'300px',height:'300px'}} src="https://images.squarespace-cdn.com/content/v1/599c75ede9bfdfe898f03f2a/d979efbe-8932-4288-95d9-0363678bcee9/1.png?format=750w" alt="" />
            <p className='fs-5 fw-bolder'>The best parties have room for everyone. So all our products are vegan, Kosher, and made without common allergens.</p>
              <Button className='w-50 bg-primary text-light fw-bolder fs-4 ' variant="primary">Our Story</Button>{' '}

            </div>

            <div className="col-md-4">
            <img style={{width:'300px',height:'300px'}} src="https://images.squarespace-cdn.com/content/v1/599c75ede9bfdfe898f03f2a/eb26ee42-5b1b-4ee8-bedf-5a832af3c829/3.png?format=750w" alt="" />
            <p className='fs-5 fw-bolder'>Real ingredients, real performance, real imagination. Get inspired for your next kitchen activity.</p>
              <Button className='w-50 bg-primary text-light fw-bolder fs-4 ' variant="primary">Recipes</Button>{' '}

            </div>
          </div>
        </div>
      </Parallax>
      <div className="content-section">
        <ImageSlider/>
        <div className="row mt-5">
          <div className="col-md-3" ><img style={{height:'500px'}} src="https://images.squarespace-cdn.com/content/v1/599c75ede9bfdfe898f03f2a/1726241690403-YKA9Y3GULJXPUAQQWAB3/image-asset.jpeg?format=500w" alt="" /></div>
          <div className="col-md-3"><img style={{height:'500px', width:'300px'}} src="https://images.squarespace-cdn.com/content/v1/599c75ede9bfdfe898f03f2a/1724183075422-MVK8EN1MZQZ48C04HAV4/image-asset.jpeg?format=500w" alt="" /></div>
          <div className="col-md-3"><img style={{height:'500px', width:'300px'}} src="https://images.squarespace-cdn.com/content/v1/599c75ede9bfdfe898f03f2a/1722548996041-4O7T9GV2AUSYLW3LOL13/image-asset.jpeg?format=500w" alt="" /></div>
          <div className="col-md-3"><img style={{height:'500px', width:'300px'}} src="https://images.squarespace-cdn.com/content/v1/599c75ede9bfdfe898f03f2a/1721674956821-XXDR3J9VZHA2XXTHRG5V/image-asset.jpeg?format=500w" alt="" /></div>
        </div>

        <div className="row mt-5">
          <div className="col-md-3"><img style={{height:'500px', width:'300px'}} src="https://images.squarespace-cdn.com/content/v1/599c75ede9bfdfe898f03f2a/1720715258187-V9UBZF3T6R3ES5LK96HE/image-asset.jpeg?format=500w" alt="" /></div>
          <div className="col-md-3"><img style={{height:'500px', width:'300px'}} src="https://images.squarespace-cdn.com/content/v1/599c75ede9bfdfe898f03f2a/1713371457524-BM9U8S22OI6UPP9LCW7J/image-asset.jpeg?format=500w" alt="" /></div>
          <div className="col-md-3"><img style={{height:'500px', width:'300px'}} src="https://images.squarespace-cdn.com/content/v1/599c75ede9bfdfe898f03f2a/1710519407597-K2TCDKOI35DYG2ICDKNO/image-asset.jpeg?format=750w" alt="" /></div>
          <div className="col-md-3"><img style={{height:'500px', width:'300px'}} src="https://images.squarespace-cdn.com/content/v1/599c75ede9bfdfe898f03f2a/1709750290341-WNV0W6FTV7VBWDIW8ICA/image-asset.jpeg?format=500w" alt="" /></div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;
