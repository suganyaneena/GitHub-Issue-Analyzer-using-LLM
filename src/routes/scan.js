import express from "express";
import { fetchOpenIssues } from "../services/githubService.js";
import { readCache, writeCache } from "../utils/fileStore.js";

const router = express.Router();

router.post("/scan", async (req, res) => {
    console.log("SCAN API HITTT 2026"); //  debug log

    try {
        
        const { repo } = req.body;
        
        if (!repo) {
        return res.status(400).json({ error: "repo is required" });
        }

        const issues = await fetchOpenIssues(repo);
        const cache = await readCache();

        cache[repo] = issues;
        await writeCache(cache);

        res.json({
        repo,
        issues_fetched: issues.length,
        cached_successfully: true
        });

    } catch (err) {
        res.status(500).json({ error: "Failed to fetch GitHub issues" });
    }
});

export default router;
