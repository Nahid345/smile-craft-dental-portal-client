import React from 'react'
import treatment from '../../../assets/images/treatment.png'


const Treatment = () => {
    return (
        <div className=" flex  bg-base-100 shadow-xl mx-auto mt-5 ">
            <figure><img className='w-80 ml-28 my-20 rounded-md' src={treatment} alt="Movie" /></figure>
            <div className="ml-20 my-40">
                <h2 className="font-bold text-3xl mb-3">Exceptional Dental <br /> Care, on Your Terms</h2>
                <p>It is a long established fact that a reader will be distracted by the readable <br /> content of a page when looking at its layout. The point of using  Lorem Ipsumis <br /> that it has a more-or-less normal distribution of letters,as opposed to using   <br /> 'Content here, content here', making it  look like readable English. Many desktop  <br />publishing packages and web page</p>
               
                <div>
                    <button className=" btn bg-gradient-to-r from-primary to-secondary text-white mt-3">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Treatment;