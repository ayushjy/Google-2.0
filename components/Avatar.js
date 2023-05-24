const Avatar = ({ className }) => {
  return (
    <>
      <img loading="lazy" src="https://imageio.forbes.com/specials-images/imageserve/5ecebee7938ec500060ab34f/0x0.jpg?format=jpg&crop=2336,2337,x1064,y702,safe&height=416&width=416&fit=bounds" className={`rounded-full cursor-pointer h-10  transition duration-150 transform hover:scale-110
           ${className}` } alt="profile pic" />
    </>
  )
}

export default Avatar
