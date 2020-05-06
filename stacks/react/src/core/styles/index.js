import * as Colors from './colors'
export { Colors }

export function styleColor (id) {
  const [type, name, shade] = id.split('.')

  if (type.toLowerCase() === 'material') {
    return Colors.MaterialColors[name][shade]
  }

  return Colors.MaterialColors.grey[200]
}
