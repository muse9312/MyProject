import React, { Component } from 'react';
import EmployeeService from '../service/EmployeeService';

class ListemployeeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {

            employees: []
        }
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        })
    }

    render() {
        return (
            <div>
                <h2 className="text-center"> Employee List</h2>

                <div className="row">
                    <table className="table table-str table-striped table-bordered">

                        <thead>
                            <tr>

                                <th> Employee Number</th>
                                <th> Employee First Name</th>
                                <th> Employee last Name</th>
                                <th> Employee email Id</th>
                                <th> Employee Tel</th>
                                <th> Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            {

                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>

                                            <td> {employee.Number}</td>
                                            <td> {employee.firstName}</td>
                                            <td> {employee.lastName}</td>
                                            <td> {employee.emailId}</td>
                                            <td> {employee.telNumber}</td>



                                        </tr>

                                )
                            }



                        </tbody>




                    </table>


                </div>


            </div>
        );
    }
}

export default ListemployeeComponent;