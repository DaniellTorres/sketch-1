const fs = require('fs');
const filePath = './data/data.json';

function readData() {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        console.log(data);
        resolve(JSON.parse(data));
      }
    });
  });
}

function writeData(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

function getRandomNumber() {
  return Math.floor(Math.random() * (30 - (-15)) + (-15));
}

readData().then((data) => {
  for (const node of data.data) {
    const newValue = node.nominalValue + getRandomNumber();
    node.nominalValue = newValue;
  }
  writeData(data).then(() => {
    console.log("Dados atualizados com sucesso!");
  });
}).catch((err) => {
  console.error(err);
});
