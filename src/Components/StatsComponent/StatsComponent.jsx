export default function StatsComponent({stats, hobbies}) {
  
  const statsKeys = Object.keys(stats)
  const statsValues = Object.values(stats)

  const hobbiesKeys = Object.keys(hobbies)
  const hobbiesValues = Object.values(hobbies)
  return (
    <div>StatsComponent</div>
  )
}
