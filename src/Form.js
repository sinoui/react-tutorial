import React, { useState } from "react";

function Form(props) {
  const [formData, setFormData] = useState({
    name: "",
    job: ""
  });
  const { handleSubmit } = props;

  const submitForm = () => {
    handleSubmit(formData);
    setFormData({
      name: "",
      job: ""
    });
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <form>
      <label>姓名</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label>工作</label>
      <input
        type="text"
        name="job"
        value={formData.job}
        onChange={handleChange}
      />
      <input type="button" value="提交" onClick={submitForm} />
    </form>
  );
}

export default Form;
