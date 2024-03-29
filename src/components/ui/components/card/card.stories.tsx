import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './card.tsx'

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const CardStand: Story = {
  args: {
    background: 'black',
    borderRadius: 16,
    children: 'Card',
    height: 552,
    maxWidth: 420,
  },
}
