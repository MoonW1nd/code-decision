// @flow

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { createSerializer } from 'enzyme-to-json';

import {
  map, when, is, lensProp, over,
} from 'ramda';

configure({ adapter: new Adapter() });

export const mapStringProps = over(
  lensProp('props'),
  map(when(is(String), (x: {}) => x.toString())),
);

expect.addSnapshotSerializer(createSerializer({
  map: mapStringProps,
}));
