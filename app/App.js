import React, { Component } from 'react'
import UserTable from './components/user/UserTable'
import UserForm from './components/user/UserForm'
import { Button } from './components/common/button'
import data from './../data/mates.json'
import { findIndex } from 'lodash'
import uuid from 'uuid'

class App extends Component {

	constructor() {
		super()

		this.state = {
			isModalOpen: false,
			currentUserId: -1,
			data
		}
	}

	getUser = (id) => {
		const { data } = this.state
		if (id >= 0 && id < data.length) {
			return {...data[id]}
		} else {
			return {
				guid: uuid.v1(),
				name: {
					first: '',
					last: ''
				},
				age: 0,
			}
		}
	}

	updateUser = (person) => {
		const { data } = this.state
		const userIndex = findIndex(data, (user) => {return user.guid === person.guid})
		let nextState

		if (userIndex !== -1) {
			nextState = [
				...data.slice(0, userIndex),
				person,
				...data.slice(userIndex + 1)
			]
		} else {
			nextState = [
				...data,
				person
			]
		}

		this.setState({ data: nextState })
		this.toggleModalState()
	}

	toggleModalState = () => {
		const { isModalOpen } = this.state
		this.setState({ isModalOpen: !isModalOpen })
	}


	addPerson = () => {
		this.toggleModalState()
		this.setState({currentUserId: -1})
	}

	deletePerson = (index) => () => {
		const { data } = this.state
		const nextState = [
			...data.slice(0, index),
			...data.slice(index + 1)
		]
		this.setState({ data: nextState })
	}

	editPerson = (index) => () => {
		this.toggleModalState()
		this.setState({currentUserId: index})
	}

	render() {
		const { data, isModalOpen, currentUserId } = this.state
		return (
			<div style={{width: '70%', margin: '0 auto'}}>

				<UserTable
					data={data}
					onEdit={this.editPerson}
					onRemove={this.deletePerson}
				/>

				<Button primary onClick={this.addPerson}>Добавить</Button>

				<UserForm
					user={this.getUser(currentUserId)}
					isOpen={isModalOpen}
					toggleModalState={this.toggleModalState}
					updateUser={this.updateUser}
				/>

			</div>
		)
	}
}

export default App