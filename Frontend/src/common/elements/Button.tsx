import { FC } from 'react'
import { classNames } from '@/common/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  width?: 'fit-parent' | 'fit-content'
  isLoading?: boolean
  icon?: JSX.Element | null
  iconPosition?: 'start' | 'end'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const Button: FC<ButtonProps> = ({
  color = 'white',
  text,
  width = 'fit-content',
  className,
  isLoading = false,
  icon,
  iconPosition = 'start',
  disabled,
  size = 'lg',
  ...props
}) => {
  const widthClass = width === 'fit-content' ? 'w-fit' : 'w-full'
  const iconElem = (
    <span
      className={classNames(
        text ? (iconPosition === 'start' ? 'mr-2' : 'ml-2') : ''
      )}
    >
      {icon}
    </span>
  )

  const sizeClass = classNames(
    size === 'xs' ? 'px-1 py-1 ' : '',
    size === 'sm' ? 'px-2.5 py-1.5  text-sm' : '',
    size === 'md' ? 'px-2.5 py-1.5 ' : '',
    size === 'lg' ? 'px-[50px]' : '',
    size === 'xl' ? 'px-6 py-4 ' : ''
  )

  const backgroundClass =
    'text-gray-100 bg-yellow-100 rounded-tl-lg rounded-br-lg text-base font-normal'

  return (
    <button
      {...props}
      className={classNames(
        'flex items-center justify-center font-semibold cursor-pointer transition-all duration-100 h-[50px]',
        widthClass,
        sizeClass,
        backgroundClass,
        className ? className : ''
      )}
    >
      {iconPosition === 'start' && icon && iconElem}
      {text}
      {iconPosition === 'end' && icon && iconElem}
    </button>
  )
}

export default Button
