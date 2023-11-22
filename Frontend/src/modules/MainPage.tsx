import { FC, useEffect, useState } from 'react'
import Button from '@/common/elements/Button'
import DropdownSelect from '@/common/elements/DropdownSelect'
import { useDebounce } from 'use-debounce'
import api from '@/api'
import { IOption } from '@/interfaces'
import { Search } from '@/common/components/Icons'
import Select from '@/common/elements/Select'

const MainPage: FC = () => {
  const [options, setOptions] = useState<IOption[]>([])
  const [defaultValue, setDefaultValue] = useState<IOption>({
    id: '',
    label: '',
    value: '',
  })
  const [permission, setPermission] = useState<IOption>({
    id: 0,
    label: '',
    value: '',
  })

  const [value, setValue] = useState('')

  const [searchString] = useDebounce(value, 1000)

  const changeFormSelect = (value: IOption) => {
    setDefaultValue(value)
    setValue(value.label)
  }

  const setSearchValue = (searchValue: string) => {
    setValue(searchValue)
    return value
  }

  useEffect(() => {
    api.search
      .getSearchFields(searchString)
      .then((response) => {
        setOptions(response)
      })
      .catch(() => {})
  }, [searchString])

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <span className="text-2xl font-bold text-white">
        Book Your Dream Venue Today: Find, Reserve, and Play with Ease!
      </span>
      <div className="flex flex-row gap-6">
        <div className="flex flex-row gap-[1px]">
          <DropdownSelect
            options={options}
            value={defaultValue}
            onChange={(value) => {
              changeFormSelect(value)
            }}
            searchString={value}
            setQuery={(value: string) => setSearchValue(value)}
            className="w-[600px]"
            icon={<Search />}
            mode="round"
          />
          <Select
            className="w-full"
            options={[]}
            value={permission}
            onChange={() => {}}
            placeholder="Date"
            mode="square"
          />
          <Select
            className="w-full"
            options={[]}
            value={permission}
            onChange={() => {}}
            placeholder="Date"
            mode="round"
          />
        </div>
        <Button text="Search" size="lg" />
      </div>
    </div>
  )
}

export default MainPage
