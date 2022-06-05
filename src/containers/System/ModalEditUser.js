import _ from 'lodash';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { emitter } from '../../utils/emitter';
class ModalEditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phonenumber: '',

        }
    }


    componentDidMount() {
        let { currentUser } = this.props;
        if (currentUser && !_.isEmpty(currentUser)) {
            this.setState({
                id: currentUser.id,
                email: currentUser.email,
                password: 'hardpasword',
                firstName: currentUser.firstName,
                lastName: currentUser.lastName,
                address: currentUser.address,
                phonenumber: currentUser.phonenumber,
            })
        }
        console.log('didmount edit modal: ', this.props.currentUser);

    }
    toggle = () => {
        this.props.toggleFromParent();

    }
    handleOnChangeInput = (event, id) => {
        let coppyState = { ...this.state }
        coppyState[id] = event.target.value;
        this.setState({
            ...coppyState
        }, () => {
        })
    }
    checkValideInput = () => {
        let isValide = true;
        let arrrInput = ['email', 'password', 'firstName', 'lastName', 'address', 'phonenumber'];
        for (let i = 0; i < arrrInput.length; i++) {
            if (!this.state[arrrInput[i]]) {
                isValide = false;
                alert('Missing paramether: ', arrrInput[i])
                break;

            }

        }
        return isValide;
    }
    handleSaveUser = () => {
        let isValid = this.checkValideInput();
        console.log(">>>>chech valid : ", isValid);
        if (isValid) {
            this.props.editUse(this.state);

        }

    }
    // handle click delete user

    render() {
        console.log('>>>> check props: ', this.props);

        return (
            <Modal isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className='modal-user-container'
                size='lg'
                centered='true'
            >
                <ModalHeader toggle={() => { this.toggle() }}>
                    Edit a new user
                </ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>

                        <div className='input-container'>
                            <label>Email</label>
                            <input type='email'
                                onChange={(event) => { this.handleOnChangeInput(event, 'email') }}
                                value={this.state.email}
                                disabled
                            ></input>
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input type='password'
                                onChange={(event) => { this.handleOnChangeInput(event, 'password') }}
                                value={this.state.password}
                                disabled
                            ></input>
                        </div>
                        <div className='input-container'>
                            <label>FirstName</label>
                            <input type='text'
                                onChange={(event) => { this.handleOnChangeInput(event, 'firstName') }}
                                value={this.state.firstName}
                            ></input>
                        </div>
                        <div className='input-container'>
                            <label>LastName</label>
                            <input type='text'
                                onChange={(event) => { this.handleOnChangeInput(event, 'lastName') }}
                                value={this.state.lastName}
                            ></input>
                        </div>
                        <div className='input-container '>
                            <label>Address</label>
                            <input type='text'
                                onChange={(event) => { this.handleOnChangeInput(event, 'address') }}
                                value={this.state.address}
                            ></input>
                        </div>
                        <div className='input-container'>
                            <label>PhoneNumBer</label>
                            <input type='text'
                                onChange={(event) => { this.handleOnChangeInput(event, 'phonenumber') }}
                                value={this.state.phonenumber}
                            ></input>
                        </div>


                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={() => { this.handleSaveUser() }}
                        className='px-3'
                    >
                        Save changes
                    </Button>
                    {' '}
                    <Button
                        className='px-3'
                        onClick={() => { this.toggle() }}>
                        Close !
                    </Button>
                </ModalFooter>
            </Modal>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
