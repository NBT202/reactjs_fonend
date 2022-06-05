import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService'
import { LANGUAGES } from "../../../utils"
class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: []

        }

    }

    async componentDidMount() {
        try {


            let resGender = await getAllCodeService("gender")
            let resPosition = await getAllCodeService("position")
            let resRole = await getAllCodeService("role")
            if (resGender && resPosition && resRole && resGender.errCode === 0) {
                this.setState({
                    genderArr: resGender.data,
                    positionArr: resPosition.data,
                    roleArr: resRole.data

                })

            }


        } catch (e) {
            console.log(e);
        }
    }


    render() {
        console.log("check state :", this.state);
        let genders = this.state.genderArr;
        let language = this.props.language;
        let position = this.state.positionArr;
        let role = this.state.roleArr;
        return (
            <div className='user-redux-container'>
                <div className='title'>
                    User Redux NBT
                </div>
                <div className='user-redux-body'>
                    <div className='container '>
                        <div className='row'>
                            <div className='col-12 my-3'>
                                <FormattedMessage id="manage-user.add" />
                            </div>
                        </div>
                        <div className='row'>

                            <div className='col-8'>
                                <label><FormattedMessage id="manage-user.email" /></label>
                                <input type='email' className='form-control' />
                            </div>
                            <div className='col-4'>
                                <label><FormattedMessage id="manage-user.password" /></label>
                                <input type='password' className='form-control' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <label><FormattedMessage id="manage-user.first-name" /></label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='col-6'>
                                <label><FormattedMessage id="manage-user.last-name" /></label>
                                <input type='text' className='form-control' />
                            </div>


                        </div>
                        <div className='row'>
                            <div className='col-3'>
                                <label ><FormattedMessage id="manage-user.gender" /></label>
                                <select className="form-control">
                                    {genders && genders.length > 0 &&
                                        genders.map((item, index) => {
                                            return (
                                                <option key={index}>
                                                    {language === LANGUAGES.VI ? item.valueVI : item.valueEN}
                                                </option>
                                            )
                                        })}
                                </select>
                            </div>

                            <div className='col-9'>
                                <label><FormattedMessage id="manage-user.address" /></label>
                                <input type='text' className='form-control' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-3'>
                                <label ><FormattedMessage id="manage-user.role" /></label>
                                <select className="form-control">
                                    {role && role.length > 0 &&
                                        role.map((item, index) => {
                                            return (
                                                <option key={index}>
                                                    {language === LANGUAGES.VI ? item.valueVI : item.valueEN}
                                                </option>
                                            )
                                        })}
                                </select>
                            </div>
                            <div className='col-3'>
                                <label ><FormattedMessage id="manage-user.position" /></label>
                                <select className="form-control">
                                    {position && position.length > 0 &&
                                        position.map((item, index) => {
                                            return (
                                                <option key={index}>
                                                    {language === LANGUAGES.VI ? item.valueVI : item.valueEN}
                                                </option>
                                            )
                                        })}
                                </select>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.phone-number" /></label>
                                <input type='text' className='form-control' />
                            </div>

                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.image" /></label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='col-12'>
                                <button className='btn btn-primary mt-3' ><FormattedMessage id="manage-user.save" /></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
