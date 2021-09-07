### Application Documentation

- Application has the required functinality, but there is a weakness in state management. When the application loads, it will render the correct JSON data from the server, but its one "state" behind, so user needs to for example write a letter to the search box, so the NumberList component is up-to-date.
- According to this: https://stackoverflow.com/questions/28773839/react-form-onchange-setstate-one-step-behind/54242246 this is due to setState not being synchronous.
- Error message has two boxes