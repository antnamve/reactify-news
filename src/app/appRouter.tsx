import { MainPage } from '@/pages/main/ui/Page'
import { NewsPage } from '@/pages/news/ui/Page'
import { createBrowserRouter } from 'react-router-dom'
import BaseLayout from './layouts/BaseLayout'

export const appRouter = createBrowserRouter([
	{
		element: <BaseLayout />,
		errorElement: <div>Error</div>,
		children: [
			{
				path: '/',
				element: <MainPage />,
			},
			{
				path: '/news/:id',
				element: <NewsPage />,
			},
		],
	},
])
