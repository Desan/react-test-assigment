import React from 'react'

const UserTable = ({ data = [], onEdit, onRemove }) => (
	<table className='table table-striped'>
		<thead>
		<tr>
			<th>#</th>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Age</th>
			<th>Actions</th>
		</tr>
		</thead>
		<tbody>
		{
			data.map((row, index) => {
				return (
					<tr key={index}>
						<td>{index}</td>
						<td>{row.name.first}</td>
						<td>{row.name.last}</td>
						<td>{row.age}</td>
						<td>
							<span>
								<a onClick={onEdit(index)}>Edit</a>
								{' '}
								<a onClick={onRemove(index)}>Delete</a>
							</span>
						</td>
					</tr>
				)
			})
		}
		</tbody>
	</table>
)
export default UserTable