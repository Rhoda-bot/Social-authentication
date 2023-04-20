import React from 'react';

const LeaderBoard = () => {
    return(
        <>
            <div className="leaderboard">
                <div className="container-fluid">
             
                <div className="row py-2">
                <div className="col-md-2">
                        <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option value="1">Weekly</option>
                        <option value="2">All time</option>
                       
                        </select>
                </div>
                <div className="col-md-3 py-3"></div>
                    <div className="col-md-3 text-center mb-3 profile__cta d-inline-block p-1">
                            <button  className="leaderboard--global">global</button>
                            <button  className="leaderboard--national">National</button>
                    </div>
                    </div>
                    <div className="leaderboard__hero py-5">
                        <div className="leaderboard__row row mx-auto">
                            <div className="col-4 text-center px-0">
                                <div className="leaderboard__row--second">
                                    <p>2</p>
                                    <img src="/assets/p/man7.png" alt="" />
                                    <p>Qeola</p>
                                    <span></span>
                                    <h5>48848</h5>
                                </div>
                            </div>
                            <div className="col-4 text-center px-0">
                                <img src="/assets/icons/crown.png" className='img-fluid leaderboard__row--first-crown' alt="" />
                                <div className="leaderboard__row--first py-3">
                                    <img src="/assets/p/man7.png" alt=""  className='img-fluid leaderboard__row--first-img'/>
                                    <p>Qeola</p>
                                    <span></span>
                                    <h5>48848</h5>
                                </div>
                            </div>
                            <div className="col-4 text-center px-0">
                            <div className="leaderboard__row--third">
                                    <p>3</p>
                                    <img src="/assets/p/lady7.png" alt="" />
                                    <p>Qeola</p>
                                    <span></span>
                                    <h5>48848</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="leaderboard__listing">
                            
                        </div>
                    </div>
                   
                   
                </div>
            </div>
        </>
    )
}
export default LeaderBoard;