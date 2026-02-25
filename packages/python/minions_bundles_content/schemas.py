"""
Minions Bundle: Content SDK — Type Schemas
Custom MinionType schemas for Minions Bundle: Content.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

class Author(MinionType):
    """A person who writes content"""
    slug = "author"
    icon = "✍️"

    fields = [
        FieldDefinition(name="name", type="str", label="name"),
        FieldDefinition(name="bio", type="str", label="bio"),
        FieldDefinition(name="twitter", type="str", label="twitter"),
    ]


class ContentBrief(MinionType):
    """Instructions and goals for a new piece of content"""
    slug = "contentBrief"
    icon = "📝"

    fields = [
        FieldDefinition(name="topic", type="str", label="topic"),
        FieldDefinition(name="targetAudience", type="str", label="targetAudience"),
        FieldDefinition(name="keywords", type="str", label="keywords"),
        FieldDefinition(name="dueDate", type="str", label="dueDate"),
        FieldDefinition(name="status", type="str", label="status"),
    ]


class Draft(MinionType):
    """A work-in-progress piece of content"""
    slug = "draft"
    icon = "📄"

    fields = [
        FieldDefinition(name="briefId", type="str", label="briefId"),
        FieldDefinition(name="authorId", type="str", label="authorId"),
        FieldDefinition(name="body", type="str", label="body"),
        FieldDefinition(name="wordCount", type="float", label="wordCount"),
        FieldDefinition(name="status", type="str", label="status"),
    ]


class PublishedPiece(MinionType):
    """A finalized, published content asset"""
    slug = "publishedPiece"
    icon = "✨"

    fields = [
        FieldDefinition(name="draftId", type="str", label="draftId"),
        FieldDefinition(name="url", type="str", label="url"),
        FieldDefinition(name="publishedDate", type="str", label="publishedDate"),
        FieldDefinition(name="channelId", type="str", label="channelId"),
    ]


class Channel(MinionType):
    """A distribution platform (blog, twitter, newsletter)"""
    slug = "channel"
    icon = "📢"

    fields = [
        FieldDefinition(name="name", type="str", label="name"),
        FieldDefinition(name="url", type="str", label="url"),
    ]


class Campaign(MinionType):
    """A marketing push grouping multiple pieces of content"""
    slug = "campaign"
    icon = "🎯"

    fields = [
        FieldDefinition(name="name", type="str", label="name"),
        FieldDefinition(name="startDate", type="str", label="startDate"),
        FieldDefinition(name="endDate", type="str", label="endDate"),
    ]


BUNDLE_TYPES = [Author, ContentBrief, Draft, PublishedPiece, Channel, Campaign]
