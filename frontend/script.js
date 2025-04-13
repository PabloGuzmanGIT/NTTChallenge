
fetch('http://localhost:3000/api/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch data from the backend');
    }
    return response.json();
  })
  .then(users => {
    const usersContainer = document.getElementById('users');
    
    users.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.classList.add('user-container');
      
      userDiv.innerHTML = `
        <h2>${user.name.title} ${user.name.first} ${user.name.last}</h2>
        <p><strong>Gender:</strong> ${user.gender}</p>
        <p><strong>Location:</strong> ${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country} ${user.location.postcode}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Date of Birth:</strong> ${new Date(user.dob.date).toLocaleDateString()}</p>
        <img src="${user.picture.large}" alt="User Image">
      `;
      
      usersContainer.appendChild(userDiv);
    });
  })
  .catch(error => {
    console.error('Error fetching users:', error);
    const usersContainer = document.getElementById('users');
    usersContainer.innerHTML = '<p>Failed to load user data. Please try again later.</p>';
  });

