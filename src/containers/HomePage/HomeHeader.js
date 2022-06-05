import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils'
import { changeLanguageApp } from '../../store/actions/appActions';
class HomeHeader extends Component {
    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);

    }

    render() {
        let language = this.props.language
        return (
            <>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <div className='header-logo'>

                            </div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="home-header.speciality" /></b></div>
                                <div className='subs-title'><FormattedMessage id="home-header.search-doctor" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="home-header.health-facility" /></b></div>
                                <div className='subs-title'><FormattedMessage id="home-header.select-room" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="home-header.doctor" /></b></div>
                                <div className='subs-title'><FormattedMessage id="home-header.select-doctor" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="home-header.fee" /></b></div>
                                <div className='subs-title'><FormattedMessage id="home-header.check-health" /></div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'><i className="far fa-question-circle"></i><FormattedMessage id="home-header.support" /></div>
                            <div className={language === LANGUAGES.VI ? "language-vi active" : 'language-vi'}><span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span></div>
                            <div className={language === LANGUAGES.EN ? "language-en active" : 'language-en'}><span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span></div>

                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title1'>
                            <FormattedMessage id="banner.title1" />
                        </div>
                        <div className='title2'>
                            <FormattedMessage id="banner.title2" />
                        </div>
                        <div className='search'>
                            <i className="fas fa-search"></i>
                            <input
                                type='text'
                                placeholder='Tìm chuyên khoa'
                            />
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='options'>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fas fa-hospital"></i>
                                </div>
                                <div className='title-child'>
                                    <FormattedMessage id="banner.examination-service1" />
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fas fa-mobile"></i>
                                </div>
                                <div className='title-child'>
                                    <FormattedMessage id="banner.examination-service2" />
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fa-solid fa-user-astronaut"></i>
                                </div>
                                <div className='title-child'>
                                    <FormattedMessage id="banner.examination-service3" />
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fas fa-flask"></i>
                                </div>
                                <div className='title-child'>
                                    <FormattedMessage id="banner.examination-service4" />
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fas fa-head-side-medical"></i>
                                </div>
                                <div className='title-child'>
                                    <FormattedMessage id="banner.examination-service5" />
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fas fa-tooth"></i>
                                </div>
                                <div className='title-child'>
                                    <FormattedMessage id="banner.examination-service6" />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </>


        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);