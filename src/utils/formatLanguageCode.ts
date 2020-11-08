import languages from '@cospired/i18n-iso-languages'

const formatLanguage = async (code: string) => {
  languages.registerLocale(
    await import('@cospired/i18n-iso-languages/langs/pt.json')
  )

  return languages.getName(code, 'pt')
}

export { formatLanguage }
