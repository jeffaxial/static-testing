import * as React from 'react';

interface Props {
  inputValue?: string;
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (evt: React.FormEvent) => void;
}

function Form(props: Props) {
  return (
    <div className="Form">
      <form
        onSubmit={(evt) => props.handleSubmit(evt)}
      >
        <input
          onChange={(evt) => props.handleChange(evt)}
          value={props.inputValue}
        />
      </form>
    </div>
  )
}

export default Form;