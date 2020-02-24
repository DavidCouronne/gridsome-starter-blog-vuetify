export function genChip (item) {
    if (item.new) return 'new'
    if (item.updated) return 'updated'
    if (item.deprecated) return 'deprecated'
    if (item.help) return 'help'
  }
