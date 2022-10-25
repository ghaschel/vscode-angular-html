import * as glob from 'glob';
import * as Mocha from 'mocha';

import * as path from 'path';

const run = async (): Promise<void> => {
  // Create the mocha test
  const mocha = new Mocha({
    timeout: 100000,
    ui: 'tdd',
  });

  // Mocha.useColors(true);

  const testsRoot = path.resolve(__dirname, '..');

  return new Promise((c, e) => {
    glob('**/**.test.js', { cwd: testsRoot }, (err, files) => {
      if (err) {
        e(err);
        return;
      }

      // Add files to the test suite
      files.forEach(f => {
        mocha.addFile(path.resolve(testsRoot, f));
      });

      try {
        // Run the mocha test
        mocha.run(failures => {
          if (failures > 0) {
            e(new Error(`${failures} tests failed.`));
          } else {
            c();
          }
        });
      } catch (error) {
        console.error(error);
        e(error);
      }
    });
  });
};

export { run };
