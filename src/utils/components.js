import shortid from 'shortid';

export const generateKey = pre => {
  return `${pre}_${shortid.generate()}`;
};
