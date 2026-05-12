import fs from 'fs';

export const readDatabase = (path) =>
  new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = {};

      lines.shift();

      for (const line of lines) {
        const [firstname, , , field] = line.split(',');

        if (!students[field]) {
          students[field] = [];
        }

        students[field].push(firstname);
      }

      resolve(students);
    });
  });
