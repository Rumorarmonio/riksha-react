import styles from './Pagination.module.scss'
import ReactPaginate from 'react-paginate'
import {ReactElement} from 'react'

type Props = {
  onChangePage: (page: number) => void,
  currentPage: number
}

// TODO: fix pagination
export function Pagination({onChangePage, currentPage}: Props): ReactElement {
  return (
    <ReactPaginate
      className={styles.pagination}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={event => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={8}
      forcePage={currentPage - 1}
      renderOnZeroPageCount={null}
    />
  )
}
