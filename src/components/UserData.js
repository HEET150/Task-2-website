const UserData = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const {country, handle, rating} = curUser;
                   // const {avata, city, zipcode} = curUser.address;

                    return (
                        <tr key={handle}>
                            
                            <td>{country}</td>
                            <td>{handle}</td>
                            <td>{rating}</td>
                        </tr>
                    )
                })

            }
        </>
    )
}
export default UserData;