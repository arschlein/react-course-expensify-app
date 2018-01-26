import { createStore } from 'redux';

//const add (data) => {
//     return data.a + data.b;
// }; níže je destrukce tohoto kodu
//
//const add = ({ a, b }, c) => {
//     return a + b + c;
// };

// console.log(add({ a: 1, b: 12 }, 100));

// const incrementCount = (payload = {}) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });


//Actions generators

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy //to je stejné jak decrementBy: decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count: count
});

const resetCount = () => ({
    type: 'RESET',
});

//Reducers
// 1. Reducers are pure functions - output závisí jen na inputu, žádné odkazování na variably vně tuto fci
// 2. never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };

        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };

        case 'RESET':
            return {
                count: 0
            }

        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {  //subsctribe() vypisuje každou změnu stavu
    console.log(store.getState());
});



//Actions - is object that gets sent to the store

//increment the count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

//reset the count
store.dispatch(resetCount());

//decrement the count
store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 200 }));