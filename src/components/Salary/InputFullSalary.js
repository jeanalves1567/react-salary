import React, { Component } from 'react';

export default class InputFullSalary extends Component {
    handleInputChange = (event) => {
        const newSalary = event.target.value;
        this.props.onFullSalaryChange(newSalary);
    };

    render() {
        const { fullSalary } = this.props;

        return (
            <div className="input-field col s12">
                <input id="inputSalary" type="number" className="validate" value={fullSalary} onChange={this.handleInputChange} autoComplete="off" />
                <label id="inputSalaryLabel" htmlFor="inputSalary" className="active">Salário Bruto</label>
            </div>
        );
    }
}
