import { TOTAL_PAGES } from '../../constants/constants'
import NewsFilters from '../NewsFilters/NewsFilters'
import NewsList from '../NewsList/NewsList'
import Pagination from '../Pagination/Pagination'
import styles from './styles.module.css'

const NewsByFilters = ({ filters, changeFilter, isLoading, news }) => {
	const handleNextPage = () => {
		if (filters.page_number < TOTAL_PAGES) {
			changeFilter('page_number', filters.page_number + 1)
		}
	}

	const handlePrevPage = () => {
		if (filters.page_number > 1) {
			changeFilter('page_number', filters.page_number - 1)
		}
	}

	const handlePageClick = pageNumber => {
		changeFilter('page_number', pageNumber)
	}

	return (
		<section className={styles.section}>
			<NewsFilters changeFilter={changeFilter} filters={filters} />

			<Pagination
				handlePrevPage={handlePrevPage}
				handleNextPage={handleNextPage}
				handlePageClick={handlePageClick}
				totalPages={TOTAL_PAGES}
				currentPage={filters.page_number}
			/>
			<NewsList isLoading={isLoading} news={news} />

			<Pagination
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
				handlePageClick={handlePageClick}
				currentPage={filters.page_number}
				totalPages={TOTAL_PAGES}
			/>
		</section>
	)
}

export default NewsByFilters
