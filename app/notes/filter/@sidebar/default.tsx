import Link from 'next/link'
import styles from './SidebarNotes.module.css'

const tags = [
  { value: "all", label: "All notes" },
  { value: "todo", label: "Todo" },
  { value: "work", label: "Work" },
  { value: "personal", label: "Personal" },
  { value: "meeting", label: "Meeting" },
  { value: "shopping", label: "Shopping" },
];

const SidebarNotes = () => {
    return (
  <ul className={styles.menuList}>
    {tags.map((tag) => (
      <li key={tag.value}  className={styles.menuItem}>
        <Link href={`/notes/filter/${tag.value}`} className={styles.menuLink}>
          {tag.label}
        </Link>
      </li>
      ))}
    </ul>

    )
}
export default SidebarNotes