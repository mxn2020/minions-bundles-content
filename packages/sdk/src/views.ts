/**
 * @module minions-bundles-content/views
 * Named query filters for Minions Bundle: Content.
 */

export const bundleViews = {
  readyToPublish: {
    description: 'Drafts approved but not yet published',
    type: 'draft',
    filter: {
      "status": "=== 'approved'"
},
  },
};

