import React from 'react';
import bg from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';
const Banner = () => {
    return (
        <div style={{
            background:`url(${bg})`,
            backgroundSize:'cover'}} 
            className="hero lg:min-h-screen bg-no-repeat bg-center lg:h-[736px] ">
  <div className="hero-content  flex-col lg:flex-row-reverse">
    <img src={chair} className="lg:max-w-lg md:max-w-md sm:max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;