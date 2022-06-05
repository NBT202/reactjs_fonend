import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import './MedicalFacility.scss'
class MedicalFacility extends Component {

    render() {
        return (
            <div className="section-share section-medical-facility">
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='section-header-title'>Cơ sở y tế nổi bật</span>
                        <button className='section-header-btn'> xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-section bg_i-medicalfacility'></div>
                                <div>Bệnh viện Chợ Rẫy</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-section bg_i-medicalfacility'></div>
                                <div>Bệnh viện Chợ Rẫy 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-section bg_i-medicalfacility'></div>
                                <div>Bệnh viện Chợ Rẫy 2</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-section bg_i-medicalfacility'></div>
                                <div>Bệnh viện Chợ Rẫy 3</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-section bg_i-medicalfacility'></div>
                                <div>Bệnh viện Chợ Rẫy 4</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-section bg_i-medicalfacility'></div>
                                <div>Bệnh viện Chợ Rẫy 5</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
