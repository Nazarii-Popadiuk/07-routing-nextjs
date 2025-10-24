"use client"

import styles from './page.module.css'
import NoteList from '../../../../components/NoteList/NoteList'
import Pagination from '../../../../components/Pagination/Pagination'
import SearchBox from '../../../../components/SearchBox/SearchBox'
import Modal from '../../../../components/Modal/Modal'
import NoteForm from '../../../../components/NoteForm/NoteForm'
import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { fetchNotes } from '../../../../lib/api'
import { useDebounce } from 'use-debounce'
import { useEffect, useState } from 'react'

type Props = {
  initialSearch: string,
    initialPage: number,
  initialTag?: string,
  
}

export default function App({ initialSearch, initialPage, initialTag = ''}: Props) {
    const [search, setSearch] = useState(initialSearch);
    const [debouncedSearch] = useDebounce(search, 500);
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [isModalOpen, setIsModalOpen] = useState(false)
   

    const closedModal = () => setIsModalOpen(false);
    const openModal = () => setIsModalOpen(true);

    const tag = initialTag;

    const { data, isLoading, isError } = useQuery({
        queryKey: ['notes', debouncedSearch, currentPage - 1, tag],
        queryFn: () => fetchNotes(debouncedSearch, currentPage, tag),
        placeholderData: keepPreviousData,
    
    });

    useEffect(() => {
        setCurrentPage(1);
    }, [debouncedSearch, tag])



    const handlePageChange = (selectedPage: number) => {
        setCurrentPage(selectedPage);
    }


    return (
<div className={styles.app}>
    <header className={styles.toolbar}>
                {<SearchBox onChange={setSearch} />}
        {data && data.totalPages > 1 && (<Pagination pageCount={data.totalPages} currentPage={currentPage} onPageChange={handlePageChange}/>)}
        {<button className={styles.button} onClick={openModal}>Create note +</button>
}
            </header>
            {isLoading && <p className={styles.loader}>Loading...</p>}
            {isError && <p className={styles.error}>An error has happend...</p>}
            {data && <NoteList notes={data.notes} />}
            {isModalOpen && (<Modal onClose={closedModal}>
                <NoteForm onClose={closedModal} />
                </Modal>)}
            
</div>
    )
}
