const skills = [
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python', 'ML Engineering'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 5,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Microsoft Office',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Numpy',
    competency: 4,
    category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'Jupyter',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'R',
    competency: 4,
    category: ['Languages', 'Data Science', 'Data Engineering', 'ML Engineering'],
  },
  {
    title: 'Data Visualization',
    competency: 4,
    category: ['Data Science', 'Javascript'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Adobe Suite',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'SAS',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Data Mining',
    competency: 3,
    category: ['ML Engineering'],
  },
  {
    title: 'Docker',
    competency: 2,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 2,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'PyTorch',
    competency: 2,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Spark',
    competency: 2,
    category: ['Data Engineering', 'ML Engineering'],
  },
  {
    title: 'Javascript',
    competency: 2,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 1,
    category: ['Languages'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
  '#fdca40',
  '#f72585',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index % colors.length],
}));

export { categories, skills };
