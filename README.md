Validate your password with your requirements features

-- Package name : react-password-validate

Do /.
npm i react-password-validate

Firsdt you need to create your app conponent with two use state variable like in our case we need password and other one is isValid variable :

function App() {
const [password, setPassword] = useState("");
const [valid, setValid] = useState(false);

}

Create the Array Lists of requirements according to your need like in my case I have four requirements

const passwordRequirements = [
{
text: "Must be at least 8 characters",
validator: (val) => val.length >= 8,
},
{
text: "Must contain at least one number",
validator: (val) => /\d/g.test(val),
},
{
text: "Must contain at least one lower-case letter",
validator: (val) => /[a-z]/g.test(val),
},
{
text: "Must contain at least one upper-case letter",
validator: (val) => /[A-Z]/g.test(val),
},
];

Add requirements in App Functional Component
Pass the password value to Requirement component with array of lists of requirements and the last one is valid variable like below :

function App() {
const [password, setPassword] = useState("");
const [valid, setValid] = useState(false);

const passwordRequirements = [
{
text: "Must be at least 8 characters",
validator: (val) => val.length >= 8,
},
{
text: "Must contain at least one number",
validator: (val) => /\d/g.test(val),
},
{
text: "Must contain at least one lower-case letter",
validator: (val) => /[a-z]/g.test(val),
},
{
text: "Must contain at least one upper-case letter",
validator: (val) => /[A-Z]/g.test(val),
},
];
return (
<>

<h1>Password Validator</h1>
<Requirements
value={password}
requirements={passwordRequirements}
onValidChange={(isValid) => setValid(isValid)}
/>

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={!valid}>Sign Up</button>
    </>

);
}
