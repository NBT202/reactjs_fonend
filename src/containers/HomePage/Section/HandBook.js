import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
class HandBook extends Component {
    render() {
        let customize = this.props.settings
        customize.slidesToShow = 2;
        return (
            <div className="section-share section-handbook">
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='section-header-title'>Cẩm nang</span>
                        <button className='section-header-btn'> tất cả bài viết</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...customize}>
                            <div className='section-customize handbook-customize '>
                                <div className='handbook-content'>
                                    <div className='bg-section bg_i-handbook '></div>
                                    <div className='title-handbook'>8 địa chỉ khám sức khỏe tổng quát tốt nhất ở Hà Nội</div></div>
                            </div>
                            <div className='section-customize handbook-customize '>
                                <div className='handbook-content'>
                                    <div className='bg-section bg_i-handbook '></div>
                                    <div className='title-handbook'>8 địa chỉ khám sức khỏe tổng quát tốt nhất ở Hà Nội</div></div>
                            </div>
                            <div className='section-customize handbook-customize '>
                                <div className='handbook-content'>
                                    <div className='bg-section bg_i-handbook '></div>
                                    <div className='title-handbook'>8 địa chỉ khám sức khỏe tổng quát tốt nhất ở Hà Nội</div></div>
                            </div>
                            <div className='section-customize handbook-customize '>
                                <div className='handbook-content'>
                                    <div className='bg-section bg_i-handbook '></div>
                                    <div className='title-handbook'>8 địa chỉ khám sức khỏe tổng quát tốt nhất ở Hà Nội</div></div>
                            </div>
                            <div className='section-customize handbook-customize '>
                                <div className='handbook-content'>
                                    <div className='bg-section bg_i-handbook '></div>
                                    <div className='title-handbook'>8 địa chỉ khám sức khỏe tổng quát tốt nhất ở Hà Nội</div></div>
                            </div>
                            <div className='section-customize handbook-customize '>
                                <div className='handbook-content'>
                                    <div className='bg-section bg_i-handbook '></div>
                                    <div className='title-handbook'>8 địa chỉ khám sức khỏe tổng quát tốt nhất ở Hà Nội</div></div>
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
