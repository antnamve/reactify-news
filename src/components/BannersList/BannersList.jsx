import { withSkeleton } from '../../helpers/hocs/withSkeleton'
import Banner from '../Banner/Banner'
import styles from './styles.module.css'

const BannersList = ({ banners }) => {
	return (
		<ul className={styles.banners}>
			{banners?.map(banner => {
				return <Banner key={banner.id} item={banner} />
			})}
		</ul>
	)
}

const BannersListWithSkeleton = withSkeleton(BannersList, 'banner', 10, 'row')

export default BannersListWithSkeleton
