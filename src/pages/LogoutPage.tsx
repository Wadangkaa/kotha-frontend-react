import { useDispatch } from "react-redux";
import { logout } from '@/redux/slices/authSlice';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "sonner";

const LogoutPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(logout());
		toast.success('logout successful')
		navigate('/');
	}, [dispatch, navigate]);

	return (
		<>
		</>
	);
}

export default LogoutPage;
