import React, { useState } from "react";

import Button from "./Button/Button";
import Form from "./Form/Form";

const App = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <p>Application</p>
      <div>{value}</div>
      <Form>
        <input onChange={(e) => setValue(e.target.value)} value={value} />
        <Button>Something Light</Button>
      </Form>
    </>
  );
};

export default App;
