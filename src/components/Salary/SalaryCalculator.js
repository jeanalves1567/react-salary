import React, { Component } from 'react'
import InputFullSalary from './InputFullSalary'
import InputReadOnly from './InputReadOnly';
import ProgressBarSalary from './ProgressBarSalary';
import { calculateSalaryFrom, round } from './salary';

export default class SalaryCalculator extends Component {
    handleFullSalaryChange = (newSalary) => {
        this.props.onSalaryChange(newSalary);
    };

    render() {
        const { fullSalary } = this.props;

        const { baseINSS, discountINSS, baseIRPF, discountIRPF, netSalary } = calculateSalaryFrom(fullSalary);

        const inssPercentage = (fullSalary > 0) ? round((discountINSS / fullSalary) * 100) : 0;
        const irpfPercentage = (fullSalary > 0) ? round((discountIRPF / fullSalary) * 100) : 0;
        const salaryPercentage = (fullSalary > 0) ? round((netSalary / fullSalary) * 100) : 0;

        return (
            <div>
                <div className="row">
                    <InputFullSalary fullSalary={fullSalary} onFullSalaryChange={this.handleFullSalaryChange} />
                </div>
                <div className="row">
                    <InputReadOnly description="Base INSS:" value={baseINSS} infoType="" />
                    <InputReadOnly description="Desconto INSS:" value={discountINSS} percentage={inssPercentage} infoType="discountInss" />
                    <InputReadOnly description="Base IRPF:" value={baseIRPF} infoType="" />
                    <InputReadOnly description="Desconto IRPF:" value={discountIRPF} percentage={irpfPercentage} infoType="discountIrpf" />
                </div>
                <div className="row">
                    <InputReadOnly description="Salário líquido:" value={netSalary} percentage={salaryPercentage} infoType="netSalary" />
                </div>
                <div className="row">
                    <ProgressBarSalary netSalaryPercentage={salaryPercentage} inssDiscountPercentage={inssPercentage} irpfDiscountPercentage={irpfPercentage} />
                </div>
            </div>
        )
    }
}
