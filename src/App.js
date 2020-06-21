import React, { Component } from 'react';
import SalaryCalculator from './components/Salary/SalaryCalculator';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: 1000,
    };
  }

  handleSalaryChange = (newSalary) => {
    this.setState({
      fullSalary: newSalary
    });
  };

  render() {
    const { fullSalary } = this.state;

    return (
      <div className="container">
        <h1 style={styles.centeredTitle}>React Salário</h1>

        <SalaryCalculator fullSalary={fullSalary} onSalaryChange={this.handleSalaryChange} />
      </div>
    );
  }
}



const styles = {
  centeredTitle: {
    textAlign: 'center',
  }
}
