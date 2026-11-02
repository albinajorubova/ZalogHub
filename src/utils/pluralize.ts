export function remainingLabel(count: number): string {
  const lastDigit = count % 10
  const lastTwo = count % 100

  if (lastDigit === 1 && lastTwo !== 11) return `Осталась ${count} задача`
  if (lastDigit >= 2 && lastDigit <= 4 && (lastTwo < 12 || lastTwo > 14)) {
    return `Осталось ${count} задачи`
  }
  return `Осталось ${count} задач`
}
