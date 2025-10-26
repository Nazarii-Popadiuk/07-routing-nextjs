import Link from 'next/link'
import styles from './SidebarNotes.module.css'

const tags = [
  { value: "All", label: "All notes" },
  { value: "Todo", label: "Todo" },
  { value: "Work", label: "Work" },
  { value: "Personal", label: "Personal" },
  { value: "Meeting", label: "Meeting" },
  { value: "Shopping", label: "Shopping" },
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