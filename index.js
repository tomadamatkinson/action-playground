const core = require("@actions/core");
const github = require("@actions/github");

try {
  console.log(JSON.stringify(process.env))
} catch(error) {
  core.setFailed(error.message);
}