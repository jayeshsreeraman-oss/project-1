import { createFileRoute } from '@tanstack/react-router'
import { ContactPage } from '../components/ContactPage'
export const Route = createFileRoute('/contact')({
  head: () => ({ meta: [{ title: 'Contact | X2 Weddings and Events' }] }),
  component: () => <ContactPage />,
})
