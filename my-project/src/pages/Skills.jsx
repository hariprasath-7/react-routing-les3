const skills = [
  { name: 'React', level: 90 },
  { name: 'React Router', level: 80 },
  { name: 'JavaScript', level: 88 },
  { name: 'Vite', level: 75 },
]

const Skills = () => {
  return (
    <section className="page">
      <span className="eyebrow">Skills</span>
      <h1>What powers this app.</h1>
      <p className="lead">
        The core technologies behind the project, and a rough sense of how
        central each one is to the build.
      </p>
      <div className="skill-list">
        {skills.map((skill) => (
          <div className="skill" key={skill.name}>
            <div className="skill-head">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="bar">
              <div className="bar-fill" style={{ width: `${skill.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
