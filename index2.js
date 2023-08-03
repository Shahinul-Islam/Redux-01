//state--count:0
//action--increment, decrement, reset
//reducer
//store

const { createStore } = require("redux");

//constants
// const INCREMENT = "INCREMENT";
// const DECREMENT = "DECREMENT";
const initialState = {
	count: 0,
	amount: 0,
};

const incrementAction = () => {
	return {
		type: "INCREMENT",
	};
};
const decrementAction = () => {
	return {
		type: "DECREMENT",
	};
};
const resetAction = () => {
	return {
		type: "RESET",
	};
};

//reducer

const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case "INCREMENT":
			return {
				...state,
				count: initialState.count + 1,
			};

		case "DECREMENT":
			return { ...state, count: initialState.count - 1 };

		case "RESET":
			return { ...state, count: 0 };

		default:
			state;
	}
};

const store = createStore(counterReducer);

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(decrementAction());
store.dispatch(incrementAction());
store.dispatch(resetAction());
