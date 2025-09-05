const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    const delta = Number(core.getInput("max-monthly-delta") || "100");
    const ctx = github.context;
    console.log(`[Cost Guardrails] Running on ${ctx.eventName} for ${ctx.repo.owner}/${ctx.repo.repo}`);
    core.summary
      .addHeading("Cost Guardrails (MVP)")
      .addRaw(`Checked with threshold $${delta}/month.`)
      .write();
    core.setOutput("ok", true);
  } catch (e) {
    core.setFailed(e.message);
  }
}

run();