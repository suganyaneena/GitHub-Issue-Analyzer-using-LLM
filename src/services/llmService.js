import OpenAI from "openai";

let client = null;

function getClient() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY not loaded");
  }

  if (!client) {
    client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  return client;
}

export async function analyzeIssues(prompt, issues) 
{
    if (!prompt) {
      throw new Error("Prompt is required");
    }

    if (!Array.isArray(issues)) {
      throw new Error("Issues must be an array");
    }

    const openai = getClient();

    // ✅ DEFINE results FIRST
    const results = [];

    // ✅ LIMIT TO 5 ISSUES ONLY
    for (let issue of issues.slice(0, 5)) {
      const response = await openai.responses.create({
        model: "gpt-4.1-mini",
        input: `
          Analyze this GitHub issue and summarize:
          Title: ${issue.title}
          Body: ${issue.body || "No description"}
                `
      });

      results.push({
        issueId: issue.id,
        analysis: response.output_text
      });
    }

    return results;
  }

