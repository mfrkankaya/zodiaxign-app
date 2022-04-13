export const replaceAnalysisFields = (text, user) =>
  text
    .replace(/%%yas%%/g, user.age)
    .replace(/%%isim%%/g, user.firstName)
    .replace(/%%soyisim%%/g, user.lastName)
    .replace(/%%cinsiyet%%/g, user.gender)
