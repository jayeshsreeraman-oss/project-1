import { createFileRoute } from '@tanstack/react-router'
import { InformationPage } from '../components/InformationPage'
export const Route = createFileRoute('/about')({
  head: () => ({ meta: [{ title: 'About | X2 Weddings and Events' }] }),
  component: () => <InformationPage />,
})
