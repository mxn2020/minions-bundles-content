---
title: Quick Start
description: "Get up and running with Minions Bundle: Content in minutes"
---

## TypeScript

```typescript
import { createClient } from '@mxn2020/minions-bundles-content-core';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_bundles_content import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
minions-bundles-content info
```
