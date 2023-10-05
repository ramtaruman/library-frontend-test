import React from 'react'
export const ReturnBook = () =>{
    return (
        <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
            <div className='text-center'>
                <img src={require('./../../Images/BooksImages/p_sond1.png') }
                     width='160' height='240'
                     alt="Book"/>
                <h6 className='mt-2'>Book</h6>
                <p>সন্দেশ</p>
                <a className='btn main-color text-white' href='#'>Borrow</a>
            </div>
        </div>
    );
}