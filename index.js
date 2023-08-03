const { createStore } = require("redux");

//REDUX WORKFLOW
//1. STATE
//2. ACTION DISPATCH
//3. REDUCER
//4. STORE

//==================*********=============

//  DEFINING CONSTANTS
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const Add_User = "Add_User";

//==================*********=============
//state
const initialCounterState = {
	count: 0,
};

// const initialUserState = {
// 	users: [{ name: "shahinul Islam" }],
// };

//action ====> INCREMENT COUNTER, DECREMENT COUNTER

//ACTION    actually a object and in this object we work with two things: 1.type 2.payload(PASSING DATA)

//INCREMENT COUNTER
// {
// 	type: "INCREMENT",

// }

//USUALLY WE KEPT ACTION INSIDE A FUNCTION MEANS WE CREATE ACTION CREATER.FOR EXAMPLE:

//==================*********=============
const incrementCounter = () => {
	return {
		type: INCREMENT,
	};
};

const decrementCounter = () => {
	return {
		type: DECREMENT,
	};
};
//==================*********=============
// const addUser = () => {
// 	return {
// 		type: Add_User,
// 		payload: { name: "anisul islam" },
// 	};
// };

//  REDUCER WORKS ON BASED ON ACTION TYPE. IT IS A PURE FUNCTION. IT MEANS IT WILL DEFINITELY TAKE AN INPUT AND RETURN A OUTPUT. REDUCER HANDLES ALL THE LOGIC AND THEN UPDATE THE STATES BASED ON THE GIVEN ACTION TYPE. FOR MORE CLEAR VIEW WE WRITE LOGIC INSIDE REDUCER BASED ON THE ACTION TYPE. IF THE ACTION TYPE IS INCREMENT THEN WE WILL WRITE THE LOGIC FOR THE INCREMENT.

//CREATING REDUCER FOR COUNTER
//==================*********=============

const counterReducer = (state = initialCounterState, action) => {
	switch (action.type) {
		case INCREMENT:
			return {
				count: state.count + 1,
			};
			break;
		case DECREMENT:
			return {
				count: state.count - 1,
			};
			break;

		default:
			state;
	}
};

//create store
const store = createStore(counterReducer);
store.subscribe(() => {
	console.log(store.getState());
});

//dispatch action
store.dispatch(decrementCounter());
store.dispatch(decrementCounter());
store.dispatch(decrementCounter());
