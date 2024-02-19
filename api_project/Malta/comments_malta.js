// Fetch comments from the server and render them
async function fetchComments() {
    try {
        const response = await axios.get('https://65cdf5d1c715428e8b3f9540.mockapi.io/comments/malta');
        const comments = response.data.filter(item => item.userName && item.commentText);
        renderComments(comments);
    } catch (error) {
        console.error('Error fetching comments:', error);
    }
}

// Render comments on the webpage
function renderComments(comments) {
    const commentsContainer = document.getElementById('commentsContainer');
    commentsContainer.innerHTML = '';
    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('cmt-div')
        commentElement.innerHTML = `
            <p class="cmt-mrgn"><strong>${comment.userName}</strong>: ${comment.commentText}</p>
            <button class="cmt-btn" onclick="editComment('${comment.id}', '${comment.userName}', '${comment.commentText}')">Edit</button>
            <button class="cmt-btn" onclick="deleteComment('${comment.id}')">Delete</button>
        `;
        commentsContainer.appendChild(commentElement);
    });
}

// Add a new comment
async function addComment(userName, commentText) {
    try {
        const response = await axios.post('https://65cdf5d1c715428e8b3f9540.mockapi.io/comments/malta', { userName, commentText });
        console.log('Comment added successfully:', response.data);
        fetchComments();
    } catch (error) {
        console.error('Error adding comment:', error);
    }
}

// Edit an existing comment
async function editComment(commentId, userName, commentText) {
    const newCommentText = prompt('Enter new comment:', commentText);
    if (!newCommentText) return; // If user cancels, exit function
    try {
        await axios.put(`https://65cdf5d1c715428e8b3f9540.mockapi.io/comments/malta/${commentId}`, { commentText: newCommentText });
        console.log('Comment edited successfully');
        fetchComments();
    } catch (error) {
        console.error('Error editing comment:', error);
    }
}

// Delete a comment
async function deleteComment(commentId) {
    try {
        await axios.delete(`https://65cdf5d1c715428e8b3f9540.mockapi.io/comments/malta/${commentId}`);
        console.log('Comment deleted successfully');
        fetchComments();
    } catch (error) {
        console.error('Error deleting comment:', error);
    }
}

// Event listener for comment form submission
document.getElementById('commentForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const userName = document.getElementById('userName').value;
    const commentText = document.getElementById('commentText').value;
    addComment(userName, commentText);
});

// Load comments when the page loads
fetchComments(); 
// Fetch comments from the server and render them