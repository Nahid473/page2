document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get the values from the form
    var title = document.getElementById('postTitle').value;
    var content = document.getElementById('postContent').value;
    var photo = document.getElementById('postPhoto').files[0];
  
    // Display the uploaded post
    displayPost(title, content, photo);
  
    // Reset the form
    document.getElementById('postForm').reset();
  });
  
  function displayPost(title, content, photo) {
    // Create a new post element
    var postElement = document.createElement('div');
    postElement.classList.add('post');
    
    // Create elements for post data
    var titleElement = document.createElement('h3');
    titleElement.textContent = title;
    var contentElement = document.createElement('p');
    contentElement.textContent = content;
    var photoElement = document.createElement('img');
    photoElement.src = URL.createObjectURL(photo);
    photoElement.alt = 'Uploaded Photo';
    
    // Append post data elements to the post element
    postElement.appendChild(titleElement);
    postElement.appendChild(contentElement);
    postElement.appendChild(photoElement);
    
    // Append the post element to the post container
    var postContainer = document.getElementById('postContainer');
    postContainer.appendChild(postElement);
  }
  function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
   
    // Convert 24-hour time format to 12-hour format
    var meridiem = "AM";
    if (hours > 12) {
      hours = hours - 12;
      meridiem = "PM";
    }
  
    // Add leading zeros to minutes and seconds
    minutes = padZero(minutes);
    seconds = padZero(seconds);
  
    // Display the time
    var timeString = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    document.getElementById("time").textContent = timeString;
  
    // Update the clock every second
    setTimeout(updateClock, 1000);
  }
  
  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }
  
  // Start the clock
  updateClock();
// bmi section
// Calculate BMI
function calculate() {
  // Get input values
  var height = parseFloat(document.getElementById("height").value);
  var weight = parseFloat(document.getElementById("weight").value);
  
  // Perform BMI calculation
  var bmi = weight / ((height/100) ** 2);
  
  // Display the result
  document.getElementById("result").value = bmi.toFixed();
}
