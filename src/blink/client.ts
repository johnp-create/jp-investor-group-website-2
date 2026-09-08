import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'jp-investor-website-vhdzwtz8',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_OeWtwoZjYJ3yWKKe5oqYt3YiW8n_yD3F',
  authRequired: false,
  auth: { mode: 'managed' },
})
