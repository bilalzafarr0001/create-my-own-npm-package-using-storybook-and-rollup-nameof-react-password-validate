### Validate your password with your requirements features

# Package name : react-password-validate

## Do <br />

### npm i react-password-validate

First you need to create your app conponent with two use state variable like in our case we need password and other one is isValid variable :

function App() {

const [password, setPassword] = useState(""); <br />

const [valid, setValid] = useState(false);

}

Create the Array Lists of requirements according to your need like in my case I have four requirements

const passwordRequirements = <br/> [
{
text: "Must be at least 8 characters",
validator: (val) => val.length >= 8,
},
<br/>
{
text: "Must contain at least one number",
validator: (val) => /\d/g.test(val),
},
<br/>
{
text: "Must contain at least one lower-case letter",
validator: (val) => /[a-z]/g.test(val),
},
<br/>
{
text: "Must contain at least one upper-case letter",
validator: (val) => /[A-Z]/g.test(val),
},
];

Add requirements in App Functional Component
Pass the password value to Requirement component with array of lists of requirements and the last one is valid variable like below :

<h1>Password Validator</h1>

function App() { <br/>
const [password, setPassword] = useState(""); <br/>
const [valid, setValid] = useState(false);

const passwordRequirements = <br/> [
{
text: "Must be at least 8 characters",
validator: (val) => val.length >= 8,
},
<br/>
{
text: "Must contain at least one number",
validator: (val) => /\d/g.test(val),
},
<br/>
{
text: "Must contain at least one lower-case letter",
validator: (val) => /[a-z]/g.test(val),
},
<br/>
{
text: "Must contain at least one upper-case letter",
validator: (val) => /[A-Z]/g.test(val),
},
];
return (
<>

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
