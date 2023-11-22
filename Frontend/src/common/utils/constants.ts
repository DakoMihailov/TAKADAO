import { MultiSelectOption } from '../elements/MultiSelect'
import { IOption } from '../elements/DropdownSelect'

export const appLinks = {
  dashboard: '/dashboard',
  agents: '/agents',
  chat: '/chat',
  edit: '/agents/edit',
  create: '/agents/create',
  workflows: '/workflows',
  bookmarks: '/bookmarks',
  company: '/company',
  setting: '/setting',
}

export const DEMO_CHAT = 'demo##chats'

export const Roles: IOption[] = [
  {
    id: 0,
    label: 'Director',
  },
  {
    id: 1,
    label: 'Employee',
  },
]

export const Langs: MultiSelectOption[] = [
  {
    value: '0',
    label: 'Malay',
  },
  {
    value: 'Mandarin',
    label: 'Mandarin',
  },
  {
    value: 'English',
    label: 'English',
  },
]

export const Agents: MultiSelectOption[] = [
  {
    value: 'Farah',
    label: 'Farah',
  },
  {
    value: 'Maya',
    label: 'Maya',
  },
  {
    value: 'Rachel',
    label: 'Rachel',
  },
]

export const Workflows: MultiSelectOption[] = [
  {
    value: 'Extended Warranty',
    label: 'Extended Warranty',
  },
  {
    value: 'Logistics Process',
    label: 'Logistics Process',
  },
  {
    value: 'Contact Partner',
    label: 'Contact Partner',
  },
]

export const Models: IOption[] = [
  {
    id: 0,
    label: 'Claude 2',
  },
  {
    id: 1,
    label: 'Llama 2',
  },
  {
    id: 2,
    label: 'Bard',
  },
  {
    id: 3,
    label: 'GPT-4',
  },
  {
    id: 4,
    label: 'GPT-3.5',
  },
]

export const Times: IOption[] = [
  { id: 0, label: '1 Day' },
  { id: 1, label: '1 Week' },
  { id: 2, label: '1 Month' },
]

export const ImageUrl = process.env.NEXT_PUBLIC_ASSET_URL

export const ServerUrl = process.env.NEXT_PUBLIC_API_URL
