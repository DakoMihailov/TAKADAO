import { FC, Fragment, useEffect, useState } from 'react'
import { Transition, Combobox } from '@headlessui/react'
import { classNames } from '../utils'
import { Arrow } from '../components/Icons'
import { IOption } from '@/interfaces'

export interface SelectProps {
  options: Array<IOption>
  value: IOption
  onChange: (value: IOption) => void
  className?: string
  selectClass?: string
  disabled?: boolean
  size?: 'small' | 'normal'
  placeholder: string
  mode: 'round' | 'square'
}

const Select: FC<SelectProps> = ({
  options,
  value,
  onChange,
  className,
  selectClass,
  disabled = false,
  size = 'normal',
  placeholder,
  mode = 'square',
}) => {
  const [query, setQuery] = useState('')
  const [filtered, setFiltered] = useState(options)

  useEffect(() => {
    setFiltered(
      options.filter(
        (option) =>
          option.label.toLowerCase().indexOf(query.toLowerCase()) !== -1
      )
    )
  }, [query, options])

  return (
    <Combobox value={value} onChange={onChange} disabled={disabled}>
      {({ open }) => (
        <Fragment>
          <div
            className={classNames(
              'relative h-[50px] w-[215px]',
              className || ''
            )}
          >
            <Combobox.Button
              className={classNames(
                selectClass ||
                  'relative h-full w-full form-container cursor-default px-6 py-3 text-left bg-gray-100 text-gray-200 text-sm hover:cursor-pointer',
                mode === 'round' ? ' rounded-br-2xl' : ''
              )}
            >
              <span className="text-base text-left truncate">
                {value.label.length > 0 ? value.label : placeholder}
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                <Arrow />
              </span>
            </Combobox.Button>
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Combobox.Options className="absolute z-10 w-full px-6 py-3 mt-2 overflow-auto bg-gray-100 rounded-bl-2xl rounded-br-2xl">
                {filtered.map((option) => (
                  <Combobox.Option
                    key={option.id}
                    className={({ active }) =>
                      classNames(
                        active
                          ? 'bg-gray-600'
                          : 'text-gray-900 rounded-xl px-3',
                        'relative cursor-pointer select-none py-2 px-3 hover:bg-gray-400'
                      )
                    }
                    value={option}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span
                        className={classNames(
                          'break-all flex-1 text-sm text-white',
                          size === 'small' ? 'text-xs' : 'text-sm'
                        )}
                      >
                        {option.label}
                      </span>
                    </div>
                  </Combobox.Option>
                ))}
                {filtered.length === 0 && (
                  <div className="p-2 text-base text-gray-200 bg-gray-100 hover:cursor-pointer">
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

Select.defaultProps = {
  className: '',
}

export default Select
