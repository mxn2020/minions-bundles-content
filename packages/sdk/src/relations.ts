/**
 * @module minions-bundles-content/relations
 * Relation definitions for Minions Bundle: Content.
 */

export const bundleRelations = [
  { from: 'draft', relation: 'fulfills', to: 'contentBrief' },
  { from: 'publishedPiece', relation: 'published_on', to: 'channel' },
  { from: 'publishedPiece', relation: 'part_of', to: 'campaign' },
  { from: 'draft', relation: 'written_by', to: 'author' },
];

