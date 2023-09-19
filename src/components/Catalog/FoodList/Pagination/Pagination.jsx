import styles from './Pagination.module.scss'
import ReactPaginate from 'react-paginate'

export function Pagination({onChangePage}) {
    return (
        <ReactPaginate
            className={styles.pagination}
            breaklabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={event => onChangePage(event.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={8}
            renderOnZeroPageCount={null}
        />
    )
}
