import { useAppSelector } from '@/app/appStore'
import NewsDetails from '@/entities/news/ui/NewsDetails/NewsDetails'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export const NewsPage = () => {
	const currentNews = useAppSelector(state => state.news.currentNews)

	if (!currentNews) {
		return (
			<div>
				<h1>
					Cannot find news
					<Link to={'/'}>
						<h3>Go to main page</h3>
					</Link>
				</h1>
			</div>
		)
	}
	return (
		<main className={styles.news}>
			<h1>{currentNews.title}</h1>

			<NewsDetails item={currentNews} />
		</main>
	)
}
