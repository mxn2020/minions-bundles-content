import { describe, it, expect } from 'vitest';
import { bundleTypes } from '../bundle.js';
import { VERSION } from '../index.js';

describe('Bundle SDK', () => {
    it('should export a version string', () => {
        expect(VERSION).toBeDefined();
        expect(typeof VERSION).toBe('string');
    });

    it('should have bundleTypes array populated', () => {
        expect(bundleTypes).toBeDefined();
        expect(Array.isArray(bundleTypes)).toBe(true);
        expect(bundleTypes.length).toBeGreaterThan(0);
    });

    it('should define the authorType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'author');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Author');
        expect(type?.schema.length).toBe(3);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('name');
        expect(fieldNames).toContain('bio');
        expect(fieldNames).toContain('twitter');
    });

    it('should define the contentBriefType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'contentBrief');
        expect(type).toBeDefined();
        expect(type?.name).toBe('ContentBrief');
        expect(type?.schema.length).toBe(5);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('topic');
        expect(fieldNames).toContain('targetAudience');
        expect(fieldNames).toContain('keywords');
        expect(fieldNames).toContain('dueDate');
        expect(fieldNames).toContain('status');
    });

    it('should define the draftType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'draft');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Draft');
        expect(type?.schema.length).toBe(5);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('briefId');
        expect(fieldNames).toContain('authorId');
        expect(fieldNames).toContain('body');
        expect(fieldNames).toContain('wordCount');
        expect(fieldNames).toContain('status');
    });

    it('should define the publishedPieceType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'publishedPiece');
        expect(type).toBeDefined();
        expect(type?.name).toBe('PublishedPiece');
        expect(type?.schema.length).toBe(4);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('draftId');
        expect(fieldNames).toContain('url');
        expect(fieldNames).toContain('publishedDate');
        expect(fieldNames).toContain('channelId');
    });

    it('should define the channelType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'channel');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Channel');
        expect(type?.schema.length).toBe(2);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('name');
        expect(fieldNames).toContain('url');
    });

    it('should define the campaignType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'campaign');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Campaign');
        expect(type?.schema.length).toBe(3);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('name');
        expect(fieldNames).toContain('startDate');
        expect(fieldNames).toContain('endDate');
    });
});
