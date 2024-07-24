import { withSkeleton } from '../../helpers/hocs/withSkeleton'
import { INews } from '../../interfaces'
import Banner from '../Banner/Banner'
import styles from './styles.module.css'

interface Props {
	banners?: INews[] | null
}

const BannersList = ({ banners }: Props) => {
	return (
		<ul className={styles.banners}>
			{banners?.map(banner => {
				return <Banner key={banner.id} item={banner} />
			})}
		</ul>
	)
}

const BannersListWithSkeleton = withSkeleton<Props>(
	BannersList,
	'banner',
	10,
	'row'
)

export default BannersListWithSkeleton
