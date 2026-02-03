import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "../../components/ui/button";
import { axiosInstance } from "../../lib/axios";
import { AUTH_ROUTES } from "../../utils/constants";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      let { data } = await axiosInstance.post(AUTH_ROUTES.LOGOUT);
      //   console.log(data);
      toast.success(data.message);
      navigate("/");
    } catch (error) {
      //   console.log("error: ", error);
      console.log(error.response.data.message);
    }
  };

  return (
    <div>
      <Button
        onClick={handleLogout}
        className="flex justify-center items-center mx-auto my-auto mt-30"
      >
        Logout
      </Button>
    </div>
  );
};

export default Profile;
