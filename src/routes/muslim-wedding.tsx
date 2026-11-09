import { createFileRoute } from '@tanstack/react-router'
import { WeddingPage } from '../components/WeddingPage'
export const Route = createFileRoute('/muslim-wedding')({
  head: () => ({
    meta: [
      { title: 'Muslim Wedding | X2 Weddings and Events' },
      {
        name: 'description',
        content:
          'Muslim Wedding inspiration and thoughtful planning from X2 Weddings and Events. EXPERT IN EXPRESSIONS.',
      },
    ],
  }),
  component: () => <WeddingPage index={1} />,
})
