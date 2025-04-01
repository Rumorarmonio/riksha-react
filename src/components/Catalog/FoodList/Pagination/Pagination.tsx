import styles from './Pagination.module.scss'
import ReactPaginate from 'react-paginate'
import {JSX} from 'react'

type Props = {
  onChangePage: (page: number) => void,
  currentPage: number
}

// TODO: fix pagination
// TODO: React.FC vs JSX.Element vs ReactElement
export function Pagination({onChangePage, currentPage}: Props): JSX.Element {
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
