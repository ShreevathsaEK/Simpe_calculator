import * as math from "mathjs";

const operatorsArr = ['*', '/', '+', '-']

const actions = {
  handleClear() {
    console.clear();
    return "";
  },

  addtoInputNum(state, param) {
    if ((state[state.length - 1] === '-' && param === '-') || (operatorsArr.includes(state[state.length - 1]) && operatorsArr.includes(param))) {
      return state;
    } else {
      return state + param;
    }
  },

  addtoInputOpr(state, param) {
    if (state === "" || (operatorsArr.includes(state[state.length - 1]) && operatorsArr.includes(param))) {
      return state;
    } else {
      return state + param;
    }
  },

  handleEqual(state) {
    if (state === "") {
      return state;
    } else {
      console.log(math.evaluate(state));
      return math.evaluate(state);
    }
  },

  handleRoot(state) {
    if (state === "") {
      return state;
    } else {
      return Math.sqrt(state);
    }
  },

  handleSquare(state) {
    if (state === "") {
      return state;
    } else {
      return Math.pow(state, 2);
    }
  },

  handleCube(state) {
    if (state === "") {
      return state;
    } else {
      return Math.pow(state, 3);
    }
  },


};

export default function reducer(state, action) {
  let type = action.type;
  let param = action.param;
  return actions[type](state, param);
}
