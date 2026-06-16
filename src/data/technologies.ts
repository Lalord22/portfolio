export interface TechnologyItem {
  name: string
  category: 'Frontend' | 'Animation' | 'Language' | 'Tooling'
  logoUrl: string
}

const ASSET_BASE_URL = `${import.meta.env.BASE_URL}assets/images/`

export const technologies: TechnologyItem[] = [
  { name: 'React Native', category: 'Frontend', logoUrl: `${ASSET_BASE_URL}ReactTec.png` },
  { name: 'Node.js', category: 'Tooling', logoUrl: `${ASSET_BASE_URL}nodetec.png` },
  { name: 'JavaScript', category: 'Language', logoUrl: `${ASSET_BASE_URL}jstec.png` },
  { name: 'React', category: 'Frontend', logoUrl: `${ASSET_BASE_URL}React2tec.png` },
  { name: 'MySQL', category: 'Tooling', logoUrl: `${ASSET_BASE_URL}mySQLtec.png` },
  { name: 'Python', category: 'Language', logoUrl: `${ASSET_BASE_URL}pythontec.png` },
  { name: 'Figma', category: 'Frontend', logoUrl: `${ASSET_BASE_URL}figmatec.png` },
  { name: 'GitHub', category: 'Tooling', logoUrl: `${ASSET_BASE_URL}githubtec.png` },
  { name: 'Java', category: 'Language', logoUrl: `${ASSET_BASE_URL}javatec.png` },
  { name: 'Claude', category: 'Animation', logoUrl: `${ASSET_BASE_URL}claudetec.png` },
  { name: 'C++', category: 'Language', logoUrl: `${ASSET_BASE_URL}cplustec.png` },
  { name: 'PHP', category: 'Language', logoUrl: `${ASSET_BASE_URL}phptec.png` },
  
  
  
  
  
  
  
  
  
  
  
  
]
