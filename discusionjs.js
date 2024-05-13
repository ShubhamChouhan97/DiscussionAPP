var k = window.prompt("Enter your name");
        document.getElementById("name").innerHTML = "Welcome " + k;

        function addquestion() {
            var title = document.getElementById('title').value;
            if (title) {
                subject.value = title;
            } else {
                alert("Title and question are required.");
            }
        }

        function submitquestion() {
            var title = document.getElementById('title').value;
            var question = document.getElementById('question').value;
            var subject = document.getElementById('subject');

            if (title && question) {
                // Set subject to title
                subject.value = title;

                // Create a new question element
                var questionElement = document.createElement('div');
                questionElement.classList.add('question');

                var titleElement = document.createElement('h3');
                titleElement.textContent = title;
                questionElement.appendChild(titleElement);

                var questionTextElement = document.createElement('p');
                questionTextElement.textContent = question;
                questionElement.appendChild(questionTextElement);

                // Add click event listener to the question element
                questionElement.addEventListener('click', function () {
                    // Display question, response form, and responses in the right pane
                    displayQuestionAndResponses(title, question);
                });

                // Append the question to the right pane
                var leftPane = document.querySelector('.left-pane');
                leftPane.appendChild(questionElement);

                // Clear input fields
                document.getElementById('title').value = '';
                document.getElementById('question').value = '';
            } else {
                alert("Title and question are required.");
            }
        }

        // Function to display question and responses
        function displayQuestionAndResponses(title, question) {
            // Clear existing content in the right pane
            var rightPane = document.querySelector('.right-pane');
            rightPane.innerHTML = '<b style="font-size: larger;">Question</b>';

            // Create elements to display question
            var questionTitle = document.createElement('h3');
            questionTitle.textContent = title;

            var questionText = document.createElement('p');
            questionText.textContent = question;

            // Create response form
            var responseForm = document.createElement('form');
            responseForm.innerHTML = `
                <label for="nam">Name:</label>
                <input type="text" id="nam" name="name" placeholder="Enter Name"><br><br>
                <label for="comment">Comment:</label>
                <textarea id="comment" name="comment" rows="4" cols="50" placeholder="Provide Comment" ></textarea><br><br>
                <button type="button" onclick="submitResponse()" class="resbtn">Submit</button>
            `;

            // Append elements to the right pane
            rightPane.appendChild(questionTitle);
            rightPane.appendChild(questionText);
            rightPane.appendChild(responseForm);

            // Fetch and display responses (You can implement this functionality as needed)
            displayResponses();
        }

        // Function to submit a response
        function submitResponse() {
            var name = document.getElementById('nam').value;
            var comment = document.getElementById('comment').value;

            if (name && comment) {
                // Create a new response element
                var responseElement = document.createElement('div');
                responseElement.classList.add('response');

                // Write inner HTML for response
                responseElement.innerHTML = `
                    <p><b>Name:</b> ${name}</p>
                    <p><b>Comment:</b> ${comment}</p>
                `;

                // Append the response to the right pane
                var Pane = document.querySelector('.right-pane');
                Pane.appendChild(responseElement);

                // Append the response to the "Previous Answers" section
                var previousAnswersSection = document.getElementById('previous-answers');
                var answerElement = document.createElement('div');
                answerElement.classList.add('answer');
                answerElement.innerHTML = `
                    <p><b>Name:</b> ${name}</p>
                    <p><b>Comment:</b> ${comment}</p>
                `;
                previousAnswersSection.appendChild(answerElement);

                // Clear input fields
                document.getElementById('nam').value = '';
                document.getElementById('comment').value = '';
            } else {
                alert("Name and comment are required.");
            }
        }

        // Function to fetch and display existing responses
        function displayResponses() {
            // This function can be implemented to fetch responses from a server or any other source
            // For demonstration purposes, I'll just log a message here
            console.log("Fetching and displaying responses...");
        }