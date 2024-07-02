import { atom, selector } from "recoil";

export const countState = atom({
  key: 'countState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

export const isEvenCount = selector({
    key: 'isEvenCount', // unique ID (with respect to other atoms/selectors)
    get: (props) => {
      const count = props.get(countState);
      return count % 2 === 0;
    },
  });