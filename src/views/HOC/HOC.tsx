import React from 'react';

interface Props {
  testProp: string;
}

function HOC(props: Props) {
  return (
    <div className="HOC Content-Wrapper Content-Padded">
      <h1>HOC</h1>
      <div>{props.testProp}</div>
    </div>
  );
}

export default HOC;

// export default addProps(HOC);
