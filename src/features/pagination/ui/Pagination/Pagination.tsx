import { IPaginationProps } from '../../../shared/interfaces'
import Pagination from '../PaginationButtons/PaginationButtons'

interface Props {
	top?: boolean
	bottom?: boolean
	children: React.ReactNode
}

const PaginationWrapper = ({
	top,
	bottom,
	children,
	...paginationProps
}: Props & IPaginationProps) => {
	return (
		<>
			{top && <Pagination {...paginationProps} />}

			{children}
			{bottom && <Pagination {...paginationProps} />}
		</>
	)
}

export default PaginationWrapper
