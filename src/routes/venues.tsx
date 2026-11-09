import { createFileRoute } from '@tanstack/react-router'
import { InformationPage } from '../components/InformationPage'
export const Route = createFileRoute('/venues')({
  head: () => ({ meta: [{ title: 'Venues | X2 Weddings and Events' }] }),
  component: () => <InformationPage venues />,
})
