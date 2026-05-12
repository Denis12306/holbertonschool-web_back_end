const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data
        .split('\n')
        .filter((line) => line.trim() !== '');

      lines.shift();

      const fields = {};
      let totalStudents = 0;

      for (const line of lines) {
        const student = line.split(',');

        const firstname = student[0];
        const field = student[3];

        if (!fields[field]) {
          fields[field] = [];
        }

        fields[field].push(firstname);
        totalStudents += 1;
      }

      console.log(`Number of students: ${totalStudents}`);

      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          const list = fields[field];
          console.log(
            `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`,
          );
        }
      }

      resolve();
    });
  });
}

module.exports = countStudents;
