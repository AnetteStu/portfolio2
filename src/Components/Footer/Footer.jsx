import ListItem from "./ListItem";

const getdate = new Date();
const date = getdate.getFullYear()

export default function Footer() {
  return (
    <footer>
      <ul>
        <ListItem t={`Site development by © Anette Dahle ${date}`}/>
        {/* <ListItem t={date}/> */}
        <ListItem t="This portfolio is created entirely using custom CSS/SCSS and React"/>
      </ul>
    </footer>
  )
}
