import React, { Component, PropTypes } from 'react'
import { Modal, ModalFooter, ModalBody, ModalHeader } from './../common/modal/'
import { Button, CrossButton } from './../common/button/'
import { Input } from './../common/form'
import { get, set, cloneDeep } from 'lodash'
import { userPredicate } from './../../utils/validation'

class UserForm extends Component {

	constructor() {
		super()
		this.state = {
			user: null
		}
	}

	componentWillReceiveProps(nextProps) {
		if( nextProps.user !== this.props.user) {
			this.setState({user: cloneDeep(nextProps.user)})
		}
	}

  setValue = (path) => (value) => {
		const { user } = this.state
		const nextState = set({...user}, path, value)
		this.setState({ user: nextState })
	}

	updateUser = () => {
		const { updateUser } = this.props
		const { user } = this.state

		if (updateUser && this.isFormValid(user)) {
			updateUser(user)
		}
	}

	isFormValid = (user) => {
		return userPredicate.name.last(user.name.last) &&
				userPredicate.name.first(user.name.first) &&
				userPredicate.age(user.age)
	}

	render() {
		const { isOpen, toggleModalState } = this.props
		const { user } = this.state
		if (!user) return null
		return (
			<Modal isOpen={isOpen}>
				<ModalHeader title='Header' >
					<CrossButton onClick={toggleModalState}/>
				</ModalHeader>
				<ModalBody>
					<form>
						<Input
							id='first-name'
							label='First Name'
							value={user.name.first}
							onChange={this.setValue('name.first')}
							isValid={get(userPredicate, 'name.first')(user.name.first)}
						/>
						<Input
							id='last-name'
							label='Last Name'
							value={user.name.last}
							isValid={get(userPredicate, 'name.last')(user.name.last)}
							onChange={this.setValue('name.last')}
						/>
						<Input
							id='age'
							label='Age'
							type='number'
							value={user.age}
							onChange={this.setValue('age')}
							isValid={get(userPredicate, 'age')(user.age)}
						/>
					</form>
				</ModalBody>
				<ModalFooter>
					<Button onClick={toggleModalState}>
						Отмена
					</Button>
					<Button onClick={this.updateUser} primary>
						Сохранить
					</Button>
				</ModalFooter>
			</Modal>
		)
	}
}

export default UserForm
