export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 mx-auto max-w-sm bg-white shadow-md flex justify-around py-3">
      <button className="text-blue-500 flex flex-col items-center">
        <HomeOutlinedIcon />
        <p className="text-xs">Home</p>
      </button>
      <button className="text-gray-500 flex flex-col items-center">
        <WorkIcon />
        <p className="text-xs">Your Gigs</p>
      </button>
      <button className="text-gray-500 flex flex-col items-center">
        <MessageIcon />
        <p className="text-xs">Messages</p>
      </button>
      <button className="text-gray-500 flex flex-col items-center">
        <PersonIcon />
        <p className="text-xs">Profile</p>
      </button>
    </nav>
  );
}
