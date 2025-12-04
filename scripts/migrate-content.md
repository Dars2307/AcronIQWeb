# Content Migration Guide

## Migrating Existing Articles to Supabase

### Article 1: "Why Clarity Matters More Than Information"

```sql
INSERT INTO cms.journal_posts (
  title,
  slug,
  summary,
  content,
  author,
  author_title,
  author_credentials,
  series,
  key_takeaways,
  is_published,
  publish_date
) VALUES (
  'Why Clarity Matters More Than Information in Strategic Decision-Making',
  'why-clarity-matters',
  'In today''s world, leaders aren''t suffering from a lack of information — they''re drowning in it. Every decision is surrounded by metrics, dashboards, forecasts, and AI-generated insight. Yet decisions still fail. Not because leaders didn''t know enough, but because they couldn''t see clearly.',
  'Clarity, not volume of data, is what defines advantage in high-stakes decision-making.

When complexity rises, the instinct is often to search for more data, more reports, more validation. But data without clarity only creates hesitation. It delays decisions until timing is lost or forces action rooted in fear rather than foresight.

**At AcronIQ, we believe strategic clarity is created through three core principles:**

**1. Precision over noise**

Insight must filter — not amplify — complexity. Useful intelligence answers: What truly matters here?

**2. Trust over uncertainty**

Leadership relies not only on numbers but aligned confidence. Insight should reinforce conviction, not increase anxiety.

**3. Intelligence that resonates**

Human context is essential. The best decisions are not just mathematically correct — they are strategically and emotionally aligned.

The future of leadership will not belong to those with the most information, but those who master the art of seeing clearly before acting decisively.

**AcronIQ was built for that future.**',
  'Joel Ogunniyi',
  'Founder & CEO, AcronIQ Research',
  'Strategic Advisor specialising in AI-driven decision systems',
  'Strategic Clarity Series',
  '["Leaders fail due to clarity issues, not data scarcity", "Data without clarity creates hesitation and fear-based decisions", "Strategic clarity requires precision, trust, and emotional alignment", "Future leadership belongs to those who see clearly before acting"]'::jsonb,
  true,
  '2025-12-01'
);
```

### Article 2: "Why Emotional Intelligence Matters in AI Advisory"

```sql
INSERT INTO cms.journal_posts (
  title,
  slug,
  summary,
  content,
  author,
  author_title,
  author_credentials,
  series,
  key_takeaways,
  is_published,
  publish_date
) VALUES (
  'Why Emotional Intelligence Matters in AI Advisory',
  'emotional-intelligence-ai-advisory',
  'We often think of AI advisory as a discipline of logic, data and precision. But decisions that shape organisations are rarely made in perfect conditions. They''re made under pressure — influenced by uncertainty, human perception, and emotional bias.',
  'That''s why intelligence without emotional understanding is incomplete.

Executives don''t struggle because they lack access to forecasting models. They struggle because instinct, fear, team dynamics or political pressure distort how information is received and acted on. Insight is only powerful if it resonates with the human who must execute it.

**Where emotional intelligence changes AI advisory**

**1. Translating insight into leadership action**

AI can highlight risks, but only emotional intelligence can guide how to deliver that insight in a way that drives action instead of resistance.

**2. Reducing fear-based decision patterns**

In high-stakes decisions, leaders often react to what feels safe, not what is strategically sound. A truly intelligent advisory system must recognise and account for fear-driven choices.

**3. Navigating executive dynamics**

Strategies don''t fail during analysis — they fail in boardroom conversations. Understanding influence, alignment and leadership behaviour is essential to making AI-driven insights truly effective.

**The next evolution of strategic intelligence**

Artificial intelligence provides depth. Emotional intelligence provides direction. Real strategic advisory requires both.

At AcronIQ, we''re designing intelligence systems that don''t just give answers — they give leaders clarity that speaks to both reason and conviction.

**Because in high-stakes environments, the decision that is mathematically correct is irrelevant if it cannot be confidently executed.**',
  'Joel Ogunniyi',
  'Founder & CEO, AcronIQ Research',
  'Strategic Advisor specialising in AI-driven decision systems',
  'Strategic Clarity Series',
  '["Advisory must factor emotional influence in AI decisions", "Executives struggle with fear, team dynamics, and political pressure", "AI provides depth; emotional intelligence provides direction", "Mathematically correct decisions fail if they can''t be confidently executed"]'::jsonb,
  true,
  '2025-12-01'
);
```

## How to Run Migration

1. Open Supabase SQL Editor
2. Copy and paste each INSERT statement
3. Click "Run"
4. Verify in Table Editor that articles appear
5. Test on website: http://localhost:5000/journal

## Verifying Migration

```sql
-- Check all published posts
SELECT title, slug, is_published, publish_date 
FROM cms.journal_posts 
WHERE is_published = true
ORDER BY publish_date DESC;

-- Count total posts
SELECT COUNT(*) as total_posts FROM cms.journal_posts;
```

## Rolling Back (if needed)

```sql
-- Delete all journal posts
DELETE FROM cms.journal_posts;

-- Or delete specific post
DELETE FROM cms.journal_posts WHERE slug = 'why-clarity-matters';
```
