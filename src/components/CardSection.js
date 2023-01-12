import React, { Component } from 'react'

export class CardSection extends Component {
    render() {
        return (
            <div>
                <div className="fs-1 fw-bold m-3 text-Capitalize text-info  d-inline p-2 bg-dark d-flex justify-content-center"
                    style={{ fontFamily: 'NHaasGroteskDSPro-65Md', color: " #CA6F1E", marginTop: '3px !important', marginBottom: '0px !important' }}>
                    {this.props.coinName}
                </div>
                <section className="row m-3 mb-0" style={{ marginTop: ' 2px !important' }}>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "#202020", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md', color: " #ffa31a" }}>Market Cap 24Hrs</h6>
                            <p className="card-text fs-5" style={{ color: " #7FFF00" }}>
                                {this.props.mCap24} %
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "#202020", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md', color: " #ffa31a" }}>All Time High</h6>
                            <p className="card-text fs-5" style={{ color: " #7FFF00" }}>
                                ${this.props.ath}
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "#202020", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md', color: " #ffa31a" }}>All Time High</h6>
                            <p className="card-text fs-5" style={{ color: " #7FFF00" }}>
                                ${this.props.atl}
                            </p>
                        </div>
                    </div>

                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "#202020", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md', color: " #ffa31a" }}>Positive Sentiments </h6>
                            <p className="card-text  fs-5" style={{ color: " #7FFF00" }}>
                                {this.props.sentiment} %
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "#202020", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md', color: " #ffa31a" }}> High 24Hrs </h6>
                            <p className="card-text  fs-5" style={{ color: " #7FFF00 " }}>
                                ${this.props.high24}
                            </p>
                        </div>
                    </div>
                    <div className="card  text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "#202020", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md', color: " #ffa31a"  }}> Low 24Hrs </h6>
                            <p className="card-text fs-5" style={{ color: 'rgb(255, 32, 32)' }}>
                                ${this.props.low24}
                            </p>
                        </div>
                    </div>
                </section>
                <div className="d-flex justify-content-center">
                    <div className=" text-white d-inline p-4 d-flex align-items-center"
                        style={{ fontFamily: 'NHaasGroteskDSPro-65Md', overflow: 'visible', height: '4px', marginTop: "1%" }}> Current
                        Price</div>
                    <div className="d-flex justify-content-center align-items-center "
                     style={{
                        fontFamily: 'NHaasGroteskDSPro-65Md', fontSize: '30px', 
                        fontWeight: '500', color: " #7FFF00", textDecoration: 'none solid rgb(255, 255, 255)', 
                        textAlign: 'left'
                    }}>
                        ${this.props.currentPrice}
                    </div>
                </div>
            </div>
        )
    }
}

export default CardSection
