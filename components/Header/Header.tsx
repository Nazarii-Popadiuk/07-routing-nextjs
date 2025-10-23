import Link from "next/link"
import styles from "./Header.module.css"
import TagsMenu from "../TagsMenu/TagsMenu"


const Header = () => {
  
return (
  <header className={styles.header}>
    <Link href="/" aria-label="Home">
      NoteHub
    </Link>
    <nav aria-label="Main Navigation">
      <ul className={styles.navigation}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <TagsMenu />
        </li>
      </ul>
    </nav>
  </header>
)
}
export default Header