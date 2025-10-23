import Link from 'next/link'
import styles from './SidebarNotes.module.css'

type Props = {
  tags: string[];
}

const SidebarNotes = ({tags}: Props) => {
    return (
  <ul className={styles.menuList}>
    {tags.map(tag => (
      <li key={tag}  className={styles.menuItem}>
        <Link href={`/notes/filter/${tag}`} className={styles.menuLink}>
          {tag}
        </Link>
      </li>
      ))}
    </ul>

    )
}
export default SidebarNotes