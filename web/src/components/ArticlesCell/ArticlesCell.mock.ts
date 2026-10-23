// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  articles: [
    {
      __typename: 'Post' as const,
      id: 42,
      title: 'Erster Beitrag',
      body: 'Hallo Welt',
      createdAt: '2026-10-23T08:00:00Z',
    },
    {
      __typename: 'Post' as const,
      id: 43,
      title: 'Zweiter Beitrag',
      body: 'Redwood macht Spass',
      createdAt: '2026-10-23T09:00:00Z',
    },
  ],
})
