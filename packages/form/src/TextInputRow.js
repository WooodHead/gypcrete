import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
    ListRow,
    TextLabel,
} from '@ichef/gypcrete';

import prefixClass from '@ichef/gypcrete/lib/utils/prefixClass';
import icBEM from '@ichef/gypcrete/lib/utils/icBEM';

import formRow, { rowPropTypes } from './mixins/formRow';
import './styles/TextInputRow.scss';

export const COMPONENT_NAME = prefixClass('form-text-input');
const ROOT_BEM = icBEM(COMPONENT_NAME);
export const BEM = {
    root: ROOT_BEM,
    label: ROOT_BEM.element('label'),
    input: ROOT_BEM.element('input'),
};

class TextInputRow extends PureComponent {
    static propTypes = {
        label: PropTypes.node.isRequired,
        // input props
        placeholder: PropTypes.string,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        // from formRow()
        ineditable: PropTypes.bool,
        rowProps: rowPropTypes,
    };

    static defaultProps = {
        placeholder: 'Unset',
        onFocus: () => {},
        onBlur: () => {},
        ineditable: false,
        rowProps: {},
    };

    state = {
        focused: false,
    };

    getInputNode() {
        return this.inputRef;
    }

    handleInputFocus = (event) => {
        this.setState({ focused: true });
        this.props.onFocus(event);
    }

    handleInputBlur = (event) => {
        this.setState({ focused: false });
        this.props.onBlur(event);
    }

    renderInput(inputProps) {
        return (
            <input
                ref={(ref) => { this.inputRef = ref; }}
                type="text"
                className={BEM.input.toString()}
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}
                {...inputProps} />
        );
    }

    render() {
        const {
            label,
            // input props
            // placeholder,
            onFocus,
            onBlur,
            // row props
            ineditable,
            rowProps,
            // React props
            className,
            children,
            ...inputProps,
        } = this.props;

        const bemClass = BEM.root
            .modifier('focused', this.state.focused)
            .modifier('ineditable', ineditable);
        const rootClassName = classNames(bemClass.toString(), className);

        const keyLabel = (
            <span className={BEM.label.toString()}>
                {label}
            </span>
        );

        return (
            <ListRow className={rootClassName} {...rowProps}>
                <TextLabel
                    basic={keyLabel}
                    aside={this.renderInput(inputProps)} />

                {children}
            </ListRow>
        );
    }
}

export { TextInputRow as PureTextInputRow };
export default formRow({ withRef: true })(TextInputRow);