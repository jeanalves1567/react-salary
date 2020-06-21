import React, { Component } from 'react';

export default class ProgressBarSalary extends Component {
    render() {
        const { netSalaryPercentage, inssDiscountPercentage, irpfDiscountPercentage } = this.props;

        return (
            <div className="progress" style={{ height: "20px" }}>
                <div className="determinate" style={{ width: `${netSalaryPercentage + inssDiscountPercentage + irpfDiscountPercentage}%`, backgroundColor: "#16a085" }}></div>
                <div className="determinate" style={{ width: `${irpfDiscountPercentage + inssDiscountPercentage}%`, backgroundColor: "#c0392b" }}></div>
                <div className="determinate" style={{ width: `${inssDiscountPercentage}%`, backgroundColor: "#e67e22" }}></div>
            </div>
        )
    }
}

