import image from '../images/icon-star.svg';
import image2 from '../images/image-anne.jpg'
import image3 from '../images/image-irene.jpg'
import image4 from '../images/image-colton.jpg'
import './Social.css';
const Social = () => {
    return (
        <div className='main'>
            <section>
                <div className='container'>
                    <div className='content'>
                        <div className="comment">
                            <h1 className="comment-1">10,000+ of our users love our products</h1>
                            <p className="comment-2">We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
                        </div>
                        <div className='star'>
                            <span className='review'>
                                <img className='stars' src={image} alt='star' />
                                <img className='stars' src={image} alt='star' />
                                <img className='stars' src={image} alt='star' />
                                <img className='stars' src={image} alt='star' />
                                <img className='stars' src={image} alt='star' />
                                <p className='status'>Rated 5 Stars in Reviews</p>
                            </span>
                            <span className='guru'>
                                <img className='stars' src={image} alt='star' />
                                <img className='stars' src={image} alt='star' />
                                <img className='stars' src={image} alt='star' />
                                <img className='stars' src={image} alt='star' />
                                <img className='stars' src={image} alt='star' />
                                <p className='status'>Rated 5 Stars in Guru</p>
                            </span>
                            <span className='tech'>
                                <img className='stars' src={image} alt='star' />
                                <img className='stars' src={image} alt='star' />
                                <img className='stars' src={image} alt='star' />
                                <img className='stars' src={image} alt='star' />
                                <img className='stars' src={image} alt='star' />
                                <p className='status'>Rated 5 Stars in BasicTech</p>
                            </span>
                        </div>
                    </div>
                    <div className='boxes'>
                        <div className='colton'>
                            <div className='top_box'>
                                <img className='photo' src={image4} alt='colton' />
                                <h5 className='p_box'>Colton Smith</h5>
                                {/* <p className='buyer'>Verified Buyer</p> */}
                                <p className="p_box_2"> "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"</p>
                            </div>
                        </div>
                        <div className='irene'>
                            <div className='top_box'>
                                <img className='photo' src={image3} alt='irene' />
                                <h5 className='p_box'>Irene Roberts</h5>
                                {/* <p className='P_box_p'>Verified Buyer</p> */}
                                <p className="p_box_2"> "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."</p>
                            </div>
                        </div>
                        <div className='anne'>
                            <div className='top_box'>
                                <img className='photo' src={image2} alt='anne' />
                                <h5 className='p_box'>Anne Wallece</h5>
                                {/* <p className='P_box_p'>Verified Buyer</p> */}
                                <p className="p_box_2"> "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Social;