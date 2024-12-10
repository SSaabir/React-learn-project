function User() {
    return(
        <div className="container">
            <span className="">ONLINE</span>
            <img src="./images/th-3760927380.jpg" alt="user" />
            <h3 className="my-2.5">Full Name</h3>
            <h3 className="my-2.5">City</h3>
            <p>Work</p>
            <div>
                <button>Message</button>
                <button>Following</button>
            </div>
            <div>
                <h6>Skills</h6>
                <ul>
                    <li>sd</li>
                    <li>sd</li>
                    <li>sd</li>
                    <li>sd</li>
                    <li>sd</li>
                    <li>sd</li>
                </ul>
            </div>
        </div>
    )
}

export const UserCard = () => {
  return (
        <User />
  )
}
