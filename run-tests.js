const { execSync } = require('child_process');

try {
  console.log('Running tests...');
  const result = execSync('npx react-scripts test --reporters=@learn-co-curriculum/jest-learn-reporter --reporters=default --watchAll=false --verbose', {
    encoding: 'utf8',
    stdio: 'inherit'
  });
  console.log('Tests completed successfully!');
} catch (error) {
  console.error('Tests failed:', error.message);
  process.exit(1);
} 