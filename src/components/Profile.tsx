import jakai from '../assets/profile.png'

const Profile = () => {
  return (
    <div className="flex justify-center my-5">
      <img
        alt="profile"
        src={jakai}
        className="w-[200px] rounded-[150px] block"
      />
    </div>
  );
};

export default Profile;
