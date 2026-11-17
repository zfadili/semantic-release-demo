
function greet(options = {}) {
  const name = options.name || "World";
  return `Hello, ${name}.`;
}

if (require.main === module) {
  const name = process.argv[2] || "World";
  console.log(greet({ name }));
}

module.exports = { greet };
