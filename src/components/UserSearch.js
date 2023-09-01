// src/components/UserSearch.js
import React, { useState } from 'react';

function UserSearch() {
  const [username, setUsername] = useState('');
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSearch = () => {
    // Simulate fetching user data from an API (replace with your API call)
    const userData = [
      // Add your list of user data here
      {"lastName":"Ray","country":"India","lastOnlineTimeSeconds":1693515049,"city":"Kolkata","rating":2470,"friendOfCount":1073,"titlePhoto":"https://userpic.codeforces.org/2716850/title/7d13621c709ac866.jpg","handle":"Dominater069","avatar":"https://userpic.codeforces.org/2716850/avatar/6f087eab6958a0a8.jpg","firstName":"Shreyan","contribution":69,"organization":"IIT Kharagpur","rank":"grandmaster","maxRating":2470,"registrationTimeSeconds":1660061734,"maxRank":"grandmaster"},{"country":"India","lastOnlineTimeSeconds":1693427260,"city":"Hyderabad","rating":2174,"friendOfCount":50,"titlePhoto":"https://userpic.codeforces.org/433388/title/978b2a6634fe4904.jpg","handle":"Yuki726","avatar":"https://userpic.codeforces.org/433388/avatar/9b3912101969035d.jpg","contribution":12,"organization":"IIT Kharagpur","rank":"master","maxRating":2287,"registrationTimeSeconds":1468035723,"maxRank":"master"},{"lastName":"Chugh","country":"India","lastOnlineTimeSeconds":1693265118,"rating":2139,"friendOfCount":345,"titlePhoto":"https://userpic.codeforces.org/1336811/title/3cd88f9f73753cc7.jpg","handle":"RahulChugh","avatar":"https://userpic.codeforces.org/1336811/avatar/2cb1d0ac216c6c81.jpg","firstName":"Rahul","contribution":0,"organization":"IIT Kharagpur","rank":"master","maxRating":2319,"registrationTimeSeconds":1575388010,"maxRank":"international master"},{"country":"India","lastOnlineTimeSeconds":1693325302,"rating":2063,"friendOfCount":69,"titlePhoto":"https://userpic.codeforces.org/1353072/title/33a48061fdae2ea8.jpg","handle":"idealover","avatar":"https://userpic.codeforces.org/1353072/avatar/ed1bdaf04f8af5ad.jpg","contribution":0,"organization":"","rank":"candidate master","maxRating":2063,"registrationTimeSeconds":1576763696,"maxRank":"candidate master"},{"country":"India","lastOnlineTimeSeconds":1693574873,"city":"Bokaro Steel City","rating":2099,"friendOfCount":574,"titlePhoto":"https://userpic.codeforces.org/1280908/title/245eec987aef4ba5.jpg","handle":"hackerbhaiya","avatar":"https://userpic.codeforces.org/1280908/avatar/39266fe42b8e388b.jpg","firstName":"Shubham","contribution":28,"organization":"IIT Kharagpur","rank":"candidate master","maxRating":2099,"registrationTimeSeconds":1570915022,"email":"shubhamkumarxyz572@gmail.com","maxRank":"candidate master"},{"country":"India","lastOnlineTimeSeconds":1693391752,"rating":2024,"friendOfCount":99,"titlePhoto":"https://userpic.codeforces.org/2955441/title/eca2e6a1d97144a3.jpg","handle":"Rimuru.123","avatar":"https://userpic.codeforces.org/2955441/avatar/c3693c50477cd09a.jpg","contribution":0,"organization":"IIT Kharagpur","rank":"candidate master","maxRating":2024,"registrationTimeSeconds":1670727855,"maxRank":"candidate master"},{"lastName":"Das","country":"India","lastOnlineTimeSeconds":1693512821,"city":"Jamshedpur","rating":2007,"friendOfCount":169,"titlePhoto":"https://userpic.codeforces.org/2541921/title/7de972ce2ca7e9c3.jpg","handle":"When_Brain_Ded","avatar":"https://userpic.codeforces.org/2541921/avatar/2298c355aaa0d2f7.jpg","firstName":"Rohan","contribution":0,"organization":"IIT Kharagpur","rank":"candidate master","maxRating":2007,"registrationTimeSeconds":1650202098,"maxRank":"candidate master"},{"lastName":"Roy","country":"India","lastOnlineTimeSeconds":1693500257,"city":"Medinīpur","rating":1989,"friendOfCount":83,"titlePhoto":"https://userpic.codeforces.org/no-title.jpg","handle":"bbiswabasu","avatar":"https://userpic.codeforces.org/no-avatar.jpg","firstName":"Bbiswabasu","contribution":0,"organization":"IIT Kharagpur","rank":"candidate master","maxRating":1989,"registrationTimeSeconds":1576477003,"maxRank":"candidate master"},{"lastName":"Patkar","country":"India","lastOnlineTimeSeconds":1693155423,"city":"Mumbai","rating":1926,"friendOfCount":13,"titlePhoto":"https://userpic.codeforces.org/no-title.jpg","handle":"HoImes7","avatar":"https://userpic.codeforces.org/no-avatar.jpg","firstName":"Ashutosh","contribution":0,"organization":"IIT Kharagpur","rank":"candidate master","maxRating":1926,"registrationTimeSeconds":1646888289,"maxRank":"candidate master"},{"country":"India","lastOnlineTimeSeconds":1693564622,"city":"Asansol","rating":1968,"friendOfCount":265,"titlePhoto":"https://userpic.codeforces.org/2052561/title/5211138625edd199.jpg","handle":"Gr47","avatar":"https://userpic.codeforces.org/2052561/avatar/5e614471fef787f.jpg","contribution":0,"organization":"IIT Kharagpur","rank":"candidate master","maxRating":2034,"registrationTimeSeconds":1620475601,"maxRank":"candidate master"}

    ];

    setUserList(userData);
    setSelectedUser(null);
  };

  return (
    <div>
        
      <h1>User Information</h1>
      <div>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {userList.length > 0 && (
        <div>
          <h2>User List</h2>
          <ul>
            {userList.map((user, index) => (
              <li key={index}>
                <button onClick={() => setSelectedUser(user)}>View Details</button> {user.handle}
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedUser && (
        <div>
          <h2>User Details</h2>
          <p>Username: {selectedUser.handle}</p>
          <p>First Name: {selectedUser.firstName}</p>
          <p>Last Name: {selectedUser.lastName}</p>
          <p>Country: {selectedUser.country}</p>
          {/* Add more user information fields here */}
          <img src={selectedUser.avatar} alt="User Avatar" />
          <img src={selectedUser.titlePhoto} alt="User Title Photo" />
        </div>
      )}
    </div>
  );
}

export default UserSearch;
