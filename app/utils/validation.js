const nonEmptyString = (value) => {
  return value.trim().length > 0
}

const greaterThen = (num) => (value) => {
  return value > num
}

export const userPredicate = {
  name: {
    first: nonEmptyString,
    last: nonEmptyString,
  },
  age: greaterThen(0)
}