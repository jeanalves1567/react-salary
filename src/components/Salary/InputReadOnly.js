import React, { Component } from 'react';
import css from './salary.module.css';
import { formatNumber } from '../../helpers/formatNumbers';

export default class InputReadOnly extends Component {
    render() {
        const { description, value, percentage, infoType } = this.props;

        return (
            <div className="input-field col s3">
                <input readOnly value={`R$ ${formatNumber(value)} ${(percentage) ? `(${percentage}%)` : ''}`} key={`disabled-${description}`} type="text" className={`validate ${css.readOnlyFields} ${css[infoType]}`} />
                <label htmlFor={`disabled-${description}`} className="active">{description}</label>
            </div>
        );
    }
}
