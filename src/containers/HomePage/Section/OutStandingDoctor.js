import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import './MedicalFacility.scss'
class OutStandingDoctor extends Component {

    render() {
        return (
            <div className="section-share section-outstandingdoctor">
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='section-header-title'>Bác sĩ nổi bật tuần qua</span>
                        <button className='section-header-btn'> xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize outstandingdoctor-customize'>
                                <div className='customize-border'>
                                    <div className='bg-section bg_i-outstandingdoctor'></div>
                                    <div>Giáo Sư, Tiến Sĩ, NBT</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                            <div className='section-customize outstandingdoctor-customize'>
                                <div className='customize-border'>
                                    <div className='bg-section bg_i-outstandingdoctor'></div>
                                    <div>Giáo Sư, Tiến Sĩ, NBT</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                            <div className='section-customize outstandingdoctor-customize'>
                                <div className='customize-border'>
                                    <div className='bg-section bg_i-outstandingdoctor'></div>
                                    <div>Giáo Sư, Tiến Sĩ, NBT</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                            <div className='section-customize outstandingdoctor-customize'>
                                <div className='customize-border'>
                                    <div className='bg-section bg_i-outstandingdoctor'></div>
                                    <div>Giáo Sư, Tiến Sĩ, NBT</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                            <div className='section-customize outstandingdoctor-customize'>
                                <div className='customize-border'>
                                    <div className='bg-section bg_i-outstandingdoctor'></div>
                                    <div>Giáo Sư, Tiến Sĩ, NBT</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                            <div className='section-customize outstandingdoctor-customize'>
                                <div className='customize-border'>
                                    <div className='bg-section bg_i-outstandingdoctor'></div>
                                    <div>Giáo Sư, Tiến Sĩ, NBT</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
