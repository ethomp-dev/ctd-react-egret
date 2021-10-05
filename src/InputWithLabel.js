import React from "react";

function InputWithLabel({ todoTitle, handleTitleChange, children }) {
    const inputRef = React.useRef();

    React.useEffect(() => {
        // if (inputRef.current) {
            inputRef.current.focus();
        // }
    }, []);

  return (
    <>
        <label htmlFor="todoTitle">{children}:&nbsp;</label>
        <input
            id="todoTitle"
            type="text"
            name="title"
            // autoFocus
            ref={inputRef}
            value={todoTitle}
            onChange={handleTitleChange}
        />
    </>
  );
}

export default InputWithLabel;
