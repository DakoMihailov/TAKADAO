export const classNames = (...classes: string[]) =>
  classes.filter(Boolean).join(' ')

export const numberToK = (num: number) => {
  return num > 1000
    ? num % 1 === 0
      ? num / 1000 + 'k'
      : (num / 1000).toFixed(1)
    : num
}
