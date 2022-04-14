export const calculateAge = (birthDate) => {
  const [day, month, year] = birthDate.split(' / ')
  const dayInt = parseInt(day)
  const monthInt = parseInt(month)
  const yearInt = parseInt(year)

  const date = new Date(yearInt, monthInt - 1, dayInt)
  const ageDifMs = Date.now() - date.getTime()
  const ageDate = new Date(ageDifMs)
  const age = Math.abs(ageDate.getUTCFullYear() - 1970)

  return age
}

export const validateBirthDate = (birthDate) => {
  const [day, month, year] = birthDate.split(' / ')
  const dayInt = parseInt(day)
  const monthInt = parseInt(month)
  const yearInt = parseInt(year)
  const today = new Date()

  if (yearInt > today.getFullYear()) return 'Gelecekte doğmuş olamazsınız.'
  if (monthInt > 12 || monthInt <= 0)
    return 'Ay bilgisi 1 ile 12 arasında bir değer olmalı.'
  if (dayInt > 31 || dayInt <= 0)
    return 'Gün bilgisi 1 ile 31 arasında bir değer olmalı.'
  return ''
}
