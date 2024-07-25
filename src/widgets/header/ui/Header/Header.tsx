import { Link } from 'react-router-dom'
import { useTheme } from '../../../../app/providers/ThemeProvider'
import { themeIcons } from '../../../../shared/assets'
import { formatDate } from '../../../../shared/helpers/formatDate'
import styles from './styles.module.css'

const Header = () => {
	const { isDark, toggleTheme } = useTheme()

	return (
		<header className={`styles.header ${isDark ? styles.dark : styles.light}`}>
			<div className={styles.info}>
				<Link to={'/'}>
					<h1 className={styles.title}>News Reactify</h1>
				</Link>
				<p className={styles.date}>{formatDate(new Date())}</p>
			</div>

			<img
				src={isDark ? themeIcons.dark : themeIcons.light}
				width={30}
				alt='theme'
				onClick={toggleTheme}
			/>
		</header>
	)
}

export default Header
