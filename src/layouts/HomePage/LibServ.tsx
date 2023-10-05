export const LibServ =()=>{
    return (
        <div className='container my-5'>
            <div className='row p-4 align-items-center'>
                <div className='col-lg-7 p-3'>
                    <h1 className='display-4 fw-bold'>Cannot find what you requested.</h1>
                    <p className='lead'>
                        We are sorry, but the page you are looking for is not available.
                    </p>
                    <div className='d-grid gap-2 justify-content-md-start mb-4 mb-lg-3'>
                        <a className='btn main-color btn-lg text-white' href='#'>
                            Sign up
                        </a>
                    </div>
                </div>
                <div className='col-lg-4 offset-lg-1 shadow-lg lost-image'></div>
            </div>
        </div>
    );
}