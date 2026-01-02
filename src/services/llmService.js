// // import OpenAI from "openai";

// // const openai = new OpenAI({
// //   apiKey: process.env.OPENAI_API_KEY
// // });


// import OpenAI from "openai";

// // let client = null;

// // function getClient() {
// //   if (!process.env.OPENAI_API_KEY) {
// //     throw new Error("OPENAI_API_KEY not loaded");
// //   }

// //   if (!client) {
// //     client = new OpenAI({
// //       apiKey: process.env.OPENAI_API_KEY,
// //     });
// //   }

// //   return client;
// // }

// export async function analyzeIssues(prompt, issues) 
// {
//   const content = issues
//     .map(i => `Title: ${i.title}\nBody: ${i.body || "No description"}`)
//     .join("\n\n");

//   const response = await openai.chat.completions.create({
//     model: "gpt-4o-mini",
//     messages: [
//       { role: "system", content: "You analyze GitHub issues for maintainers." },
//       {
//         role: "user",
//         content: `${prompt}\n\nIssues:\n${content}`
//       }
//     ]
//   });

//   return response.choices[0].message.content;
// }

// // export async function analyzeIssues(prompt, issues) {
// //   const openai = getClient();

// //   const content = issues
// //     .map(i => `Title: ${i.title}\nBody: ${i.body || "No description"}`)
// //     .join("\n\n");

// //   const response = await openai.chat.completions.create({
// //     model: "gpt-4o-mini",
// //     messages: [
// //       { role: "system", content: "You are a code review assistant." },
// //       { role: "user", content: `${prompt}\n\n${content}` }
// //     ]
// //   });

// //   return response.choices[0].message.content;
// // }

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

// export async function analyzeIssues(prompt, issues) {
//   if (!prompt) {
//     throw new Error("Prompt is required");
//   }

//   if (!Array.isArray(issues)) {
//     throw new Error("Issues must be an array");
//   }

//   const openai = getClient();

//   const content = issues
//     .map(i => `Title: ${i.title}\nBody: ${i.body || "No description"}`)
//     .join("\n\n");

  
//   // LIMIT TO 5 ISSUES ONLY
//   for (let issue of issues.slice(0, 5)) {
//     const response = await openai.responses.create({
//       model: "gpt-4.1-mini",
//       input: `
// Analyze this GitHub issue and summarize:
// Title: ${issue.title}
// Body: ${issue.body || "No description"}
//       `
//     });

//     results.push({
//       issueId: issue.id,
//       analysis: response.output_text
//     });
//   }

//   return results;
  
// }

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

