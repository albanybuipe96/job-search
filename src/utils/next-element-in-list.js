export const nextElementInList = (list, value) => {
  const currectIndex = list.indexOf(value)
  const nextIndex = (currectIndex + 1) % list.length
  const next = list[nextIndex]
  return next
}
