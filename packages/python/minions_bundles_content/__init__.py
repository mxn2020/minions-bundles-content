"""
Minions Bundle: Content Python SDK

Content pipeline bundle — drafts, publications, channels, campaigns
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Bundle: Content.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
