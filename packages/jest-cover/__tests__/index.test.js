import { render } from '../src/index.js'

test('test dom', async () => {
  render();
  const expectResult = `<div><div><span>Hello</span><span>World</span></div></div>`;
  expect(document.body.innerHTML.replace(/[\s]/ig, '')).toEqual(expectResult);
});