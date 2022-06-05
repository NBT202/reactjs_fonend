import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import { getAllUser, createNewUserService, deletUserService, editUserService, } from '../../services/userService';
import ModalUser from './ModalUser';
import { emitter } from '../../utils/emitter'
import ModalEditUser from './ModalEditUser';
class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUser: [],
            isOpenModalUser: false,
            isOpenEditModal: false,
            userEdit: {},
        };
    }

    async componentDidMount() {
        await this.getAllUserFromReact();

    }
    getAllUserFromReact = async () => {
        let respone = await getAllUser('All');
        if (respone && respone.errCode === 0) {
            this.setState({
                arrUser: respone.user
            })

        }

    }
    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser
        })
    }
    toggleUserModal = () => {

        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser
        })

    }
    toggleUserEditModal = () => {
        this.setState({
            isOpenEditModal: !this.state.isOpenEditModal
        })
    }
    createNewUser = async (data,) => {
        try {
            let respone = await createNewUserService(data)
            if (respone && respone.errCode !== 0) {
                alert(respone.errMessage)

            } else {
                await this.getAllUserFromReact()
                this.setState({
                    isOpenModalUser: false
                })
                emitter.emit('EVENT_CLEAR_MODAL_DATA', { 'id': 'yourID' })
            }
            console.log('respone create user: ', respone);
        } catch (error) {
            console.log(error);
        }
    }
    handleDeleteUser = async (user) => {
        try {
            let res = await deletUserService(user.id);
            if (res && res.errCode === 0) {
                await this.getAllUserFromReact();
            } else {
                alert(res.errMessage)
            }
        } catch (error) {
            console.log(error);
        }
    }
    handleEditUser = (user) => {

        console.log('check edit user: ', user);
        this.setState({
            isOpenEditModal: true,
            userEdit: user,
        })
        console.log(this.state.isOpenEditModal);
    }
    doEditUser = async (user) => {
        let res = await editUserService(user)
        try {
            if (res && res.errCode === 0) {
                this.setState({
                    isOpenEditModal: false
                })
                await this.getAllUserFromReact();
            }
            else {
                alert(res.errCode)
            }

        } catch (e) {
            console.log(e);
        }
    }
    render() {
        let arrUser = this.state.arrUser;
        return (
            <div className='User-container'>
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleFromParent={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />
                {
                    this.state.isOpenEditModal &&

                    <ModalEditUser
                        isOpen={this.state.isOpenEditModal}
                        toggleFromParent={this.toggleUserEditModal}
                        currentUser={this.state.userEdit}
                        editUse={this.doEditUser}
                    />}
                <div className='title text-center' >
                    Manage users with NBT

                </div>
                <div className='mx-5 '>
                    <button className='btn btn-primary btn-add-user'
                        onClick={() => this.handleAddNewUser()}
                    >
                        <i className="fas fa-plus mx-1"></i>Add New User
                    </button>
                </div>
                <div className='users-table mt-4 mx-5'>
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Email  </th>
                                <th>FistName</th>
                                <th>LastName</th>
                                <th>Address</th>
                                <th>PhoneNumber</th>
                                <th>Actions</th>
                            </tr>

                            {arrUser && arrUser.map((item, index) => {
                                return (
                                    <>
                                        <tr key={index} >
                                            <td>{item.email}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.address}</td>
                                            <td>{item.phonenumber}</td>
                                            <td>
                                                <button
                                                    className='btn_edit'
                                                    onClick={() => {
                                                        this.handleEditUser(item)
                                                    }}
                                                ><i
                                                    className="far fa-edit"

                                                ></i></button>
                                                <button
                                                    className='btn-delete'
                                                    onClick={() => {
                                                        this.handleDeleteUser(item)
                                                    }}
                                                ><i className="far fa-trash-alt"></i></button>
                                            </td>


                                        </tr>
                                    </>)
                            })}


                        </tbody>
                    </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
