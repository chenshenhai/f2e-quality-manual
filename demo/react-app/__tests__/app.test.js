import App from './../src/app';

import React from 'react';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <App title={'hello world'} info={'this is a react-app'} />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});