import * as React from 'react';
import InnerHTML from 'dangerously-set-html-content';

interface Props {
  inputValue: string;
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (evt: React.FormEvent) => void;
}

function createMarkup(value: any) {
  console.log(value);
  return { __html: value };
}

function Form(props: Props) {
  return (
    <div className="Form">
      <InnerHTML html={props.inputValue}></InnerHTML>
      <span dangerouslySetInnerHTML={createMarkup(props.inputValue)}></span>
      <form onSubmit={(evt) => props.handleSubmit(evt)}>
        <input onChange={(evt) => props.handleChange(evt)} value={props.inputValue} />
        {/* <img
          src="https://assets.axialhealthcare.com/axial-healthcare/axialLogo.png"
          alt="Test"
          style={{ height: 30 }}
          onLoad={props.inputValue}
        /> */}
      </form>
    </div>
  );
}

export default Form;
