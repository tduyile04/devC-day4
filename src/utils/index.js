import data from '../data.json';

export const getAllData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 2000);
  })
};


export const getData = (id) => {
  const newData = data.filter(item => item.id === id)
  return new Promise(resolve => {
    setTimeout(() => resolve(newData), 500);
  });
};

// Set up object with initial data to zero
export const objectDefaults = (init, range) => {
  const obj = {}
  for (let i=init; i <= range; i +=1) {
    obj[i] = 0; 
  }
  return obj;
}