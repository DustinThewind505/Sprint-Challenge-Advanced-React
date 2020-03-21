- [X] Why would you use class component over function components (removing hooks from the question)?
    Class components allow us to manage state and give access to react lifecycle methods.


- [X] Name three lifecycle methods and their purposes.
    1. The componentDidMount() method runs after the component output has been rendered to the DOM.
	2. After the initial render, componentWillUnmount() has access to the component that has been rendered along with all of its state
	    and props that have been updated.
	3. The componentWillUnmount()  methods runs at the very end of the cycle to clean up or clear out what the component has done.


- [X] What is the purpose of a custom hook?
    Custom hooks help implement the "do not repeat yourself" rule. The non visual behavior and stateful logic of custom hooks allows for easier to read code.


- [X] Why is it important to test our apps?
    Testing decreases the risk of bugs. Testing can act as documentation to better understand code. Testing makes code trustworthy.