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

      const students = lines.slice(1);

      const fields = {};
      let totalStudents = 0;

      for (const line of students) {
        const student = line.split(',');

        const firstname = student[0];
        const field = student[3];

        if (!fields[field]) {
          fields[field] = [];
        }

        fields[field].push(firstname);
        totalStudents += 1;
      }

      let response = `Number of students: ${totalStudents}`;

      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          response += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
        }
      }

      console.log(response);

      resolve(response);
    });
  });
}

module.exports = countStudents;
