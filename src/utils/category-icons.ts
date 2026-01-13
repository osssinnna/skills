const iconPathCache: Record<string, string> = {};

export const getCategoryType = (categoryName: string): string => {
  const lowerName = categoryName.toLowerCase();

  if (iconPathCache[`type_${lowerName}`]) {
    return iconPathCache[`type_${lowerName}`];
  }

  let result = 'additional';
  
  if (lowerName.includes('бизнес') || lowerName.includes('карьера')) {
    result = 'business';
  } else if (lowerName.includes('творчество') || lowerName.includes('искусство')) {
    result = 'creativity';
  } else if (lowerName.includes('иностранные языки') || lowerName.includes('языки')) {
    result = 'languages';
  } else if (lowerName.includes('образование') || lowerName.includes('развитие')) {
    result = 'education';
  } else if (lowerName.includes('дом') || lowerName.includes('уют')) {
    result = 'home';
  } else if (lowerName.includes('здоровье') || lowerName.includes('лайфстайл')) {
    result = 'health';
  }
  
  iconPathCache[`type_${lowerName}`] = result;
  return result;
};

export const getCategoryIconPath = (categoryName: string): string => {
  const lowerName = categoryName.toLowerCase();
  
  if (iconPathCache[lowerName]) {
    return iconPathCache[lowerName];
  }

  const iconMap: Record<string, string> = {
    'бизнес': '/src/assets/briefcase.svg',
    'карьера': '/src/assets/briefcase.svg',
    'творчество': '/src/assets/palette.svg',
    'искусство': '/src/assets/palette.svg',
    'иностранные языки': '/src/assets/global.svg',
    'языки': '/src/assets/global.svg',
    'образование': '/src/assets/book.svg',
    'развитие': '/src/assets/book.svg',
    'дом': '/src/assets/home.svg',
    'уют': '/src/assets/home.svg',
    'здоровье': '/src/assets/lifestyle.svg',
    'лайфстайл': '/src/assets/lifestyle.svg',
  };

  let result = '/src/assets/default.svg';
  
  for (const [key, icon] of Object.entries(iconMap)) {
    if (lowerName.includes(key)) {
      result = icon;
      break;
    }
  }
  
  iconPathCache[lowerName] = result;
  return result;
};

export const getCategoryColor = (categoryName: string): string => {
  const categoryType = getCategoryType(categoryName);
  
  const colorMap: Record<string, string> = {
    'business': 'var(--tag-business, #EEE7F7)',
    'creativity': 'var(--tag-creativity, #FFE7F2)',
    'languages': 'var(--tag-languages, #EBE5C5)',
    'education': 'var(--tag-education, #E7F2F6)',
    'home': 'var(--tag-home, #F7EBE5)',
    'health': 'var(--tag-health, #E9F7E7)',
  };

  return colorMap[categoryType] || colorMap.additional;
};
