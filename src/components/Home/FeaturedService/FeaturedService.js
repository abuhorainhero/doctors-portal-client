import React from 'react';
import FeaturedImage from '../../../images/dentalCare.png';

const FeaturedService = () => {
    return (
        <section className="pb-0 pb-md-5 my-5 ">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-5 mb-5 m-md-0">
                        <img className='img-fluid' src={FeaturedImage} alt="" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h2>Exceptional Dental <br /> Care, On your Terms</h2>
                        <p className="text-secondary my-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe, facere tempora excepturi nesciunt, incidunt recusandae dolorem quae inventore, sit repellendus ut tempore rerum maiores molestias eum reiciendis blanditiis? Alias quos commodi, eum sequi quas earum voluptatibus non aut dignissimos nobis, accusamus fugit ipsam maiores eos sit voluptatum quo magnam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex eum facere, voluptate ea, nam suscipit soluta debitis perferendis laudantium repellendus tempora, officia optio maxime? Sed repudiandae doloremque, dolore similique amet corrupti, neque exercitationem dolor ut ipsa dicta itaque qui veniam expedita beatae. Nemo voluptatem magni quisquam ratione earum vitae sint!
                        </p>
                        <button className="buttonStyles">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;