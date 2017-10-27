import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import Checkbox, { PureCheckbox, BEM } from '../Checkbox';

function BarButton() {
    return <div>bar</div>;
}

describe('rowComp(Checkbox)', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const element = <Checkbox basic="Basic text" />;

        ReactDOM.render(element, div);
    });
});

describe('Pure <Checkbox>', () => {
    it('renders <input type=checkbox> along with rowComp parts inside <RowCompBody>', () => {
        const wrapper = mount(
            <PureCheckbox>Foo children</PureCheckbox>
        );
        expect(wrapper.containsMatchingElement(<input type="checkbox" />)).toBeTruthy();
    });

    it('renders <input> in icon wrapper before rowComp parts', () => {
        const wrapper = mount(
            <PureCheckbox>Foo children</PureCheckbox>
        );
        const wrapperFirstChild = wrapper.children().childAt(0);

        expect(wrapperFirstChild.hasClass('gyp-checkbox__icon-wrapper')).toBeTruthy();
        expect(wrapperFirstChild.find('input').exists()).toBeTruthy();
    });

    it('updates indeterminate prop on <input type=checkbox>', () => {
        const wrapper = mount(
            <PureCheckbox>Foo children</PureCheckbox>
        );
        expect(wrapper.find('input').instance().indeterminate).toBeFalsy();

        wrapper.setProps({ indeterminate: true });
        expect(wrapper.find('input').instance().indeterminate).toBeTruthy();
    });

    it('should not touch input.indeterminate when prop not changed', () => {
        const wrapper = mount(
            <PureCheckbox indeterminate>Foo children</PureCheckbox>
        );
        expect(wrapper.find('input').instance().indeterminate).toBeTruthy();

        wrapper.setProps({ disabled: true });
        expect(wrapper.find('input').instance().indeterminate).toBeTruthy();
    });

    it('passes whitelisted props to <input>', () => {
        const handleChange = jest.fn();
        const wrapper = mount(
            <PureCheckbox checked defaultChecked disabled onChange={handleChange}>
                Foo children
            </PureCheckbox>
        );
        const inputWrapper = wrapper.find('input');

        expect(inputWrapper.prop('checked')).toBeTruthy();
        expect(inputWrapper.prop('defaultChecked')).toBeTruthy();
        expect(inputWrapper.prop('disabled')).toBeTruthy();
        expect(inputWrapper.prop('onChange')).toBe(handleChange);
    });

    it('passes every props to <input> from the input prop', () => {
        const wrapper = mount(
            <PureCheckbox input={{ readOnly: true, id: 'foo-checkbox' }}>
                Foo children
            </PureCheckbox>
        );
        const inputWrapper = wrapper.find('input');

        expect(inputWrapper.prop('readOnly')).toBeTruthy();
        expect(inputWrapper.prop('id')).toBe('foo-checkbox');
    });

    it('can override checkbox button via overrideButton prop', () => {
        const wrapper = mount(
            <PureCheckbox overrideButton={<BarButton />}>
                Foo children
            </PureCheckbox>
        );

        expect(wrapper.find(BarButton).exists()).toBeTruthy();
        expect(wrapper.find(BarButton).parent().hasClass(BEM.iconWrapper.toString())).toBeTruthy();
    });
});
