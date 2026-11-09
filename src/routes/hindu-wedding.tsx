import { createFileRoute } from '@tanstack/react-router'
import { WeddingPage } from '../components/WeddingPage'
export const Route = createFileRoute('/hindu-wedding')({
  head: () => ({
    meta: [
      { title: 'Hindu Wedding | X2 Weddings and Events' },
      {
        name: 'description',
        content:
          'Hindu Wedding inspiration and thoughtful planning from X2 Weddings and Events. EXPERT IN EXPRESSIONS.',
      },
    ],
  }),
  component: () => <WeddingPage index={0} />,
})
