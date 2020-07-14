import React from "react";


const Form = props => {
  
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [role, setRole] = React.useState("");

  const handleName = event => setName(event.target.value);
  const handleEmail = event => setEmail(event.target.value);
  const handleRole = event => setRole(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    if (name && email && role) {
      props.setUsers([...props.users, { name, email, role }]);
      resetState();
    }
  };

  const resetState = () => {
    setName("");
    setEmail("");
    setRole("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
      Full Name: 
      <input
        onChange={handleName}
        type="text"
        name="name"
        value={name}
        placeholder="Name"
      />
      </label>
      <label
      >Email: 
      <input
        onChange={handleEmail}
        type="text"
        name="email"
        value={email}
        placeholder="Email"
      />
      </label>
      <label>
        Role: 
      <input
        onChange={handleRole}
        type="text"
        name="role"
        value={role}
        placeholder="Role"
      />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
