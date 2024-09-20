import Sidebar from '@/components/admin/Sidebar';
import { Outlet } from 'react-router-dom';

function DashboardPage() {
	return (
		<>
			<div className="tw-flex tw-h-screen">
				<Sidebar />
				<div className="tw-flex-1 tw-p-6 tw-bg-gray-100">
					<Outlet />
				</div>
			</div>
		</>
	);
}

export default DashboardPage;
