import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import SearchInput, { PureSearchInput, BEM } from '../SearchInput';

const INPUT_VALUE = 'inputValue';

describe('rowComp(SearchInput)', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const element = <SearchInput />;

        ReactDOM.render(element, div);
    });
});

describe('Pure <SearchInput>', () => {
    it('renders with an <input type=text> inside', () => {
        const wrapper = shallow(<PureSearchInput />);

        expect(wrapper.find('input').matchesElement(<input type="text" />)).toBeTruthy();
    });

    it('caches input value in internal state', () => {
        const wrapper = shallow(<PureSearchInput />);
        const inputWrapper = wrapper.find('input');

        expect(wrapper.state(INPUT_VALUE)).toBe('');

        inputWrapper.simulate('change', { target: { value: 'foo' } });
        expect(wrapper.state(INPUT_VALUE)).toBe('foo');

        inputWrapper.simulate('change', { target: { value: 'bar' } });
        expect(wrapper.state(INPUT_VALUE)).toBe('bar');
    });

    it('renders reset button when input isnt empty', () => {
        const wrapper = shallow(<PureSearchInput />);
        const inputWrapper = wrapper.find('input');

        expect(wrapper.find(`.${BEM.resetBtn}`)).toHaveLength(0);

        inputWrapper.simulate('change', { target: { value: 'foo' } });
        expect(wrapper.find(`.${BEM.resetBtn}`)).toHaveLength(1);
    });

    it('takes defaultValue for input', () => {
        const wrapper = shallow(<PureSearchInput defaultValue="foo" />);

        expect(wrapper.state(INPUT_VALUE)).toBe('foo');
    });

    it('clears input value and calls onSearch() on reset button click', () => {
        const handleSearch = jest.fn(() => PureSearchInput.defaultProps.onSearch());
        const wrapper = shallow(<PureSearchInput onSearch={handleSearch} />);
        const inputWrapper = wrapper.find('input');

        inputWrapper.simulate('change', { target: { value: 'foo' } });
        expect(wrapper.state(INPUT_VALUE)).toBe('foo');

        wrapper.find(`.${BEM.resetBtn}`).simulate('click');
        expect(wrapper.state(INPUT_VALUE)).toBe('');
        expect(handleSearch).toHaveBeenLastCalledWith('');
    });

    it('calls onSearch() prop with input value on Enter', () => {
        const handleSearch = jest.fn();
        const wrapper = shallow(<PureSearchInput onSearch={handleSearch} />);
        const inputWrapper = wrapper.find('input');

        inputWrapper.simulate('change', { target: { value: 'foo' } });

        // Other keys should not trigger onSearch()
        inputWrapper.simulate('keyup', { key: 'Escape' });
        expect(handleSearch).not.toHaveBeenCalled();

        // Only Enter key should trigger
        inputWrapper.simulate('keyup', { key: 'Enter' });
        expect(handleSearch).toHaveBeenLastCalledWith('foo');

        wrapper.find(`.${BEM.resetBtn}`).simulate('click');
        inputWrapper.simulate('keyup', { key: 'Enter' });
        expect(handleSearch).toHaveBeenLastCalledWith('');
    });

    it('calls onSearch() prop with input value on Blur', () => {
        const handleSearch = jest.fn();
        const wrapper = shallow(<PureSearchInput onSearch={handleSearch} />);
        const inputWrapper = wrapper.find('input');

        inputWrapper.simulate('change', { target: { value: 'foo' } });
        inputWrapper.simulate('blur');
        expect(handleSearch).toHaveBeenLastCalledWith('foo');

        wrapper.find(`.${BEM.resetBtn}`).simulate('click');
        inputWrapper.simulate('blur');
        expect(handleSearch).toHaveBeenLastCalledWith('');
    });

    it('only calls onSearch() if input value different from cached value', () => {
        const handleSearch = jest.fn();
        const wrapper = shallow(<PureSearchInput onSearch={handleSearch} />);
        const inputWrapper = wrapper.find('input');

        inputWrapper.simulate('change', { target: { value: 'foo' } });
        inputWrapper.simulate('keyup', { key: 'Enter' });
        expect(handleSearch).toHaveBeenCalledWith('foo');
        expect(handleSearch).toHaveBeenCalledTimes(1);

        inputWrapper.simulate('blur');
        expect(handleSearch).toHaveBeenCalledTimes(1);
    });

    it('renders loading icon when status is loading', () => {
        const wrapper = shallow(<PureSearchInput />, { context: { status: undefined } });

        expect(wrapper.find('Icon').find({ type: 'loading' })).toHaveLength(0);

        wrapper.setContext({ status: 'loading' });
        expect(wrapper.find('Icon').find({ type: 'loading' })).toHaveLength(1);
    });

    it('hides reset button when status icon is visible', () => {
        const wrapper = shallow(
            <PureSearchInput defaultValue="foo" />,
            { context: { status: undefined } }
        );

        expect(wrapper.find(`.${BEM.resetBtn}`)).toHaveLength(1);

        wrapper.setContext({ status: 'loading' });
        expect(wrapper.find(`.${BEM.resetBtn}`)).toHaveLength(0);
        expect(wrapper.find('Icon').find({ type: 'loading' })).toHaveLength(1);
    });
});
