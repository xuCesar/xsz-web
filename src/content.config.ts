import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writing = defineCollection({
	loader: glob({ base: './src/content/writing', pattern: '**/*.md' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			summary: z.string(),
			date: z.coerce.date(),
			updated: z.coerce.date().optional(),
			status: z.enum(['draft', 'published']).default('published'),
			featured: z.boolean().default(false),
			tags: z.array(z.string()).default([]),
			type: z.enum(['technical', 'life', 'opinion', 'note']),
			cover: image().optional(),
			coverAlt: z.string().optional(),
		}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			summary: z.string(),
			date: z.coerce.date(),
			updated: z.coerce.date().optional(),
			status: z.enum(['draft', 'published']).default('published'),
			featured: z.boolean().default(false),
			tags: z.array(z.string()).default([]),
			role: z.string(),
			tech: z.array(z.string()).default([]),
			projectStatus: z.enum(['active', 'paused', 'shipped']).default('shipped'),
			liveUrl: z.url().optional(),
			repoUrl: z.url().optional(),
			cover: image().optional(),
			coverAlt: z.string().optional(),
		}),
});

const pages = defineCollection({
	loader: glob({ base: './src/content/pages', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		status: z.enum(['draft', 'published']).default('published'),
	}),
});

export const collections = { writing, projects, pages };
