import express from "express";
import { readCache } from "../utils/fileStore.js";
import { analyzeIssues } from "../services/llmService.js";

const router = express.Router();

router.post("/analyze", async (req, res) => {
  try 
  {

    const { repo, prompt } = req.body;

   if (!repo || !prompt) {
      return res.status(400).json({ error: "repo and prompt are required" });
    }

    const cache = await readCache();
    // LOG ONCE (for debugging)
    console.log("CACHE KEYS:", Object.keys(cache));

    const issues = cache[repo];

    if (!Array.isArray(issues) || issues.length === 0) {
      return res.status(400).json({
        error: "No issues found. Run /scan first."
      });
    }

    const analysis = await analyzeIssues(prompt, issues);
    res.json({ analysis });

  } catch (err) {
      console.error("ANALYZE ERROR ", err);
      res.status(500).json({
        error: err.message
      });
  }
});

export default router;
