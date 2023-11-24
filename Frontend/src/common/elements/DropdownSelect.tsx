import { FC, Fragment, useEffect, useState } from 'react'
import { Transition, Combobox } from '@headlessui/react'
import { classNames } from '../utils'
import { IOption } from '@/interfaces'

export interface SelectProps {
  options: Array<IOption>
  value: IOption
  onChange: (value: IOption) => void
  setQuery: (value: string) => string
  searchString: string
  className?: string
  size?: 'small' | 'normal'
  icon?: JSX.Element | null
  mode: 'square' | 'round'
}

const DropdownSelect: FC<SelectProps> = ({
  options,
  value,
  onChange,
  setQuery,
  searchString,
  className,
  icon,
  mode = 'square',
}) => {
  const [filtered, setFiltered] = useState(options)

  useEffect(() => {
    setFiltered(
      options.filter(
        (option) => option.label.toLowerCase().indexOf(searchString) !== -1
      )
    )
    if (options.length == 0) setFiltered([])
  }, [searchString, options])

  return (
    <Combobox value={value} onChange={onChange}>
      {({ open }) => (
        <Fragment>
          <div className={classNames('relative', className || '')}>
            <div className="relative h-[50px] w-[600px]">
              <Combobox.Button className="absolute inset-y-0 flex items-center justify-start left-6 focus:outline-none cursor-none">
                {icon}
              </Combobox.Button>
              <Combobox.Input
                className={classNames(
                  'w-full h-full pl-[60px] pr-6 py-3  font-medium text-base text-gray-200 bg-gray-100/40 outline-none cursor-text',
                  mode === 'round' ? 'rounded-tl-2xl' : ''
                )}
                onChange={(e) => {
                  setQuery(e.target.value)
                }}
                displayValue={() => searchString}
                autoComplete="off"
              />
            </div>
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Combobox.Options className="absolute z-10 w-full px-6 py-3 mt-2 overflow-auto bg-gray-100/40 rounded-bl-2xl rounded-br-2xl">
                {filtered.map((option) => (
                  <Combobox.Option
                    key={option.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-gray-100/40' : 'rounded-xl ',
                        'relative cursor-pointer select-none py-2 '
                      )
                    }
                    value={option}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span
                        className={classNames(
                          'break-all flex-1 text-base text-gray-200 p-2'
                        )}
                      >
                        {option.label}
                      </span>
                    </div>
                  </Combobox.Option>
                ))}
                {filtered.length === 0 && (
                  <div className="p-1 text-base text-gray-200 hover:cursor-pointer">
                    Nothing found
                  </div>
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Fragment>
      )}
    </Combobox>
  )
}

DropdownSelect.defaultProps = {
  className: '',
}

export default DropdownSelect
