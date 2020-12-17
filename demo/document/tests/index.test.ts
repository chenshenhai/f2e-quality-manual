import './../src/index.js'

test('test dom', async () => {
  const expectResult = `<div>
  <div>
    <span>Hello</span>
    <span>World</span>
  </div>
</div>`;
  expect(document.body.innerHTML).toEqual(expectResult);
});