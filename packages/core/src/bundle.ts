/**
 * @module minions-bundles-content/bundle
 * MinionType definitions and imports for Minions Bundle: Content.
 */

import type { MinionType } from 'minions-sdk';


// --- Inline Bundle Types ---

export const authorType: MinionType = {
  id: 'bundle-content-author',
  name: 'Author',
  slug: 'author',
  description: 'A person who writes content',
  icon: '✍️',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'bio', type: 'string', label: 'bio' },
    { name: 'twitter', type: 'string', label: 'twitter' },
  ],
};

export const contentBriefType: MinionType = {
  id: 'bundle-content-contentBrief',
  name: 'ContentBrief',
  slug: 'contentBrief',
  description: 'Instructions and goals for a new piece of content',
  icon: '📝',
  schema: [
    { name: 'topic', type: 'string', label: 'topic' },
    { name: 'targetAudience', type: 'string', label: 'targetAudience' },
    { name: 'keywords', type: 'string', label: 'keywords' },
    { name: 'dueDate', type: 'date', label: 'dueDate' },
    { name: 'status', type: 'select', label: 'status' },
  ],
};

export const draftType: MinionType = {
  id: 'bundle-content-draft',
  name: 'Draft',
  slug: 'draft',
  description: 'A work-in-progress piece of content',
  icon: '📄',
  schema: [
    { name: 'briefId', type: 'string', label: 'briefId' },
    { name: 'authorId', type: 'string', label: 'authorId' },
    { name: 'body', type: 'string', label: 'body' },
    { name: 'wordCount', type: 'number', label: 'wordCount' },
    { name: 'status', type: 'select', label: 'status' },
  ],
};

export const publishedPieceType: MinionType = {
  id: 'bundle-content-publishedPiece',
  name: 'PublishedPiece',
  slug: 'publishedPiece',
  description: 'A finalized, published content asset',
  icon: '✨',
  schema: [
    { name: 'draftId', type: 'string', label: 'draftId' },
    { name: 'url', type: 'string', label: 'url' },
    { name: 'publishedDate', type: 'date', label: 'publishedDate' },
    { name: 'channelId', type: 'string', label: 'channelId' },
  ],
};

export const channelType: MinionType = {
  id: 'bundle-content-channel',
  name: 'Channel',
  slug: 'channel',
  description: 'A distribution platform (blog, twitter, newsletter)',
  icon: '📢',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'url', type: 'string', label: 'url' },
  ],
};

export const campaignType: MinionType = {
  id: 'bundle-content-campaign',
  name: 'Campaign',
  slug: 'campaign',
  description: 'A marketing push grouping multiple pieces of content',
  icon: '🎯',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'startDate', type: 'date', label: 'startDate' },
    { name: 'endDate', type: 'date', label: 'endDate' },
  ],
};

// --- Bundle Export ---

export const bundleTypes: MinionType[] = [
  authorType,
  contentBriefType,
  draftType,
  publishedPieceType,
  channelType,
  campaignType,
];

