import { useAppDispatch } from '@/app/appStore'
import { useTheme } from '@/app/providers/ThemeProvider'
import { CategoriesType } from '@/entities/category/model/types'
import Categories from '@/entities/category/ui/Categories/Categories'
import { setFilters } from '@/entities/news/model/newsSlice'
import Search from '@/features/search/Search/Search'
import Slider from '@/features/slider/Slider/Slider'
import { IFilters } from '@/shared/interfaces'
import styles from './styles.module.css'

interface Props {
	filters: IFilters
	categories: CategoriesType[]
}

const NewsFilters = ({ filters, categories }: Props) => {
	const { isDark } = useTheme()

	const dispatch = useAppDispatch()

	return (
		<div className={styles.filters}>
			{categories ? (
				<Slider step={10} isDark={isDark}>
					<Categories
						categories={categories}
						selectedCategory={filters.category}
						setSelectedCategory={category => {
							dispatch(setFilters({ key: 'category', value: category }))
						}}
					/>
				</Slider>
			) : null}

			<Search
				keywords={filters.keywords}
				setKeywords={keywords =>
					dispatch(setFilters({ key: 'keywords', value: keywords }))
				}
			/>
		</div>
	)
}

export default NewsFilters
