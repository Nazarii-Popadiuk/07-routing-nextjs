'use client'

import { useQuery } from "@tanstack/react-query"
import { fetchNoteById } from "@/lib/api"
import NotesModal from "@/components/Modal/Modal"
import styles from './Modal.module.css'


type Props = {
    noteId: string;
    onClose: () => void;
}

export default function NotePreview({ noteId, onClose }: Props) {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['note', noteId],
        queryFn: () => fetchNoteById(noteId)
    })

    if (isLoading) return <NotesModal onClose={onClose}><p>Loading...</p></NotesModal>
    if (isError || !data) return <NotesModal onClose={onClose}><p>Error loading note</p></NotesModal>
    
    return (
        <NotesModal onClose={onClose}>
            <div className={styles.preview}>
        <h2>{data.title}</h2>
        <p>{data.content}</p>
      </div>
    </NotesModal>
    )

}