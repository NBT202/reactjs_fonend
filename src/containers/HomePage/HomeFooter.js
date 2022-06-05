import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
class HomeFooter extends Component {
    render() {
        return (
            <div className="home-footer">
                <p>&copy; Nguyen Bang Thong.
                    More infomation please visit my facebook
                    <a target='blank' href='https://www.facebook.com/cuuem.voi.1'>&#8594; Click here &#8592;</a>
                </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
