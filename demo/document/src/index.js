const dom = document.createElement('div');
dom.innerHTML = `
  <div>
    <span>Hello</span>
    <span>World</span>
  </div>
`;
document.querySelector('body').appendChild(dom);
