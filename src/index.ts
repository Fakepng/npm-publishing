export const add = (a: number, b: number) => {
  return a + b;
};

export const subtract = (a: number, b: number) => {
  return a - b;
};

export const divide = (a: number, b: number) => {
  if (b === 0) throw new Error("division by zero");
  return a / b;
};
