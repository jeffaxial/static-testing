import * as React from 'react';
import InnerHTML from 'dangerously-set-html-content';

interface Props {
  inputValue: string;
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (evt: React.FormEvent) => void;
  testQuery?: string;
}

function Form(props: Props) {
  return (
    <div className="Form">
      <InnerHTML html={props.inputValue}></InnerHTML>
      <form onSubmit={(evt) => props.handleSubmit(evt)}>
        <input onChange={(evt) => props.handleChange(evt)} value={props.inputValue} />
      </form>
    </div>
  );
}

export default Form;
