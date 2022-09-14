const mini5 = (name) => {
  if (name.length < 5) {
    return {
      message: '"name" length must be at least 5 characters long',
      code: 422,
    };
  }

  return name;
};

const empty = (name) => {
  if (name.length === 0) {
    return {
      message: '"name" is required',
      code: 400,
    };
  }

  return mini5(name);
};

const noName = (name) => {
  if (name === undefined) {
    return {
      message: '"name" is required',
      code: 400,
    };
  }
  return empty(name);
};

const nameValidador = (name) => noName(name);

module.exports = {
  nameValidador,
};