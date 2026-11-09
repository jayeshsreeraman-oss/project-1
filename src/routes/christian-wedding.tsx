import { createFileRoute } from '@tanstack/react-router'
import { WeddingPage } from '../components/WeddingPage'
export const Route = createFileRoute('/christian-wedding')({
  head: () => ({
    meta: [
      { title: 'Christian Wedding | X2 Weddings and Events' },
      {
        name: 'description',
        content:
          'Christian Wedding inspiration and thoughtful planning from X2 Weddings and Events. EXPERT IN EXPRESSIONS.',
      },
    ],
  }),
  component: () => <WeddingPage index={2} />,
})
