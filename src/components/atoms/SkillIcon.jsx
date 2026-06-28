const iconMap = {
  // Languages
  js: '🟨',
  ts: '🟦',
  html: '🟧',
  css: '🟦',
  python: '🐍',
  sql: '🗄️',
  rust: '🦀',

  // Frameworks & libraries
  react: '⚛️',
  nextjs: '▲',
  vue: '💚',
  tailwind: '🌊',
  tensorflow: '🧠',
  pytorch: '🔥',
  sklearn: '📊',
  huggingface: '🤗',

  // Tools
  vite: '⚡',
  git: '🔀',
  webpack: '📦',
  figma: '🎨',
  docker: '🐳',
  mlflow: '📈',
  k8s: '☸️',
  sagemaker: '☁️',

  // Data & infra
  jupyter: '📓',
  redis: '🔴',
  kafka: '📨',
  langchain: '⛓️',
  chromadb: '💜',
  openai: '🤖',

  // Management
  team: '👥',
  mentor: '🎯',
  okr: '🎯',
  feedback: '💬',
  scrum: '🔄',
  kanban: '📋',
  safe: '🏗️',
  lean: '📉',
  architecture: '🏛️',
  codereview: '👁️',
  devops: '🔄',
  strategy: '🧭',

  // Categories
  code: '💻',
  framework: '🧩',
  tools: '🛠️',
  ml: '🤖',
  infra: '☁️',
  methodology: '📋',
  tech: '⚙️',
  leadership: '👤',
}

export default function SkillIcon({ name, icon, size = 'md', className = '' }) {
  const emoji = iconMap[icon] || '🔹'
  const sizeClass = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-3xl' : 'text-xl'

  return (
    <span
      className={`inline-flex items-center justify-center ${sizeClass} ${className}`}
      title={name}
      role="img"
      aria-label={name}
    >
      {emoji}
    </span>
  )
}
